import type { NextApiRequest, NextApiResponse } from 'next'

export function toVideo(video, fromPlaylist) {
  return {
    date: video.snippet.publishedAt,
    title: video.snippet.title,
    description: video.snippet.description,
    image: video.snippet.thumbnails?.high?.url.replace("hqdefault", "maxresdefault"),
    videoId: fromPlaylist ? video.snippet.resourceId.videoId : video.id.videoId ? video.id.videoId : video.id
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, count } = req.query
  const data = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&key=${process.env.YOUTUBE_KEY}&maxResults=${count || 5}`)

  const result = await data.json()
  let response;

  if (result.error) {
    response = result.error
  }
  else {
    response = result.items.map(video => (toVideo(video, true))).filter((video) => video.title !== 'Deleted video')
  }

  res.status(response.code || 200).json({ result: response })
}
