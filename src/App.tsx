import React, { Component } from "react";
import { Stage, Layer, Rect, Text, Line, Circle } from "react-konva";

const { sin, cos, PI } = Math;

const curcles = [
  { angle: 0, value: 0, binary: "0011" },
  { angle: 45, value: 1, binary: "1110" },
  { angle: 90, value: 2, binary: "1101" },
  { angle: 135, value: 3, binary: "0100" },
  { angle: 180, value: 4, binary: "0111" },
  { angle: 225, value: 0, binary: "0010" },
  { angle: 270, value: 0, binary: "0001" },
  { angle: 315, value: 0, binary: "1000" },
];

const coordinatesCircle = curcles.map(({ angle }) => {
  return {
    x: 100 * sin((angle * PI) / 180),
    y: 100 * -cos((angle * PI) / 180),
  };
});

function App() {
  return (
    <div className="App">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Line
            x={550}
            y={300}
            points={[0, 0, 300, 0]}
            strokeWidth={0.8}
            closed
            stroke="black"
          />
          <Line
            x={700}
            y={150}
            points={[0, 0, 0, 300]}
            strokeWidth={0.8}
            closed
            stroke="black"
          />
          <Circle
            x={700}
            y={300}
            radius={100}
            strokeWidth={0.5}
            stroke="black"
          />
          {/* circles */}
          <>
            {coordinatesCircle.map(({ x, y }, index) => {
              const { binary } = curcles[index];
              return (
                <>
                  <Circle
                    x={x + 700}
                    y={y + 300}
                    radius={15}
                    fillLinearGradientStartPoint={{ x: -50, y: -50 }}
                    fillLinearGradientEndPoint={{ x: 50, y: 50 }}
                    fillLinearGradientColorStops={[0, "red", 1, "yellow"]}
                    strokeWidth={0}
                    stroke="black"
                  />
                  <Text
                    align="center"
                    x={x + 700}
                    y={y + 300}
                    fontSize={20}
                    text={binary}
                  />
                </>
              );
            })}
          </>
          {/* inputed coordinate line */}
          <Circle
            x={700 - 30}
            y={300 - 40}
            radius={8}
            fillLinearGradientStartPoint={{ x: -50, y: -50 }}
            fillLinearGradientEndPoint={{ x: 50, y: 50 }}
            fillLinearGradientColorStops={[0, "purple", 1, "blue"]}
            strokeWidth={0}
            stroke="black"
          />
          <Line
            x={700}
            y={150}
            points={[0, 150, -30, 150 - 40]}
            strokeWidth={1}
            closed
            stroke="blue"
          />
        </Layer>
      </Stage>
      <div style={{ position: "fixed", top: 35, left: "30%" }}>
        <p>input coordinates</p>
        x
        <br />
        <input type="text" />
        <br />
        y
        <br />
        <input type="text" />
      </div>
      <div style={{ position: "fixed", top: 35, left: "42%" }}>
        <p>Results: </p>
        <p>By Oliinyk Vladislav</p>
      </div>
    </div>
  );
}

export default App;
