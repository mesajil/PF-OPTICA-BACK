import { Injectable } from '@nestjs/common';
import { Frames } from './frames.entity';

@Injectable()
export class FramesService {
    
    private frames: Frames[] = [
        {
            id: '1',
            name: 'Frame 1',
            description: 'Frame 1 description'
        }
    ]
    
    gelAllFrames() {
        return this.frames;
    }

    createService(id:string, name:string, description:string) {
        const newFrame = new Frames();
        newFrame.id = id;
        newFrame.name = name;
        newFrame.description = description;

        this.frames.push(newFrame);
        return newFrame;
    }
}
