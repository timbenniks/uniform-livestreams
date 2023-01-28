import type { NextApiRequest, NextApiResponse } from 'next'

function isDateAfterToday(date) {
  return new Date(date.toDateString()) > new Date(new Date().toDateString());
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${id}&key=${process.env.YOUTUBE_KEY}`)

  const result = await data.json()

  const video = result.items.map(video => {
    const scheduledStartTime = video?.liveStreamingDetails?.scheduledStartTime || false
    let scheduledDate = null;

    if (scheduledStartTime) {
      scheduledDate = new Date(scheduledStartTime)
    }

    return {
      date: video.snippet.publishedAt,
      title: video.snippet.title,
      description: video.snippet.description,
      image: video.snippet.thumbnails.maxres.url,
      videoId: video.id,
      scheduled: scheduledStartTime ? isDateAfterToday(scheduledDate) : false
    }
  })

  res.status(200).json({ video })
}