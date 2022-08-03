import { Component } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ImageComponent } from '../app/image/image.component';


export default{
    title : 'Example/ Image Component',
    Component : ImageComponent,
} as Meta;



const Template : Story<ImageComponent> = (args : ImageComponent) =>({
    component : ImageComponent,
    props: args,
});


export const NoImageCaption = Template.bind({});
NoImageCaption.args = {
    figCaptionTxt : '',
};

export const WithImageCaption = Template.bind({});
WithImageCaption.args = {
    figCaptionTxt : 'Captions-Captions-Captions-Captions-Captions-',
};

export const WithFullOpacity = Template.bind({});
WithFullOpacity.args = {
    imgOpacity : 1,
};

export const WithHalfOpacity = Template.bind({});
WithHalfOpacity.args = {
    imgOpacity : 0.5
};

