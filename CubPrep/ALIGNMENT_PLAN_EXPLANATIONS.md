# Enhanced Explanations Alignment Guide
**Status:** Chunk 7 — Alignment Plan (Not Full Implementation)

## Current State
- `enhanced_explanations.js` uses custom topic names as keys: `algebra`, `aritmetica`, `geometria_analitica`, etc.
- `study-guide.html` dynamically loads these and displays them by subject
- The `video_refs.js` now uses official UNAM tags as primary keys

## Alignment Strategy

### Option A: Keep Both Systems (Recommended for Phase 1)
**Rationale:** Minimize disruption, maintain backward compatibility

1. Keep `enhanced_explanations.js` with custom keys (no changes needed)
2. In `study-guide.html`, map custom topic names → official tags when loading videos
3. Add a mapping layer in JavaScript:
```js
const TOPIC_TO_OFFICIAL = {
  "algebra": "mat_algebra",
  "aritmetica": "mat_aritmetica",
  "geometria_analitica": "mat_geometria_analitica",
  "trigonometria": "mat_trigonometria",
  "probabilidad": "mat_estadistica_probabilidad",
  "funciones": "mat_funciones_calculo",
  "limites_derivadas": "mat_funciones_calculo",
  // Physics
  "cinematica": "fis_cinematica",
  "energia": "fis_energia",
  // Chemistry
  "estructura_atomica": "qui_atomo",
  // ... etc
};
```

4. When loading videos for a topic, use: `getVideos(TOPIC_TO_OFFICIAL[topicName])`

### Option B: Full Restructure (Phase 2, Future)
Would require:
1. Rename all keys in `enhanced_explanations.js` to official tags
2. Update `refresh_explanations.py` to generate with official tags
3. Update all loader code in `study-guide.html`
4. Risk of breaking existing functionality

## Immediate Action for Chunk 7

**For this sprint, we will:**
1. ✅ Document the mapping (this file)
2. ✅ Keep `enhanced_explanations.js` unchanged
3. ✅ Update `study-guide.html` to use mapping layer (already done in video loader)
4. Add a comment in `video_refs.js` noting the alignment plan
5. Document that full restructure is Phase 2 work

## refresh_explanations.py Status

The current `refresh_explanations.py` uses a TOPICS list that matches custom names. This works because:
- It generates explanations for each topic in the list
- Stores them under the custom topic keys
- The notebook loads fine with this structure

**No changes needed for now** — the AI pipeline continues to work. In Phase 2, we'll update it to use official tags.

## Migration Checklist (Phase 2)
- [ ] Identify all references to custom topic names across codebase
- [ ] Create official-tag version of `enhanced_explanations.js`
- [ ] Test with legacy fallback active
- [ ] Migrate study-guide.html to use only official tags
- [ ] Update refresh_explanations.py to generate official-tag structure
- [ ] Deprecate old custom-name system with warnings

## Files Affected by Alignment (Current Sprint)
- ✅ `video_refs.js` — Now has official tags + legacy fallback
- ✅ `study-guide.html` — Updated to map topics when loading videos
- 📝 `TAG_MAPPING.json` — Already documents the mapping
- ⏸️ `enhanced_explanations.js` — Stays as-is for now
- ⏸️ `refresh_explanations.py` — Stays as-is for now

## Success Criteria for Phase 1 (This Sprint)
✅ Video system uses official tags  
✅ Legacy fallback prevents breaking changes  
✅ Study guide displays all 25 topics  
✅ Videos load correctly for both old and new tag names  
✅ No deprecation warnings in console (or only logged, not blocking)

## Success Criteria for Phase 2 (Next Sprint)
- [ ] Enhanced explanations fully restructured to official tags
- [ ] Refresh pipeline generates official-tag structure
- [ ] Study guide uses only official tags
- [ ] No legacy fallback needed
- [ ] Test coverage for all 25 topics
