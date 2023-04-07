import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from 'src/components/components.module';
import { GRAPHICAL_EDITOR_CONFIGURATION } from 'src/configuration/GraphicalEditorConfiguration';
import { GuiEditorConfiguration } from 'src/configuration/GuiEditorConfiguration';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule
    ],
    providers: [
        { provide: GRAPHICAL_EDITOR_CONFIGURATION, useExisting: GuiEditorConfiguration }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
