export function TopbarScene() {
  return (
    <div className="topbarScene" aria-hidden="true">
      <span className="sceneSkyTint" />
      <span className="sceneSun" />
      <span className="sceneRidge ridgeFar" />
      <span className="sceneRidge ridgeNear" />
      <span className="scenePine pine1" />
      <span className="scenePine pine2" />
      <span className="scenePine pine3" />
      <span className="sceneCloud cloudA" />
      <span className="sceneCloud cloudB" />
      
      {/* Dust particles - more dense */}
      <span className="sceneDust dust1" />
      <span className="sceneDust dust2" />
      <span className="sceneDust dust3" />
      <span className="sceneDust dust4" />
      <span className="sceneDust dust5" />
      
      {/* Leaves - more varied */}
      <span className="sceneLeaf leaf1" />
      <span className="sceneLeaf leaf2" />
      <span className="sceneLeaf leaf3" />
      <span className="sceneLeaf leaf4" />
      <span className="sceneLeaf leaf5" />
      <span className="sceneLeaf leaf6" />
      
      {/* Wind effect lines */}
      <span className="sceneWind wind1" />
      <span className="sceneWind wind2" />
      <span className="sceneWind wind3" />
    </div>
  );
}
