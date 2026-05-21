import { useCallback, useMemo } from 'react';
import useClipboard from './use-clipboard';

type ShareUrlConfig = {
  url: string;
  title?: string;
};

type SocialProvider =
  | 'linkedin'
  | 'facebook'
  | 'slack'
  | 'twitter'
  | 'clipboard';

const SOCIAL_PROVIDERS = {
  linkedin: {
    name: 'LinkedIn',
    shareUrl: (config: ShareUrlConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: 'Facebook',
    shareUrl: (config: ShareUrlConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: 'Slack',
    shareUrl: (config: ShareUrlConfig) =>
      `https://www.slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config?.title || '')}`,
  },
  twitter: {
    name: 'Twitter',
    shareUrl: (config: ShareUrlConfig) =>
      `https://www.x.com/intent/tweet?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config?.title || '')}`,
  },
};

interface UseShareProps extends ShareUrlConfig {
  clipboardTimeout?: number;
  text?: string;
}

export default function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) {
  const { handleCopy, isCopied } = useClipboard({
    timeout: clipboardTimeout,
  });

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [title, text, url],
  );

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === 'clipboard') {
          return await handleCopy(url);
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];

        if (!providerConfig) {
          throw new Error(`Provider não suportado: ${provider}`);
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(shareUrl, '_blank');

        return !!shareWindow;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    [handleCopy, shareConfig, url],
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: 'clipboard',
        name: isCopied ? 'Link copiado' : 'Copiar link',
        action: () => share('clipboard'),
      },
    ],
    [isCopied, share],
  );

  return { shareButtons };
}
