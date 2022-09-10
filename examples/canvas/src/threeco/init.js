const init = () => {
    const canvas = document.createElement('canvas');   
    const ctx = canvas.getContext('2d');

    const onWindowResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', onWindowResize);
    onWindowResize();

    const objects = [];

    const img = new Image();
    img.onload = () => objects.push({
        img,
        x: canvas.width / 2 - img.width / 2,
        y: canvas.height / 2 - img.height / 2,
        speed: 120,
        direction: Math.random() * 360
    });
    img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='200.8px' height='163px' viewBox='0 0 200.8 163' style='enable-background:new 0 0 200.8 163;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:url(%23SVGID_1_);%7D .st1%7Bfill:url(%23SVGID_2_);%7D .st2%7Bfill:url(%23SVGID_3_);%7D .st3%7Bfill:url(%23SVGID_4_);%7D .st4%7Bfill:url(%23SVGID_5_);%7D .st5%7Bfill:url(%23SVGID_6_);%7D .st6%7Bfill:url(%23SVGID_7_);%7D .st7%7Bfill:url(%23SVGID_8_);%7D .st8%7Bfill:url(%23SVGID_9_);%7D .st9%7Bfill:url(%23SVGID_10_);%7D %3C/style%3E%3Cdefs%3E%3C/defs%3E%3Cg%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='-0.331' y1='62.2123' x2='200.1774' y2='262.7206'%3E%3Cstop offset='0' style='stop-color:%23FF6000'/%3E%3Cstop offset='1' style='stop-color:%238800FF'/%3E%3C/linearGradient%3E%3Cpath class='st0' d='M53.7,109.2c-8.4-8.4-17-16.5-25.9-24.3C19,77,9.9,69.4,0,62.5c6.9,9.9,14.5,19,22.3,27.9 c7.8,8.9,16,17.5,24.3,25.9c8.4,8.4,17,16.5,25.9,24.3c8.9,7.8,18,15.4,27.9,22.3c-6.9-9.8-14.5-19-22.3-27.9 C70.2,126.2,62.1,117.6,53.7,109.2z'/%3E%3ClinearGradient id='SVGID_2_' gradientUnits='userSpaceOnUse' x1='139.9546' y1='102.0887' x2='154.1351' y2='116.2692'%3E%3Cstop offset='0' style='stop-color:%23FF6000'/%3E%3Cstop offset='1' style='stop-color:%238800FF'/%3E%3C/linearGradient%3E%3Cpath class='st1' d='M172.9,84.9c-8.9,7.8-17.5,16-25.9,24.3c-8.4,8.4-16.5,17-24.3,25.9c-7.8,8.9-15.4,18-22.3,27.9 c9.8-6.9,19-14.5,27.9-22.3c8.9-7.8,17.5-16,25.9-24.3c8.4-8.4,16.5-17,24.3-25.9c7.8-8.9,15.4-18,22.3-27.9 C191,69.4,181.9,77,172.9,84.9z'/%3E%3ClinearGradient id='SVGID_3_' gradientUnits='userSpaceOnUse' x1='-615.2731' y1='-623.7299' x2='811.4724' y2='803.0156'%3E%3Cstop offset='0' style='stop-color:%23FF6000'/%3E%3Cstop offset='1' style='stop-color:%238800FF'/%3E%3C/linearGradient%3E%3Cpath class='st2' d='M105.4,92c0-11.8-0.3-23.7-1.1-35.5c-0.8-11.8-1.8-23.7-3.9-35.5c-2.1,11.8-3.2,23.7-3.9,35.5 c-0.7,11.8-1.1,23.7-1.1,35.5c0,11.8,0.3,23.7,1.1,35.5c0.8,11.8,1.8,23.7,3.9,35.5c2.1-11.8,3.1-23.7,3.9-35.5 C105.1,115.6,105.4,103.8,105.4,92z'/%3E%3ClinearGradient id='SVGID_4_' gradientUnits='userSpaceOnUse' x1='42.8058' y1='-61.5165' x2='185.0571' y2='80.7347'%3E%3Cstop offset='0' style='stop-color:%23FF6000'/%3E%3Cstop offset='1' style='stop-color:%238800FF'/%3E%3C/linearGradient%3E%3Cpath class='st3' d='M105.8,51.8c0.3,1.4,0.7,2.8,1.1,4.3c0.5,1.4,1,2.8,1.6,4.1c2.4,5.4,5.8,10.2,10.1,14.2 c4.3,3.9,9.3,6.9,14.7,8.8c5.4,1.9,11.1,2.6,16.6,2.3c11.1-0.7,21.6-5.8,28.8-13.7c7.2-7.8,11.3-18.3,11.2-28.8 c0,5.2-1.1,10.5-3.2,15.2c-2.1,4.8-5.2,9.1-9,12.6c-3.8,3.5-8.3,6.1-13.1,7.8c-4.8,1.7-9.8,2.3-14.7,1.9c-9.9-0.7-19-5.3-25.2-12.3 c-6.3-6.9-9.8-16.1-9.8-25.2c0-9.2,3.5-18.3,9.8-25.2c3.1-3.5,7-6.4,11.3-8.5s9-3.4,14-3.8c4.9-0.3,10,0.3,14.7,1.9 c4.8,1.7,9.3,4.3,13.1,7.8c3.8,3.5,6.9,7.8,9,12.6c2.1,4.8,3.2,10,3.2,15.2c0-10.5-4-20.9-11.2-28.8c-7.2-7.9-17.6-13.1-28.8-13.7 c-5.6-0.3-11.3,0.4-16.7,2.3c-5.4,1.9-10.4,4.9-14.7,8.9c-4.3,3.9-7.7,8.8-10.1,14.2c-2.4,5.4-3.6,11.3-3.6,17.2l0.2,4.4 C105.3,48.9,105.6,50.4,105.8,51.8z'/%3E%3ClinearGradient id='SVGID_5_' gradientUnits='userSpaceOnUse' x1='12.8674' y1='7.9901' x2='177.6662' y2='172.789'%3E%3Cstop offset='0' style='stop-color:%23FF6000'/%3E%3Cstop offset='1' style='stop-color:%238800FF'/%3E%3C/linearGradient%3E%3Cpath class='st4' d='M13.7,67.8c2.6,3.6,5.5,6.8,9,9.5c3.5,2.6,7.3,4.7,11.3,6.3c4.1,1.5,8.3,2.3,12.5,2.5l3.2,0 c1.1,0,2.1-0.1,3.1-0.2c2.1-0.3,4.2-0.6,6.2-1.2c8-2.2,15.2-6.9,20-13.2c-3.2,2.3-6.6,4.3-10.1,5.7c-3.5,1.4-7.2,2.3-10.9,2.7 c-1.8,0.2-3.7,0.2-5.5,0.2c-1.8,0-3.6-0.4-5.4-0.5c-3.5-0.7-6.9-1.8-10.1-3.2c-3.2-1.6-6.1-3.6-8.7-5.8c-2.6-2.4-4.8-5-6.7-7.9 c-1.8-2.9-3.2-6.1-4.2-9.4c-1-3.3-1.4-6.7-1.4-10.1c0.1-3.4,0.5-6.8,1.4-10.1c1-3.3,2.4-6.4,4.2-9.4c1.9-2.9,4.1-5.5,6.7-7.9 c2.6-2.3,5.6-4.2,8.7-5.8c3.2-1.5,6.6-2.6,10.2-3.2C48.9,6.3,50.7,6,52.5,6c1.8,0,3.7,0,5.5,0.2c3.7,0.4,7.3,1.3,10.9,2.7 c3.5,1.4,6.9,3.3,10.1,5.7c-4.8-6.3-12-11-20-13.2c-2-0.6-4.1-0.9-6.2-1.2c-1-0.1-2.1-0.2-3.1-0.2l-3.2,0C42.2,0.3,38,1.1,33.9,2.5 c-4,1.5-7.8,3.6-11.3,6.3c-3.4,2.7-6.4,5.9-9,9.5c-2.5,3.6-4.4,7.6-5.8,11.8c-1.3,4.2-1.9,8.6-2,13c0.1,4.4,0.7,8.8,2,13 C9.3,60.2,11.2,64.2,13.7,67.8z'/%3E%3C/g%3E%3C/svg%3E`;
    
    document.body.appendChild(canvas);

    const lerp = (value1, value2, t) => (1 - t) * value1 + t * value2;
    const spikeLerp = (value1, value2, t) => lerp(value1, value2, t <= .5 ? t : 1 - t);
    const scaleMin = 1;
    const scaleMax = 2;

    return {
        onUpdate: deltaTime => {
            for(const object of objects)
            {
                // movement
                const direction = object.direction;
                object.x += object.speed * deltaTime * Math.cos(direction * Math.PI / 180);
                object.y += object.speed * deltaTime * Math.sin(direction * Math.PI / 180);
                
                // collision detection and handling
                const boundary = {
                    x: {
                        min: 0,
                        max: canvas.width - object.img.width
                    },
                    y: {
                        min: 0,
                        max: canvas.height - object.img.height
                    }
                };

                object.x = Math.max(boundary.x.min, Math.min(boundary.x.max, object.x));
                object.y = Math.max(boundary.y.min, Math.min(boundary.y.max, object.y));

                if(object.x <= boundary.x.min || object.x >= boundary.x.max)
                    object.direction = 180 - object.direction;
                if(object.y <= boundary.y.min || object.y >= boundary.y.max)
                    object.direction = 360 - object.direction;
            }
        },
        onRender: () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for(const {img, x, y} of objects)
            {
                // without scaling
                // ctx.drawImage(img, x, y); 

                // animate scaling
                const tX = x / (canvas.width - img.width);
                const tY = y / (canvas.height - img.height);
                ctx.drawImage(img, x, y, img.width * spikeLerp(scaleMin, scaleMax, tX), img.height * spikeLerp(scaleMin, scaleMax, tY)); 
            }
        }, 
        onUnmount: () => {
            window.removeEventListener('resize', onWindowResize);
            document.body.removeChild(canvas);
        }
    };
};

export default init;
