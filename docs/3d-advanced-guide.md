# Advanced 3D with GPT-6 Astra - Blender, Unreal, Three.js

This guide turns the viral Astra 3D demos into a repeatable pipeline: reference ingest, blockout, structure, detail, materials, light, camera, optimize, export, QA. Pair it with [`../prompts/08-3d-blender-unreal.md`](../prompts/08-3d-blender-unreal.md) and the [`../docs/carousel.html`](carousel.html) browser.

## 1. Operating picture

Astra is strongest when it acts as a scene operator across tools, not as a one-shot mesh magician. The winning pattern from early builds: Astra plans the venue, places at blockout scale, adds lived-in detail where the camera looks, lights for two or more framings, exports with explicit units and axes, then runs its own QA pass and fixes high-impact defects first.

```text
References plus constraints plus budgets plus stop gates, then blockout, detail,
light, export, QA. One Done table per stage. No stage starts until the prior
stage has a reviewable result.
```

## 2. Reference ingest checklist

```text
Collect: photos, drawings, listing images, dimensions, style refs, target platform,
GPU ceiling, delivery format, deadline.
Label each input: measured, inferred, or invented. Inferred needs a tolerance.
Invented needs approval when it changes silhouette, structure, or cost.
State: units in centimeters or meters, forward axis, up axis, scale figure height.
Attach: two camera framings that define done, plus one top-down layout view.
```

## 3. Blockout standard

```text
Collections: 00-Layout, 01-Architecture, 02-Props, 03-Light, 04-Camera.
Objects: kebab-case names, real-world scale, pivots at base or hinge points.
Composition: hero massing first, secondary masses second, circulation paths third.
Ask Astra for: a top view plus two eye-level stills, with a scale figure in each.
Stop gate: approve proportions before any detail work starts.
```

## 4. Structure and topology plan

```text
Modular pieces for repeated elements: windows, doors, columns, shelving, street tiles.
Topology: quads on hero surfaces, poles away from deform zones, edge flow around
openings, manifold checks before subdivision.
Retopology brief: source sculpt polycount, target quad count, preserved sharp edges,
UV seam plan, bake list for normal, ambient occlusion, and curvature.
```

## 5. Detail pass, where demos win or lose

Early Astra comparisons show basic structure is easy. Inhabited detail decides quality: sofa folds, tableware, poolside objects, vegetation depth, desk clutter with intent.

```text
Zone the scene by camera distance: hero, midground, background.
Hero: modeled folds, seams, labels, wear zones, small props with story.
Midground: instanced sets with rotation and scale variance, three variants minimum.
Background: cards, shells, or low-poly masses with atmospheric falloff.
Require per-zone prop counts and a polish list ordered by visual impact.
Forbid: copyrighted characters, brand logos, unlicensed scans.
```

## 6. Materials, UV, and texel discipline

```text
PBR slots: base color, roughness, metallic, normal, plus ambient occlusion where baked.
Texel target: state pixels per meter for hero, mid, and background.
Naming: MAT-Category-Material-Variant, for example MAT-Wood-Oak-Light.
Procedural against painted: procedural for grain variation and wear masks, painted for
hero labels and art-directed graphics.
Record: texture sizes, color space per map, and memory total against the GPU ceiling.
```

## 7. Light and camera

```text
Three-point base plus environment: key with shadows, soft fill, rim for separation,
HDRI or sky for ambient, exposure locked before color tweaks.
White balance: set once, then grade with intent, warm interiors against cool exteriors.
Per shot: lens in mm, framing, action beat, in-frame requirement, fallback framing.
Coverage table columns: shot, story beat covered, status complete, partial, blocked.
Museum and promo lesson: plan cast movement first, then verify no performer leaves
frame during the beat.
```

## 8. Animation and video handoff

```text
For Remotion and Final Cut flows: scene renders first, edit second, grade third.
Deliver: per-scene duration, aspect, frame rate, voiceover timecodes, caption files.
Beat sheet: hook in the first three seconds, one idea per shot, lower-thirds style
locked, music cue sheet with licensed status per track.
Review loop: prioritized defect list, fix high-impact items, re-render affected shots
only, then full watch-through with timestamps.
```

## 9. Export matrix, Blender to Unreal to Three.js

| Path | Units and axes | Must state |
|---|---|---|
| Blender to Unreal | Meters, forward minus Y option, up Z, scale factor 1.0 or 100 detail | Collision complexity, lightmap UV channel, nanite posture, lumen posture |
| Blender to Three.js | Meters to units mapping, forward axis, scale figure check | Draco compression level, texture cap, fallback tier, load budget in MB |
| Unreal to Web | Derived from the above plus capture framings | Pixel budget, fallback quality, control scheme |

```text
Always include: unit system, scale factor, forward axis, up axis, origin placement,
pivot audit, normal orientation check, and a three-angle still set after import.
```

## 10. Performance budgets, state these in the prompt

```text
Hero prop: target quad range, max texture size, one trim sheet where possible.
Full room: total triangle ceiling plus texture memory ceiling for the stated GPU.
Street block: per-building budget plus instancing plan for windows and props.
Web scene: total download MB, first-frame time target, fallback tier triggers.
Laptop tier: reduced shadow resolution, capped pixel ratio, compressed textures.
Close every 3D task with: what was decimated, what stayed sharp, and why.
```

## 11. QA gate before calling a scene done

```text
Geometry: manifold check, normal orientation, scale-figure proportion check.
Hygiene: no Cube.001 names, no orphan materials, no missing textures.
Camera: fly-through without clipping, three stills from hero angles.
Light: no blown highlights on hero props, readable shadows, consistent white balance.
Export: re-import test, scale check, collision check, actor-in-frame check.
Report: tested, failed, and unverified lists plus assumptions plus re-test results.
```

## 12. Copy-paste 3D starter shells

Use these shells, then pull a full 120-prompt set from the category file.

```text
Goal: block out a seaside house for a portfolio piece.
Inputs: two reference photos plus room dimensions, authoritative dimensions win over
photo inference.
Constraints: editable geometry, named collections, meters, laptop-GPU budget with a
fallback tier, no brand assets.
Output: blockout scene spec plus top view plus two eye-level still descriptions.
Done: proportions approved, scale figure checks pass, defect list for the detail pass.
Autonomy: proceed through blockout, stop before purchasing assets or publishing.
```

```text
Goal: reconstruct a room from listing photos plus a promo beat sheet.
Inputs: listing photos marked measured, inferred, or invented, plus target duration
and aspect.
Constraints: infer missing geometry with stated tolerances, flag invented details,
keep performers and hero props in frame per shot.
Output: scene spec plus shot list plus voiceover timecodes.
Done: coverage table complete, QA stills from three angles, re-test after fixes.
```

```text
Goal: light a museum gallery for two framings and export to Unreal.
Inputs: venue layout plus cast count plus movement beats.
Constraints: state units, axes, collision complexity, lightmap channel, nanite and
lumen posture.
Output: lighting diagram description plus export checklist plus coverage table.
Done: in-frame verification per shot, re-import scale check, performance note.
```

## 13. Where to go next

- Category pack: [`../prompts/08-3d-blender-unreal.md`](../prompts/08-3d-blender-unreal.md)
- Game builds that reuse the same pipeline: [`../prompts/09-game-dev.md`](../prompts/09-game-dev.md)
- Video handoff: [`../prompts/11-video-creation.md`](../prompts/11-video-creation.md)
- Interactive search across all 3D prompts: [`carousel.html`](carousel.html)
