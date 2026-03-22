import { IMAGE_ASSETS } from "@/assets/images";
import { VIDEO_ASSETS } from "@/assets/video";
import { FAVICON_ASSETS } from "@/assets/favicon";

export const IMAGEKIT_MEDIA = {
  header: {
    logoLight:
      "https://ik.imagekit.io/moulahguine/myPortfolio/portfolioLogo/faviconlight",
    logoDark:
      "https://ik.imagekit.io/moulahguine/myPortfolio/portfolioLogo/favicondark",
  },
  hero: {
    profilePicture:
      "https://ik.imagekit.io/moulahguine/myPortfolio/profilePicture/ProfilePicture",
    largeProfilePicture:
      "https://ik.imagekit.io/moulahguine/myPortfolio/profilePicture/lagreprofilepicture",
  },
  about: {
    video:
      "https://ik.imagekit.io/moulahguine/myPortfolio/introVideo/introVideo",
    posterDark:
      "https://ik.imagekit.io/moulahguine/myPortfolio/introVideo/ThumbnailDarkTheme",
    posterLight:
      "https://ik.imagekit.io/moulahguine/myPortfolio/introVideo/ThumbnailLightTheme",
  },
};

export const LOCAL_MEDIA = {
  fallback: {
    generic: "/og/og-image.png",
  },
  header: {
    logoLight: IMAGE_ASSETS.portfolioLogo.faviconLight,
    logoDark: IMAGE_ASSETS.portfolioLogo.faviconDark,
  },
  hero: {
    profilePicture: IMAGE_ASSETS.profilePicture.profilePicture,
    largeProfilePicture: IMAGE_ASSETS.profilePicture.largeProfilePicture,
  },
  about: {
    video: VIDEO_ASSETS.introVideo.src,
    posterDark: VIDEO_ASSETS.introVideo.thumbnailDark,
    posterLight: VIDEO_ASSETS.introVideo.thumbnailLight,
  },
  favicon: FAVICON_ASSETS,
  og: {
    image: "/og/og-image.png",
  },
};
