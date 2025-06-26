import Wall from "./Wall";
import Floor from "./Floor";

function InvisibleWalls() {
  return (
    <group>
      <Floor />
      {/* Ground Floor Walls */}
      <Wall position={[-2, 0, -3.9]} args={[0.75, 2, 6.9]} visible={false} />
      <Wall position={[-1.3, 0, 0.05]} args={[0.5, 2, 1.13]} visible={false} />
      <Wall position={[-2.7, 0, -10.5]} args={[1, 2, 5.9]} visible={false} />
      <Wall position={[2.5, 2, -14]} args={[8.9, 6, 1]} visible={false} />
      <Wall position={[7.4, 2, -6.5]} args={[1, 6, 13.75]} visible={false} />
      <Wall position={[4, 0, 0.5]} args={[5.7, 2, 0.05]} visible={false} />
      <Wall position={[1, 0, -0.05]} args={[0.2, 2, 0.9]} visible={false} />

      {/* Stairs */}
      <Wall
        position={[6.2, -0.35, -8.1]}
        rotation={[-Math.PI * 0.335, 0, 0]}
        args={[1.2, 7, 0.1]}
        visible={false}
      />
      <Wall
        position={[5.68, 0.77, -9.31]}
        rotation={[0.52, 0, 0]}
        args={[0.04, 1, 4.378]}
        visible={false}
      />
      {/* Loft Floor */}
      <Wall
        position={[-1.0, 1.3, -11.5]}
        args={[13, 0.17, 8]}
        visible={false}
      />
      <Wall
        position={[6.5, 1.3, -12.3]}
        args={[2, 0.17, 2.2]}
        visible={false}
      />
      {/* Loft Walls */}
      <Wall
        position={[-1.5, 2.765, -12.724]}
        args={[0.14, 2.58, 1.29]}
        visible={false}
      />
      <Wall
        position={[-3.848, 2.64, -12.13]}
        args={[4.91, 2.45, 0.1]}
        visible={false}
      />
      <Wall
        position={[-2.98, 2.63, -7.37]}
        args={[3.14, 2.46, 0.1]}
        visible={false}
      />
      <Wall
        position={[-4.75, 2.62, -9.18]}
        args={[0.3, 2.49, 3.28]}
        visible={false}
      />
      <Wall
        position={[-6.26, 2.63, -11.44]}
        args={[0.1, 2.48, 1.18]}
        visible={false}
      />
      <Wall position={[2, 2, -7.43]} args={[6.69, 1.17, 0.1]} visible={false} />
      <Wall
        position={[5.51, 2.01, -9.43]}
        args={[0.1, 1.2, 3.77]}
        visible={false}
      />
      <Wall
        position={[-7.68, 2.67, -9.13]}
        args={[0.1, 2.51, 3.12]}
        visible={false}
      />
      <Wall
        position={[-7, 2.63, -10.7]}
        args={[1.74, 2.43, 0.1]}
        visible={false}
      />
      <Wall
        position={[-6.25, 2.62, -7.53]}
        args={[2.63, 2.49, 0.1]}
        visible={false}
      />
    </group>
  );
}
export default InvisibleWalls;
