import React, { useEffect, useRef, useState } from "react";


import Matter from "matter-js";


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}


export const MatterStepOne = () => {


  
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  const { height, width } = useWindowDimensions();

  // const fullWidth = 500;
  // const fullHeight = 500;

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Common = Matter.Common;
    let Bodies = Matter.Bodies;
    let MouseConstraint = Matter.MouseConstraint;
    let Mouse = Matter.Mouse;
    let Composite = Matter.Composite;
    let Composites = Matter.Composites;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: width,
        height: height,
        background: "rgba(0, 0, 0, 0.1)",
        wireframes: false,
        showAngleIndicator: true
      }
    });

    const floor = Bodies.rectangle(150, 500 , 500, 10, {
      isStatic: true,
      render: {
        fillStyle: "blue"
      }
    });

    const bottomFloor = Bodies.rectangle(500 , 800 , 500, 5, {
      isStatic: true,
      render: {
        fillStyle: "red"
      }
    });

    const ball = Bodies.circle(150, 0, 10, {
      restitution: 0.9,
      render: {
        fillStyle: "yellow"
      }
    });

    let stack = Composites.stack(100, 0, 10, 8, 10, 10, function(x, y) {
      return Bodies.circle(x, y, Common.random(15, 30), { restitution: 0.6, friction: 0.1 });
  });

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });


    render.mouse = mouse;

    // fit the render viewport to the scene
    // Render.lookAt(render, {
    //     min: { x: 0, y: 0 },
    //     max: { x: width, y: height }
    // });
    
    let allBodies = Composite.allBodies(engine.world);

    for (let i = 0; i < allBodies.length; i += 1) {
      allBodies[i].plugin.wrap = {
          min: { x: render.bounds.min.x - 100, y: render.bounds.min.y },
          max: { x: render.bounds.max.x + 100, y: render.bounds.max.y }
      };
  }

    World.add(engine.world, [bottomFloor, floor, stack, mouse, mouseConstraint]);
    Matter.Runner.run(engine);
    Engine.run(engine);
    Render.run(render);
  }, []);

  return (
    <div
      className="intro-game"
      ref={boxRef}
      style={{
        width: width,
        height: height
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default MatterStepOne