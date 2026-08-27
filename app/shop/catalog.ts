export type Product = { id:number; name:string; tag:string; price:number; old:number; category:string; image:string };

export const departments = {
  ps5:{title:"PlayStation 5",eyebrow:"THE LATEST GENERATION",description:"PS5 consoles, DualSense controllers, headsets and essential accessories.",accent:"#2447f9"},
  ps4:{title:"PlayStation 4",eyebrow:"A GENERATION OF GREAT GAMES",description:"PS4 consoles, controllers and accessories—new and certified pre-owned.",accent:"#7047eb"},
  xbox:{title:"Xbox",eyebrow:"POWER YOUR DREAMS",description:"Xbox consoles, controllers, subscriptions and gaming accessories.",accent:"#168a46"},
  games:{title:"Games",eyebrow:"FIND YOUR NEXT ADVENTURE",description:"The latest and most-loved games for PlayStation and Xbox.",accent:"#ef7d22"},
  accessories:{title:"Gaming Accessories",eyebrow:"COMPLETE YOUR SETUP",description:"Controllers, headsets, charging stations and everything your setup needs.",accent:"#d93d7a"},
  "pre-owned":{title:"Pre-Owned",eyebrow:"TESTED. GUARANTEED. GREAT VALUE.",description:"Professionally inspected consoles and accessories with a written warranty.",accent:"#3448a8"},
} as const;

export type DepartmentSlug = keyof typeof departments;

export const catalog: Record<DepartmentSlug,Product[]> = {
  ps5:[
    {id:101,name:"PlayStation 5 Slim Disc Edition",tag:"New",price:480,old:510,category:"PS5 Consoles",image:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=85"},
    {id:102,name:"DualSense Wireless Controller",tag:"Best Seller",price:59,old:65,category:"PS5 Accessories",image:"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=900&q=85"},
    {id:103,name:"Pulse 3D Wireless Headset",tag:"Popular",price:79,old:89,category:"PS5 Accessories",image:"https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=85"},
    {id:104,name:"DualSense Charging Station",tag:"New",price:32,old:38,category:"PS5 Accessories",image:"https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?auto=format&fit=crop&w=900&q=85"},
  ],
  ps4:[
    {id:201,name:"PlayStation 4 Pro 1TB",tag:"Certified",price:165,old:185,category:"PS4 Consoles",image:"https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=85"},
    {id:202,name:"DualShock 4 Controller",tag:"Original",price:39,old:45,category:"PS4 Accessories",image:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=900&q=85"},
    {id:203,name:"PlayStation 4 Slim 1TB",tag:"Certified",price:145,old:160,category:"PS4 Consoles",image:"https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=900&q=85"},
  ],
  xbox:[
    {id:301,name:"Xbox Series X 1TB",tag:"New",price:445,old:475,category:"Xbox Consoles",image:"https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=900&q=85"},
    {id:302,name:"Xbox Series S 512GB",tag:"Best Value",price:245,old:265,category:"Xbox Consoles",image:"https://images.unsplash.com/photo-1621259182906-6e4c3579b9ea?auto=format&fit=crop&w=900&q=85"},
    {id:303,name:"Xbox Wireless Controller",tag:"Popular",price:52,old:59,category:"Xbox Accessories",image:"https://images.unsplash.com/photo-1629429407756-409f5b4c9f4b?auto=format&fit=crop&w=900&q=85"},
  ],
  games:[
    {id:401,name:"EA Sports FC 26",tag:"New Release",price:52,old:59,category:"PS5 Games",image:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85"},
    {id:402,name:"God of War Ragnarök",tag:"Best Seller",price:35,old:42,category:"PlayStation Games",image:"https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=85"},
    {id:403,name:"Spider-Man 2",tag:"Popular",price:45,old:50,category:"PS5 Games",image:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=85"},
  ],
  accessories:[
    {id:501,name:"DualSense Wireless Controller",tag:"Best Seller",price:59,old:65,category:"Controllers",image:"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=900&q=85"},
    {id:502,name:"RGB Gaming Headset",tag:"Sale",price:24,old:30,category:"Headsets",image:"https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=85"},
    {id:503,name:"Controller Charging Dock",tag:"New",price:29,old:35,category:"Charging",image:"https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?auto=format&fit=crop&w=900&q=85"},
    {id:504,name:"Pro Gaming Keyboard",tag:"Popular",price:49,old:58,category:"Gaming Gear",image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85"},
  ],
  "pre-owned":[
    {id:601,name:"PlayStation 5 Disc Edition",tag:"12-Month Warranty",price:375,old:420,category:"Certified Pre-Owned",image:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=85"},
    {id:602,name:"PlayStation 4 Pro 1TB",tag:"Certified",price:165,old:185,category:"Certified Pre-Owned",image:"https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=85"},
    {id:603,name:"Xbox Series S 512GB",tag:"6-Month Warranty",price:195,old:225,category:"Certified Pre-Owned",image:"https://images.unsplash.com/photo-1621259182906-6e4c3579b9ea?auto=format&fit=crop&w=900&q=85"},
  ],
};
