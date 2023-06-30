import { Body, Controller, Get, Post } from '@nestjs/common';
import { FramesService } from './frames.service';
import { createFrameDto } from './dto/frames.dto';

@Controller('frames')
export class FramesController {
    constructor(private readonly framesService: FramesService) {
        this.framesService = framesService;
    }


    @Get()
    getAllFrames() {
        return this.framesService.gelAllFrames();
    }

    @Post()
    createService(@Body() newFrame: createFrameDto) {
        return this.framesService.createService(newFrame.id, newFrame.name, newFrame.description);
    }
}
