import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

export const MatterStepOne = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  const fullWidth = window.innerWidth;
  const fullHeight = window.innerHeight;

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: fullWidth,
        height: fullHeight,
        background: "rgba(0, 0, 0, 0.1)",
        wireframes: false
      }
    });

    const floor = Bodies.rectangle(150, 500 , 500, 10, {
      isStatic: true,
      render: {
        fillStyle: "blue"
      }
    });

    const ball = Bodies.circle(150, 0, 10, {
      restitution: 0.9,
      render: {
        fillStyle: "yellow"
      }
    });

    const stack = Matter.Composites.stack(100,100,4,4,0,0, function(x,y){
        return Matter.Bodies.rectangle(x,y,80,80)
    })

    World.add(engine.world, [floor, ball, stack]);

    Engine.run(engine);
    Render.run(render);
  }, []);

  return (
    <div
      className="intro-game"
      ref={boxRef}
      style={{
        width: fullWidth,
        height: fullHeight
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default MatterStepOne