import { profile } from "@/data/profile";
import { renderSocialImage, socialImageContentType, socialImageSize } from "@/components/social-image";

export const alt = "Taufik Triantono — Backend Engineer";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  return renderSocialImage({
    eyebrow: "BACKEND ENGINEER",
    title: profile.name,
    description: profile.headline,
  });
}
