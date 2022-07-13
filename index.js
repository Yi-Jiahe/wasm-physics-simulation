import { World2D, Body2D } from "rust-physics-engine";

const world = World2D.new();

console.log(world);

world.add(Body2D.new(1.0, [0.0, 0.0]));

console.log(world);

const renderLoop = () => {
    world.update();
    console.log(world);

    requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
