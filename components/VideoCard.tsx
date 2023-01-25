import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";

type VideoCardProps = ComponentProps<{
  title: string;
  description: string;
  poster: string;
  videoId: string;
  component: {
    variant?: string;
  };
}>;

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  poster,
  description,
  videoId,
  component: { variant },
}: VideoCardProps) => (
  <div className={`video-card ${variant ? "bg-white" : ""}`}>
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener"
    >
      <img
        sizes="400px"
        srcSet={`https://res.cloudinary.com/dwfcofnrd/image/fetch/w_400,q_auto,f_auto/${poster} 400w, https://res.cloudinary.com/dwfcofnrd/image/fetch/w_600,q_auto,f_auto/${poster} 600w, https://res.cloudinary.com/dwfcofnrd/image/fetch/w_1000,q_auto,f_auto/${poster} 1000w`}
        alt={title}
        width={160}
        height={90}
        className="block w-full mb-4"
        loading="lazy"
      />
      <div className={`${variant ? "px-4 pb-4" : ""}`}>
        {title && (
          <h3 className="text-[#0036cf] font-bold text-xl mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-black line-clamp-2">{description}</p>
        )}
      </div>
    </a>
  </div>
);

registerUniformComponent({
  type: "videoCard",
  component: VideoCard,
});

export default VideoCard;
