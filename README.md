# ImageKit AI and GenAI Transformations

This project demonstrates how to use ImageKit's AI and GenAI transformations to create production-ready images. Below are examples of different transformations applied to images for various use cases.

## Starting the Server

To start the development server, use the following command:

```bash
npm run dev
```

This will start the server using Next.js.

## Consistent Product Images with Remove Background

Transform your product images to have a consistent background using the following transformation:
```
e-removedotbg:bg-F1F1F1:t-true,w-600,h-600,c-at_max:w-1000,h-1000,cm-pad_extract,bg-F1F1F1
```
Example URL:
[Consistent Product Images](https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/cosmetics/2.jpg?tr=e-removedotbg:bg-F1F1F1:t-true,w-600,h-600,c-at_max:w-1000,h-1000,cm-pad_extract,bg-F1F1F1)

## Changing Image Background for Different Product Placements

Use GenAI to change the background of images for different product placements:
Example URL:
[Changing Image Background](https://ik.imagekit.io/ikmedia/Graphics/Random%20images/pexels-mikebirdy-810357.jpg?tr=e-changebg-prompt-on%20an%20open%20road%20with%20fields%20and%20sunset%20in%20the%20background)

## Expanding Images for Mobile Using Generative Fill

Expand images to fit mobile screens using generative fill:
Example URL:
[Expanding Images for Mobile](https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/cars/car_sunset.webp?tr=w-400,h-600,cm-pad_resize,bg-genfill)

## Generating Images from Scratch

Create images from scratch using GenAI:
Example URL:
[Generating Images from Scratch](https://ik.imagekit.io/ikmedia/ik-genimg-prompt-A%20blue%20backpack%20with%20some%20orange%20handles%20in%20the%20center%20kept%20on%20rock%20on%20the%20beach%20with%20blue%20sea%20and%20sunset%20in%20the%20background/generated-bag-image-5.jpg)

## Adding Overlays to an Image to Create a Banner Ad

Combine overlays with images to create engaging banner ads:
Example URL:
[Adding Overlays to Create a Banner Ad](https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/bag/3.png?tr=l-image,i-ik_canvas,e-gradient-from-00000000_to-00000090,w-bw,h-400,lfo-bottom,l-end:l-text,i-Mega%20Sale,co-FFFFFF,fs-108,tg-b,lx-40,ly-N150,l-end:l-text,i-40%%20off%20on%20backpacks,co-FFFFFF,fs-53,lx-40,ly-N70,l-end:l-image,i-imagekit_logo.png,w-300,ly-40,lx-N40,l-end)

## Combining Background Change Using GenAI with Overlays to Create Ads

Create ads by combining background changes with overlays:
Example URL:
[Combining Background Change with Overlays](https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/bag/2.jpg?tr=e-changebg-prompt-on%20a%20rock%20with%20snowy%20mountains%20behind:w-1080,h-1080,cm-pad_resize,bg-genfill:l-image,i-ik_canvas,w-bw,h-400,e-gradient-from-00000000_to-00000090,lfo-bottom,l-end:l-text,i-New%20Year%20Sale,fs-108,tg-b,co-FFFFFF,lx-40,ly-N140,l-end:l-text,i-40%25%20off%20on%20backpacks,co-FFFFFF,fs-53,lx-40,ly-N70,l-end:l-image,i-imagekit_logo.png,w-300,ly-40,lx-N40,l-end)
