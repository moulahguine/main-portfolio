import { IMAGE_ASSETS } from "@/assets/images";
import { VIDEO_ASSETS } from "@/assets/video";

export const IMAGEKIT_MEDIA = {
  header: {
    logo: "https://ik.imagekit.io/moulahguine/myPortfolio/portfolioLogo/Logo?updatedAt=1774776747962",
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
  header: {
    logo: IMAGE_ASSETS.profileLogo.profileLogo,
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
};
