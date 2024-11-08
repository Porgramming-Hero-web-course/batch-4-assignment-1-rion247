{
    //

    type CircleShape = {
        shape: 'circle';
        radius: number;
    }

    type RectangleShape = {
        shape: 'rectangle';
        width: number;
        height: number;
    }

    type Shape = CircleShape | RectangleShape;

    const calculateShapeArea = (input: Shape): number => {

        if (input.shape === 'circle') {
            const areaOfCircle = Math.PI * (input.radius) * (input.radius);
            return areaOfCircle;
        } else {
            const areaOfRectangle = (input.width) * (input.height);
            return areaOfRectangle;
        }

    }

    // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });

    // console.log(circleArea);
    // console.log(rectangleArea);


    //
}