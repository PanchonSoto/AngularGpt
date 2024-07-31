import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';




@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,

    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,

    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .chat-messages::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
    }

    .chat-messages::-webkit-scrollbar
    {
      width: 12px;
      background-color: #F5F5F5;
    }

    .chat-messages::-webkit-scrollbar-thumb
    {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #555;
    }
  `,
})
export default class OrthographyPageComponent {

  handleMessageWithFile({prompt,file}: TextMessageEvent) {
    console.log({prompt,file});
  }

}
