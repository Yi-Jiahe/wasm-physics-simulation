import { World2D, Body2D, f32Vector2 } from "rust-physics-engine";

const world = new World2D();

console.log(world);

world.add(new Body2D(1.0, new f32Vector2(0.0, 0.0)));

console.log(world);

const renderLoop = () => {
    world.update();
    console.log(world);

    requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
