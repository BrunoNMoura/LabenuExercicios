import { TVideo } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class VideoDatabase extends BaseDatabase {
  public static TABLE_VIDEOS = "videos";
  public async findVideoById(id: string | undefined): Promise<TVideo | undefined> {
    const [idVideo]: TVideo[] = await BaseDatabase.connection(
      VideoDatabase.TABLE_VIDEOS
    ).where({ id });
    return idVideo;
  }
  public async findVideos(): Promise<TVideo[]> {
    const allVideos: TVideo[] = await BaseDatabase.connection(
      VideoDatabase.TABLE_VIDEOS
    );
    return allVideos;
  }
  public async createdVideo(newVideoDB: TVideo): Promise<void> {
    await BaseDatabase.connection(VideoDatabase.TABLE_VIDEOS).insert(
      newVideoDB
    );
  }

  public async updateVideo(
    //id: string | undefined,
    putVideoDB: TVideo
  ): Promise<void> {
    await BaseDatabase.connection(VideoDatabase.TABLE_VIDEOS)
      .update( putVideoDB )
      .where({ id:putVideoDB.id });
  }

  public async deleteVideo(id: string | undefined): Promise<void> {
    await BaseDatabase.connection(VideoDatabase.TABLE_VIDEOS)
      .del()
      .where({ id });
  }
}
