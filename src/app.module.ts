import { Module } from '@nestjs/common';
import { FramesModule } from './frames/frames.module';

@Module({
  imports: [FramesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
