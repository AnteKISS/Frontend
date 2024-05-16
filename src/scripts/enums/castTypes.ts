enum CastType
{
    SkillShot, //Creates projectile and throw it in a direction
    GroundTarget, //Takes pointerX and pointerY if in range
    PointNClick, //Single target on an entity in range that the pointer is on
    SelfAura //Applies a buff/debuff on self
}