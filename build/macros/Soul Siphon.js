/* {"name":"Soul Siphon","img":"systems/pf2e/icons/spells/soul-siphon.webp","_id":"KXoNTv1YkjM3D9NI"} */
const [tokenD, tokenScale] = await pf2eAnimations.macroHelpers(args)
let target = Array.from(game.user.targets)[0]
new Sequence({ moduleName: "PF2e Animations", softFail: true })
  .effect()
  .atLocation(token)
  .stretchTo(target)
  .origin("soul siphon")
  .name("Soul Siphon")
  .file("jb2a.energy_strands.range.standard.dark_red")
  .waitUntilFinished(-1500)
  .effect()
  .atLocation(target)
  .stretchTo(token)
  .origin("soul siphon")
  .name("Soul Siphon")
  .file("jb2a.energy_strands.range.standard.dark_red")
  .waitUntilFinished(-1500)
  .effect()
  .randomRotation()
  .scaleToObject(2)
  .origin("soul siphon")
  .name("Soul Siphon")
  .atLocation(token)
  .file("jb2a.energy_strands.in.red.01.2")
  .play()
