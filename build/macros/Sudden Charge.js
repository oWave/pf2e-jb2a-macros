/* {"name":"Sudden Charge","img":"icons/skills/movement/ball-spinning-blue.webp","_id":"OrBFtL6vBRyDHgfV"} */
const [tokenD, tokenScale] = await pf2eAnimations.macroHelpers(args)

pf2eAnimations.requireModule("warpgate")

ui.notifications.info(
  game.i18n.localize("pf2e-jb2a-macros.macro.suddenCharge.notif")
)
await Sequencer.Preloader.preloadForClients("jb2a.gust_of_wind.veryfast")

tokenD.actor.sheet.minimize()

for (let i = 0; i < 2; i++) {
  const location = await pf2eAnimations.crosshairs(
    { tokenD },
    {
      crosshairConfig: {
        label: `${game.i18n.localize(
          "pf2e-jb2a-macros.macro.suddenCharge.suddenCharge"
        )} (${i + 1}/2)`,
      },
      noCollisionType: "move",
      openSheet: false,
    }
  )

  console.log(location)

  if (location === false || location.cancelled) {
    tokenD.actor.sheet.maximize()
    return
  }

  await new Sequence({ moduleName: "PF2e Animations", softFail: true })
    .animation()
    .on(tokenD)
    .moveTowards(location)
    .moveSpeed(400)
    .snapToGrid()
    .offset({
      x: -(canvas.scene.grid.size / 2),
      y: -(canvas.scene.grid.size / 2),
    })
    .effect()
    .file("jb2a.gust_of_wind.veryfast")
    .atLocation(tokenD, { cacheLocation: true })
    .stretchTo(location, { onlyX: true })
    .randomizeMirrorY()
    .belowTokens()
    .fadeOut(1000)
    .scale(0.5 * tokenD.document.height)
    .waitUntilFinished()
    .play()
}

tokenD.actor.sheet.maximize()
