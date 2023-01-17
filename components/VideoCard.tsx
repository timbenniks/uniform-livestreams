import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";

type VideoCardProps = ComponentProps<{
  title: string;
  description: string;
  poster: string;
  videoId: string;
}>;

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  poster,
  description,
  videoId,
}: VideoCardProps) => (
  <div className="video-card">
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener"
    >
      <img
        src={`https://res.cloudinary.com/dwfcofnrd/image/fetch/w_500,q_auto,f_auto/${poster}`}
        alt={title}
        width={160}
        height={90}
        className="block w-full mb-4"
        loading="lazy"
      />
      {title && (
        <h3 className="text-[#0036cf] font-bold text-xl mb-2">{title}</h3>
      )}
      {description && <p className="text-black line-clamp-2">{description}</p>}
    </a>
  </div>
);

registerUniformComponent({
  type: "videoCard",
  component: VideoCard,
});

export default VideoCard;
