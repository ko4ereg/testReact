export default function getNextTarget(
  current: number,
  target: number,
  points: number
): number {
  const cw = (target - current + points) % points; 
  const ccw = (current - target + points) % points;
  if (cw <= ccw) return (current + 1) % points;
  else return (current - 1 + points) % points; 
}
