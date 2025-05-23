const imageData = {
  "Skincare / Cosmetics": [
    '/webinar-content/practical-ai/cosmetics/1.jpg',
    '/webinar-content/practical-ai/cosmetics/2.jpg',
    '/webinar-content/practical-ai/cosmetics/3.jpg',
    '/webinar-content/practical-ai/cosmetics/4.jpg',
  ],
  Shoes: [
   '/webinar-content/practical-ai/shoes/1.jpg',
    '/webinar-content/practical-ai/shoes/2.jpg',
    '/webinar-content/practical-ai/shoes/3.jpg',
    '/webinar-content/practical-ai/shoes/4.jpg',
  ],
  Cars: [
    '/Graphics/Random%20images/pexels-mikebirdy-810357.jpg'
  ],
  "Ecom / Stock Imagery": [
    '/webinar-content/practical-ai/Apparel/woman-2.jpg'
  ],
};

export const defaultCategory = "Skincare / Cosmetics";
export const removeBGData = {
  "Skincare / Cosmetics" : imageData["Skincare / Cosmetics"],
  "Shoes" : imageData["Shoes"]
};

export const lifestyleImageDefaultCategory = "Shoes";
export const lifestyleImagesData = {
  "Shoes" : imageData["Shoes"][0],
   "Cars" : imageData["Cars"][0],
  "Ecom / Stock Imagery" : imageData["Ecom / Stock Imagery"][0]
}
export const changeBGTransforms = {
  "Ecom / Stock Imagery" : [
    "e-changebg-prompt-a corporate office",
    "e-changebg-prompt-in a college classroom with a board behind",
    "e-changebg-prompt-a restaurant during the day with chairs and tables in the distance"
  ],
  "Shoes" : [
    "e-changebg-prompt-on a road",
    "e-changebg-prompt-on a field of grass",
    "e-changebg-prompt-minimal concrete studio with soft lighting"
  ],
  "Cars" : [
    "e-changebg-prompt-on a road",
    "e-changebg-prompt-evening through the city",
    "e-changebg-prompt-on an open road with fields and sunset in the background"
  ]
}
export const genFillDefaultCategory = "Cars";
export const genFillImagesData = {
  "Cars" : "/webinar-content/practical-ai/cars/car_sunset.webp",
  "Bag" : "/webinar-content/practical-ai/bag/3.png"
}

export const singleAdDefaultCategory = "Bag";
export const singleAdImagesData = {
  "Bag" : "/webinar-content/practical-ai/bag/3.png"
}


export const createImagesDefaultCategory = "Bag";
export const createImagesData = {
  "Bag" : [
      "A medium sized blue backpack with some orange handles and zippers kept on a trail in a forest",
      "A blue backpack with some orange handles kept on a coffee table next to a window",
      "A blue backpack with some orange handles kept on grass in a park with flowers and trees in the background",
      "A blue backpack with some orange handles in the center kept on rock on the beach with blue sea and sunset in the background"
  ]
}

export const generateImageDataDefaultCategory = "bag-sea"
export const generateImageData = {
  "bag-sea" : {
    url : "https://ik.imagekit.io/ikmedia/ik-genimg-prompt-A%20blue%20backpack%20with%20some%20orange%20handles%20in%20the%20center%20kept%20on%20rock%20on%20the%20beach%20with%20blue%20sea%20and%20sunset%20in%20the%20background/generated-bag-image-5.jpg",
    prompt: "A blue backpack with some orange handles in the center kept on rock on the beach with blue sea and sunset in the background"
  },
  "bag-table" : {
    url : "https://ik.imagekit.io/ikmedia/ik-genimg-prompt-A%20blue%20backpack%20with%20some%20orange%20handles%20kept%20on%20a%20coffee%20table%20next%20to%20a%20window/generated-bag-image-1.jpg",
    prompt : "A blue backpack with some orange handles kept on a coffee table next to a window"
  },
  "athlete" : {
    url : "https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/generated/3.jpeg?tr=w-1200,h-630,cm-pad_resize,bg-genfill",
    prompt : "GenFill to make it match OG image dimensions + prompt = a male athlete standing on a race track during early morning hours warming up for a run"
  }
}

export const adCreativesDefaultCategory = "Bags Ads";
export const adCreativesImagesData = {
  "Bags Ads" : [
    {
      url : "https://ik.imagekit.io/ikmedia/ik-genimg-prompt-A%20medium%20sized%20blue%20backpack%20with%20some%20orange%20handles%20and%20zippers%20kept%20on%20a%20trail%20in%20a%20forest/generated-bag-image-2.jpg?tr=w-1080,h-1080:l-image,i-ik_canvas,w-bw,h-400,e-gradient-from-00000000_to-00000090,lfo-bottom,l-end:l-text,i-Mega%20Sale,fs-108,tg-b,co-FFFFFF,lx-40,ly-N140,l-end:l-text,i-40%25%20off%20on%20backpacks,co-FFFFFF,fs-53,lx-40,ly-N70,l-end:l-image,i-imagekit_logo.png,w-300,ly-40,lx-N40,l-end",
      type : "Generated",
      prompt : "A medium sized blue backpack with some orange handles and zippers kept on a trail in a forest"
    },
    {
      url : "https://ik.imagekit.io/ikmedia/ik-genimg-prompt-A%20blue%20backpack%20with%20some%20orange%20handles%20%20kept%20on%20grass%20in%20a%20park%20with%20flowers%20and%20trees%20in%20the%20background/generated-bag-image-3.jpg?tr=w-1080,h-1080:l-image,i-ik_canvas,w-bw,h-400,e-gradient-from-00000000_to-00000090,lfo-bottom,l-end:l-text,i-Mega%20Sale,fs-108,tg-b,co-FFFFFF,lx-40,ly-N140,l-end:l-text,i-40%25%20off%20on%20backpacks,co-FFFFFF,fs-53,lx-40,ly-N70,l-end:l-image,i-imagekit_logo.png,w-300,ly-40,lx-N40,l-end",
      type : "Generated",
      prompt : "A blue backpack with some orange handles kept on grass in a park with flowers and trees in the background"
    },
    {
      url : "https://ik.imagekit.io/ikmedia/ik-genimg-prompt-A%20blue%20backpack%20with%20some%20orange%20handles%20%20%20in%20the%20center%20kept%20on%20rock%20on%20the%20beach%20with%20blue%20sea%20and%20sunset%20in%20the%20background/generated-bag-image-5.jpg?tr=w-1080,h-1080:l-image,i-ik_canvas,w-bw,h-400,e-gradient-from-00000000_to-00000090,lfo-bottom,l-end:l-text,i-Mega%20Sale,fs-108,tg-b,co-FFFFFF,lx-40,ly-N140,l-end:l-text,i-40%25%20off%20on%20backpacks,co-FFFFFF,fs-53,lx-40,ly-N70,l-end:l-image,i-imagekit_logo.png,w-300,ly-40,lx-40,l-end",
      type: "Generated",
      prompt : "A blue backpack with some orange handles in the center kept on rock on the beach with blue sea and sunset in the background"
    },
    {
      url : "https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/bag/2.jpg?tr=e-changebg-prompt-on%20a%20rock%20with%20snowy%20mountains%20behind:w-1080,h-1080,cm-pad_resize,bg-genfill:l-image,i-ik_canvas,w-bw,h-400,e-gradient-from-00000000_to-00000090,lfo-bottom,l-end:l-text,i-New Year%20Sale,fs-108,tg-b,co-FFFFFF,lx-40,ly-N140,l-end:l-text,i-40%25%20off%20on%20backpacks,co-FFFFFF,fs-53,lx-40,ly-N70,l-end:l-image,i-imagekit_logo.png,w-300,ly-40,lx-N40,l-end",
      type: "Change Background",
      prompt : "on a rock with snowy mountains behind"
    },
    {
      url : "https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/bag/2.jpg?tr=e-changebg-prompt-on%20a%20table%20in%20a%20cafe%20with%20an%20espresso%20machine%20and%20typical%20cafe%20vibes%20blurred%20in%20the%20background:w-1080,h-1080,cm-pad_resize,bg-genfill:l-image,i-ik_canvas,w-bw,h-400,e-gradient-from-00000000_to-00000090,lfo-bottom,l-end:l-text,i-Bumper%20Sale,fs-108,tg-b,co-FFFFFF,lx-40,ly-N140,l-end:l-text,i-50%%20off%20on%20backpacks,co-FFFFFF,fs-53,lx-40,ly-N70,l-end:l-image,i-imagekit_logo.png,w-300,ly-40,lx-N40,l-end",
      type: "Change Background",
      prompt : "on a table in a cafe with an espresso machine and typical cafe vibes blurred in the background"
    },
    {
      url: "https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/bag/2.jpg?tr=e-changebg-prompt-on%20a%20park%20bench%20with%20tress%20and%20flowers%20behind:w-1080,h-1080,cm-pad_resize,bg-genfill:l-image,i-ik_canvas,w-bw,h-400,e-gradient-from-00000000_to-00000090,lfo-bottom,l-end:l-text,i-Huge Discount,fs-108,tg-b,co-FFFFFF,lx-40,ly-N140,l-end:l-text,i-40%25%20off%20on%20backpacks,co-FFFFFF,fs-53,lx-40,ly-N70,l-end:l-image,i-imagekit_logo.png,w-300,ly-40,lx-N40,l-end",
      type: "Change Background",
      prompt : "on a park bench with tress and flowers behind"
    }
  ],
  "Indian Apparel" : [
    {
      url : "https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/Apparel/indian-suit-woman.jpg",
      type: "Original (example from TheLoom.in)",
      prompt : "NA"
    },
    {
      url: "https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/Apparel/indian-suit-woman.jpg?tr=e-changebg-prompt-standing%20against%20a%20textured%20grainy%20white%20colored%20wall%20with%20a%20green%20planter%20on%20the%20left:l-image,i-ik_canvas,bg-FFFFFF75,ly-N20,lx-bw_mul_0.1,w-bw_mul_0.8,h-200,l-end:l-text,i-New%20Year%20Sale,lx-bw_mul_0.12,ly-N130,w-bw_mul_0.76,ia-center,co-000000,fs-60,tg-b,l-end:l-text,i-Rs.%202%2C000%20off%20on%20your%20first%20purchase,lx-bw_mul_0.12,ly-N80,w-bw_mul_0.76,ia-center,co-000000,fs-30,l-end:l-text,i-*%20T%26C%20apply,lx-bw_mul_0.12,ly-N30,w-bw_mul_0.76,ia-right,co-888888,fs-20,l-end",
      type : "Background change for Mobile Vertical",
      prompt : "standing against a textured grainy white colored wall with a green planter on the left"
    },
    {
      url: "https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/Apparel/indian-suit-woman.jpg?tr=e-changebg-prompt-standing%20against%20a%20textured%20grainy%20white%20colored%20wall%20with%20a%20green%20planter%20on%20the%20left:w-1080,h-1080,cm-pad_resize,bg-genfill:l-image,i-ik_canvas,bg-FFFFFF75,ly-N20,lx-bw_mul_0.1,w-bw_mul_0.8,h-200,l-end:l-text,i-New%20Year%20Sale,lx-bw_mul_0.12,ly-N130,w-bw_mul_0.76,ia-center,co-000000,fs-60,tg-b,l-end:l-text,i-Rs.%202%2C000%20off%20on%20your%20first%20purchase,lx-bw_mul_0.12,ly-N80,w-bw_mul_0.76,ia-center,co-000000,fs-30,l-end:l-text,i-*%20T%26C%20apply,lx-bw_mul_0.12,ly-N30,w-bw_mul_0.76,ia-right,co-888888,fs-20,l-end",
      type: "Background change with GenFill for Square Ad",
      prompt : "Same as previous one, but with genfill to 1080x1080"
    },
    {
      url : "https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/Apparel/indian-suit-woman.jpg?tr=e-changebg-prompt-a%20light%20beige%20textured%20grainy%20wall%20with%20a%20light%20green%20wooden%20door%20on%20the%20right%20and%20tall%20pampas%20grass%20in%20a%20vase%20on%20the%20left:l-image,i-ik_canvas,bg-FFFFFF75,ly-N20,lx-bw_mul_0.1,w-bw_mul_0.8,h-200,l-end:l-text,i-New%20Year%20Sale,lx-bw_mul_0.12,ly-N130,w-bw_mul_0.76,ia-center,co-000000,fs-60,tg-b,l-end:l-text,i-Rs.%202%2C000%20off%20on%20your%20first%20purchase,lx-bw_mul_0.12,ly-N80,w-bw_mul_0.76,ia-center,co-000000,fs-30,l-end:l-text,i-*%20T%26C%20apply,lx-bw_mul_0.12,ly-N30,w-bw_mul_0.76,ia-right,co-888888,fs-20,l-end",
      type: "Generated background",
      prompt : "a light beige textured grainy wall with a light green wooden door on the right and tall pampas grass in a vase on the left"
    },
    {
      url : "https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/Apparel/indian-suit-woman.jpg?tr=e-changebg-prompt-a%20light%20beige%20textured%20grainy%20wall%20with%20a%20light%20green%20wooden%20door%20on%20the%20right%20and%20tall%20pampas%20grass%20in%20a%20vase%20on%20the%20left:w-1200,h-683,bg-genfill,cm-pad_resize:l-image,i-ik_canvas,bg-FFFFFF75,ly-220,lx-80,h-240,w-350,l-end:l-text,i-New%20Year%20Sale,lx-100,ly-280,w-310,ia-center,co-000000,fs-36,tg-b,l-end:l-text,i-Rs.%202%2C000%20off%20on%20your%20first%20purchase,lx-120,ly-340,w-270,ia-center,co-333333,fs-20,l-end:l-text,i-*%20T%26C%20apply,lx-100,ly-430,w-310,ia-right,co-888888,fs-16,l-end",
      type : "Generated Background + Genfill for wide ad",
      prompt : "Same as previous one, but with Gen Fiill to 1200 x 683"
    },
    {
      url : "https://ik.imagekit.io/ikmedia/webinar-content/practical-ai/Apparel/ai-generated-suit.png?tr=w-1080,h-1080:l-image,i-ik_canvas,bg-FFFFFF75,ly-N20,lx-bw_mul_0.1,w-bw_mul_0.8,h-200,l-end:l-text,i-New%20Year%20Sale,lx-bw_mul_0.12,ly-N130,w-bw_mul_0.76,ia-center,co-000000,fs-60,tg-b,l-end:l-text,i-Rs.%202%2C000%20off%20on%20your%20first%20purchase,lx-bw_mul_0.12,ly-N80,w-bw_mul_0.76,ia-center,co-000000,fs-30,l-end:l-text,i-*%20T%26C%20apply,lx-bw_mul_0.12,ly-N30,w-bw_mul_0.76,ia-right,co-888888,fs-20,l-end",
      type : "AI-Generated (Upcoming API)",
      prompt : "Indian woman wearing a modern coord set indo-western salwar suit and a watch. Suit is in light green color. dark brown back length hair. Smiling. Full length shot visible till the feet, standing on marble corridor inside a palace-like courtyard."
    }

  ],
}