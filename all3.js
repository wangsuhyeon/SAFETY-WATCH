/*!
 * Beach Watch ??AI 湲곕컲 ?대? ?ㅼ떆媛??덉쟾 紐⑤땲?곕쭅
 * Copyright (c) 2026 Beach Watch Team. MIT License.
 *
 * ?쒕뱶?뚰떚 怨좎?:
 *   TensorFlow.js .......... Apache-2.0
 *   @tensorflow-models/coco-ssd ... Apache-2.0 (COCO dataset: CC BY 4.0)
 *
 * ?ㅺ퀎 ?먯튃
 *   1) ?몃챸 ?덉쟾 ?쒖뒪?쒖? 議곗슜??硫덉텛硫????쒕떎 ??紐⑤뱺 ?ㅽ뙣瑜?怨꾩륫?섍퀬 ?붾㈃???쒕윭?몃떎.
 *   2) ?ㅽ깘? 誘명깘留뚰겮 ?꾪뿕?섎떎(寃쎈낫 ?쇰줈) ???꾧퀎媛믪씠 ?꾨땲???쒓컙 異뺤쑝濡??닿껐?쒕떎.
 *   3) 二쇱옣? ?ы쁽 媛?ν빐???쒕떎 ???먭? 吏꾨떒쨌遺???뚯뒪?몃? ?쒗뭹 ?덉뿉 ?ｋ뒗??
 *   4) ?곸긽? 湲곌린瑜??좊굹吏 ?딅뒗??????怨쇱젙 ?⑤뵒諛붿씠??異붾줎.
 */
'use strict';

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   1. ?ㅺ뎅???ъ쟾
   ko/en ??吏묓빀? ?먭? 吏꾨떒(SelfTest)?먯꽌 ?숈씪?깆쓣 寃利앺븳??
   媛믪뿉 HTML???덉슜?섎릺, ?ъ쟾? ?꾩쟻?쇰줈 ??먭? ?듭젣?섎뒗 ?곸닔?대?濡?   ?몃? ?낅젰???욎씪 ???녿떎.
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const I18N = {
  ko: {
    
    skipToMonitor:'蹂몃Ц(愿???붾㈃)?쇰줈 嫄대꼫?곌린', settings:'?ㅼ젙', preferences:'?섍꼍 ?ㅼ젙', settingsTitle:'?섍꼍 ?ㅼ젙',
    language:'?몄뼱', languageHelp:'?좏깮???몄뼱???ㅼ쓬 ?묒냽 ?쒖뿉???좎??⑸땲??', cancel:'痍⑥냼', saveSettings:'?ㅼ젙 ???,
    badgeEngine:'?붿쭊', badgeEnvironment:'?섍꼍', badgeHealth:'?곹깭', badgeOnDevice:'?⑤뵒諛붿씠??泥섎━ 쨌 ?곸긽 誘몄쟾??, badgeLicense:'MIT ?ㅽ뵂?뚯뒪',
    envUnknown:'遺꾩꽍 ?湲?, envClear:'二쇨컙 쨌 留묒쓬', envHaze:'?먮┝ 쨌 ?덇컻', envNight:'?쇨컙 쨌 ?議곕룄', envGlare:'??킅 쨌 諛섏궗', envCrowd:'?쇱옟 쨌 ?깆닔湲?,
    healthIdle:'?湲?, healthGood:'?뺤긽',  healthError:'?ㅻ쪟', healthRecovering:'?ъ뿰寃?以?,

    
    monitoringEyebrow:'?ㅼ떆媛??덉쟾 紐⑤땲?곕쭅', mainTitle:'?대? ?덉쟾 愿??移대찓??, dangerBoundary:'?꾪뿕 寃쎄퀎??,
    initialHint:'?붾㈃???대┃?섏뿬 寃쎄퀎?좎쓽 ???ъ씤?몃? ?뺥븯?몄슂.', simulationFlag:'?쒕??덉씠??紐⑤뱶 쨌 ?ㅼ젣 ?곸긽 ?꾨떂',
    boundaryControl:'寃쎄퀎??議곗젅', mobileLineHelp:'?곸긽??吏곸젒 ?쒕옒洹명븯吏 留먭퀬 ?꾨옒 ?щ씪?대뜑瑜??댁슜?섏꽭??',
    height:'?믪씠', tilt:'湲곗슱湲?, saveBoundary:'寃쎄퀎?????, saved:'????꾨즺', 
    cameraSelect:'移대찓???좏깮',  editBoundary:'寃쎄퀎??議곗젅', 
    resetBoundary:'湲곕낯 寃쎄퀎??,  runSimulation:'?쒕??덉씠???ㅽ뻾', 
    cameraPreview:'移대찓??誘몃━蹂닿린',  
    cameraNotConnected:'移대찓???곌껐 ????, 

    
    safetyStatus:'SAFETY STATUS', ready:'READY', waiting:'媛먯? ?湲?以?,
    readyText:'移대찓?쇰? ?곌껐?섎㈃ 寃쎄퀎??媛먯떆媛 ?쒖옉?⑸땲?? 移대찓?쇨? ?녿떎硫??쒕??덉씠?섏쑝濡??숈옉???뺤씤?????덉뒿?덈떎.',
    boundaryPoints:'寃쎄퀎???ъ씤??, peopleAbove:'?????щ엺',
     monitoringText:'?꾩껜 ?붾㈃怨??뺣? 援ъ뿭???숈떆??遺꾩꽍??癒?諛붾떎???щ엺源뚯? 媛먯떆?⑸땲??',
    latestEvent:'LATEST EVENT', alertLog:'寃쎈낫 湲곕줉', noEvents:'?꾩쭅 諛쒖깮??寃쎈낫媛 ?놁뒿?덈떎.', exportEvents:'?대깽??CSV ?대낫?닿린',
      lineAlert:'寃쎄퀎 移⑤쾾',
    levelWatch:'二쇱쓽', levelAlert:'寃쎄퀬', levelCritical:'湲닿툒',
    watchTitle:'寃쎄퀎??諛?????뺤씤 以?, watchText:'{count}紐낆씠 寃쎄퀎?좎쓣 踰쀬뼱?ъ뒿?덈떎. 吏???щ?瑜??뺤씤?섎뒗 以묒엯?덈떎.',
    alertTitle:'寃쎄퀎??移⑤쾾 ?щ엺 媛먯?', alertCount:'寃쎄퀎??諛뽰뿉 ?щ엺 {count}紐낆씠 ?덉뒿?덈떎.',
    criticalTitle:'湲닿툒 쨌 ?μ떆媛??댄깉', criticalText:'{count}紐낆씠 {seconds}珥덉㎏ 寃쎄퀎??諛뽰뿉 癒몃Ъ怨??덉뒿?덈떎. 利됱떆 ?뺤씤???꾩슂?⑸땲??',
    adminAlertTitle:'愿由ъ옄 ?덉쟾 ?뚮┝', adminAlertBody:'[{level}] 寃쎄퀎??諛뽰뿉 ?щ엺 {count}紐낆씠 媛먯??섏뿀?듬땲??',
    eventAlert:'[{level}] 寃쎄퀎??諛?{count}紐?媛먯?', 
    eventCameraLost:'移대찓???좏샇 ?딄? ???먮룞 ?ъ뿰寃곗쓣 ?쒕룄?⑸땲??, eventCameraBack:'移대찓???ъ뿰寃??깃났',
    eventSimStart:'?쒕??덉씠???쒖옉', 

    
    automation:'AUTOMATION', boundaryDetection:'寃쎄퀎??移⑤쾾 媛먯?', adminNotification:'愿由ъ옄 ?뚮┝',
    warningLight:'?꾩옣 寃쎄킅??, sirenToggle:'寃쎈낫??,

    
    tuningEyebrow:'DETECTION TUNING', tuningTitle:'媛먯? 誘쇨컧??, tuningLede:'?꾩옣 議곌굔??留욎떠 ?ㅽ깘怨?誘명깘??洹좏삎??議곗젙?⑸땲??',
    envPreset:'?섍꼍 ?꾨━??, presetAuto:'?먮룞 ?먮퀎', presetClear:'二쇨컙 쨌 留묒쓬', presetHaze:'?먮┝ 쨌 ?덇컻', presetNight:'?쇨컙 쨌 ?議곕룄', presetCrowd:'?쇱옟 쨌 ?깆닔湲?,
    envPresetHelp:'?먮룞 ?먮퀎? 留ㅼ큹 ?꾨젅??諛앷린쨌?鍮꾨? 痢≪젙???꾨━?뗭쓣 ?꾪솚?⑸땲??',
    tunerConfidence:'?좊ː???꾧퀎媛?, tunerConfidenceHelp:'??텧?섎줉 ?먭굅由??듭닔?먮? ???≪?留??뚮룄 ?ㅽ깘???섏뼱?⑸땲??',
    tunerFrames:'?뺤씤 ?꾨젅????, tunerFramesHelp:'?곗냽 ?꾨젅?꾩뿉??諛섎났 愿痢〓맂 ??곷쭔 ?щ엺?쇰줈 ?뺤젙?⑸땲??',
    tunerEscalate:'湲닿툒 ?밴꺽 ?쒓컙', tunerEscalateHelp:'寃쎄퀎??諛?泥대쪟媛 ???쒓컙???섏쑝硫?湲닿툒 寃쎈낫濡??밴꺽?⑸땲??',
    unitSeconds:'珥?,

    
    diagnosticsEyebrow:'DIAGNOSTICS', diagnosticsTitle:'?쒖뒪??吏꾨떒',
    diagnosticsLede:'異붾줎 吏?곌낵 ?ㅻ쪟瑜??ㅼ떆媛꾩쑝濡?怨꾩륫???깅뒫 ??섎? ?ㅼ뒪濡?媛먯??⑸땲??',
    mFpsLabel:'遺꾩꽍 FPS', mLatencyLabel:'異붾줎 吏??(ms)', mCycleLabel:'媛먯떆 二쇨린 (珥?', mTilesLabel:'遺꾪븷 ???,
    mUptimeLabel:'媛???쒓컙', mErrorsLabel:'蹂듦뎄???ㅻ쪟', mAlertsLabel:'?꾩쟻 寃쎈낫', mPeakLabel:'理쒕? ?숈떆 媛먯?',
    runSelfTest:'?먭? 吏꾨떒 ?ㅽ뻾', runStress:'遺???뚯뒪??,
    selfTestRunning:'?먭? 吏꾨떒 ?ㅽ뻾 以묅?, selfTestPass:'?먭? 吏꾨떒 ?듦낵 ??{passed}/{total} ??ぉ',
    selfTestFail:'?먭? 吏꾨떒 ?ㅽ뙣 ??{failed}嫄?({passed}/{total} ?듦낵)',
    stressRunning:'遺???뚯뒪???ㅽ뻾 以묅?,
    stressDone:'遺???뚯뒪???꾨즺 ???⑹꽦 媛앹껜 {objects}媛? 以묐났 ?듭젣 {dedupe}ms, 異붿쟻 {track}ms, ?뚮뜑 {render}ms, 珥?{total}ms',
    modelPreparing:'AI 媛먯? 紐⑤뜽??以鍮꾪븯??以?, modelRetry:'紐⑤뜽 濡쒕뱶 ?ъ떆??{attempt}/{max}',
    modelLoadFailed:'AI 媛먯? 紐⑤뜽 濡쒕뱶 ?ㅽ뙣 ???ㅽ듃?뚰겕瑜??뺤씤?섏꽭??,
    modelReady:'紐⑤뜽 以鍮??꾨즺 쨌 諛깆뿏??{backend}',
     cameraPermissionHelp:'移대찓??沅뚰븳???뺤씤?섍퀬 localhost ?먮뒗 HTTPS?먯꽌 ?묒냽?섏꽭??',
    cameraUnsupported:'??釉뚮씪?곗???移대찓?쇰? 吏?먰븯吏 ?딆뒿?덈떎.',
    degradedTiles:'異붾줎 吏?곗씠 ?믪븘 遺꾪븷 ??쇱쓣 {tiles}媛쒕줈 ?먮룞 媛먯텞?덉뒿?덈떎',
    restoredTiles:'?ъ쑀媛 ?앷꺼 遺꾪븷 ??쇱쓣 {tiles}媛쒕줈 蹂듦뎄?덉뒿?덈떎',
    loopHalted:'異붾줎???곗냽 ?ㅽ뙣???덉쟾 ?뺤??덉뒿?덈떎. ?ъ뿰寃곗씠 ?꾩슂?⑸땲??',
    nightWarning:'?쇨컙쨌?議곕룄濡??먮퀎?섏뿀?듬땲?? 媛?쒓킅 移대찓?쇰쭔?쇰줈???먭굅由?寃異쒕쪧????븘吏묐땲??',
    noEventsToExport:'?대낫???대깽?멸? ?놁뒿?덈떎.',

    
    noticeTitle:'???쒖뒪?쒖? 愿???몃젰???泥댄븯吏 ?딅뒗 蹂댁“ 媛먯떆 ?꾧뎄?낅땲??',
    noticeText:'?몃챸 ?덉쟾 寃쎈낫??AI 媛먯? 寃곌낵? ?꾩옣 愿???몃젰???뺤씤???④퍡 ?곸슜?댁빞 ?⑸땲?? ?곸긽? 釉뚮씪?곗? ?덉뿉?쒕쭔 泥섎━?섎ŉ ?몃?濡??꾩넚?섏? ?딆뒿?덈떎.',

    
      backendUnloaded:'誘몃줈??, backendUnavailable:'?ъ슜 遺덇?',

     

     

     

      

      
    
       unitSecondsShort:'珥?,

    

    
    
    
    
    licProject:'???꾨줈?앺듃 쨌 MIT License', licDataset:'COCO Dataset 쨌 CC BY 4.0',
    footText:'Beach Watch ??AI 湲곕컲 ?대? ?ㅼ떆媛??덉쟾 紐⑤땲?곕쭅. ?뚯뒪 肄붾뱶??MIT ?쇱씠?좎뒪濡?怨듦컻?섏뼱 ?꾧뎄???먯쑀濡?쾶 ?ъ슜쨌?섏젙쨌?щ같?ы븷 ???덉뒿?덈떎. 蹂??쒖뒪?쒖? ?몃챸 援ъ“ ?몃젰??蹂댁“?섎뒗 ?꾧뎄?대ŉ, ?⑤룆?쇰줈 ?몃챸 ?덉쟾??蹂댁옣?섏? ?딆뒿?덈떎. ?곸긽? ?ъ슜?먯쓽 釉뚮씪?곗? ?덉뿉?쒕쭔 泥섎━?⑸땲??'
  },

  en: {
    skipToMonitor:'Skip to the monitoring view', settings:'Settings', preferences:'PREFERENCES', settingsTitle:'Settings',
    language:'Language', languageHelp:'Your language choice is kept for future visits.', cancel:'Cancel', saveSettings:'Save settings',
    badgeEngine:'ENGINE', badgeEnvironment:'SCENE', badgeHealth:'HEALTH', badgeOnDevice:'On-device processing 쨌 video never uploaded', badgeLicense:'MIT open source',
    envUnknown:'Awaiting analysis', envClear:'Daylight 쨌 clear', envHaze:'Overcast 쨌 haze', envNight:'Night 쨌 low light', envGlare:'Backlight 쨌 glare', envCrowd:'Crowded 쨌 peak season',
    healthIdle:'Idle', healthGood:'Healthy',  healthError:'Error', healthRecovering:'Reconnecting',

    monitoringEyebrow:'LIVE SAFETY MONITORING', mainTitle:'Beach Safety Monitoring Camera', dangerBoundary:'DANGER BOUNDARY',
    initialHint:'Click the view to place the two endpoints of the boundary.', simulationFlag:'SIMULATION MODE 쨌 NOT LIVE FOOTAGE',
    boundaryControl:'Boundary controls', mobileLineHelp:'Use the sliders below instead of dragging on the video.',
    height:'Height', tilt:'Tilt', saveBoundary:'Save boundary', saved:'Saved', 
    cameraSelect:'Select camera',  editBoundary:'Adjust boundary', 
    resetBoundary:'Reset boundary',  runSimulation:'Run simulation', 
    cameraPreview:'CAMERA PREVIEW',  
    cameraNotConnected:'Camera not connected', 

    safetyStatus:'SAFETY STATUS', ready:'READY', waiting:'Waiting for detection',
    readyText:'Connect a camera to begin boundary monitoring. No camera? Run the simulation to see how it behaves.',
    boundaryPoints:'Boundary points', peopleAbove:'People past line',
     monitoringText:'The full frame and magnified tiles are analysed together so distant swimmers are not missed.',
    latestEvent:'LATEST EVENT', alertLog:'Alert log', noEvents:'No alerts have occurred yet.', exportEvents:'Export events as CSV',
      lineAlert:'LINE ALERT',
    levelWatch:'WATCH', levelAlert:'ALERT', levelCritical:'CRITICAL',
    watchTitle:'Verifying subject past the boundary', watchText:'{count} person(s) crossed the boundary. Confirming persistence.',
    alertTitle:'Boundary crossing detected', alertCount:'{count} person(s) are past the boundary.',
    criticalTitle:'CRITICAL 쨌 prolonged exposure', criticalText:'{count} person(s) have stayed past the boundary for {seconds}s. Immediate check required.',
    adminAlertTitle:'Beach Safety Administrator Alert', adminAlertBody:'[{level}] {count} person(s) detected past the boundary.',
    eventAlert:'[{level}] {count} person(s) past the boundary', 
    eventCameraLost:'Camera signal lost ??attempting automatic reconnection', eventCameraBack:'Camera reconnected',
    eventSimStart:'Simulation started', 

    automation:'AUTOMATION', boundaryDetection:'Boundary crossing detection', adminNotification:'Administrator notification',
    warningLight:'On-site warning light', sirenToggle:'Audible alarm',

    tuningEyebrow:'DETECTION TUNING', tuningTitle:'Detection sensitivity', tuningLede:'Balance false alarms against missed detections for your site conditions.',
    envPreset:'Scene preset', presetAuto:'Auto-detect', presetClear:'Daylight 쨌 clear', presetHaze:'Overcast 쨌 haze', presetNight:'Night 쨌 low light', presetCrowd:'Crowded 쨌 peak season',
    envPresetHelp:'Auto-detect measures frame luminance and contrast every second and switches presets accordingly.',
    tunerConfidence:'Confidence threshold', tunerConfidenceHelp:'Lower values catch more distant swimmers but admit more wave false positives.',
    tunerFrames:'Confirmation frames', tunerFramesHelp:'Only subjects observed across this many consecutive frames are confirmed as people.',
    tunerEscalate:'Escalation time', tunerEscalateHelp:'Staying past the boundary longer than this escalates to a critical alert.',
    unitSeconds:'s',

    diagnosticsEyebrow:'DIAGNOSTICS', diagnosticsTitle:'System diagnostics',
    diagnosticsLede:'Inference latency and errors are measured continuously so degradation is detected by the system itself.',
    mFpsLabel:'Analysis FPS', mLatencyLabel:'Inference latency (ms)', mCycleLabel:'Sweep interval (s)', mTilesLabel:'Active tiles',
    mUptimeLabel:'Uptime', mErrorsLabel:'Recovered errors', mAlertsLabel:'Total alerts', mPeakLabel:'Peak concurrent',
    runSelfTest:'Run self-test', runStress:'Run stress test',
    selfTestRunning:'Running self-test??, selfTestPass:'Self-test passed ??{passed}/{total} checks',
    selfTestFail:'Self-test failed ??{failed} failing ({passed}/{total} passed)',
    stressRunning:'Running stress test??,
    stressDone:'Stress test complete ??{objects} synthetic objects, dedupe {dedupe}ms, tracking {track}ms, render {render}ms, total {total}ms',
    modelPreparing:'Preparing the AI detection model', modelRetry:'Retrying model load {attempt}/{max}',
    modelLoadFailed:'Failed to load the AI detection model ??check your network',
    modelReady:'Model ready 쨌 backend {backend}',
     cameraPermissionHelp:'Check camera permissions and open the page over localhost or HTTPS.',
    cameraUnsupported:'This browser does not support camera access.',
    degradedTiles:'High inference latency ??tiles automatically reduced to {tiles}',
    restoredTiles:'Headroom recovered ??tiles restored to {tiles}',
    loopHalted:'Inference failed repeatedly and was safely halted. Reconnect to resume.',
    nightWarning:'Night / low-light conditions detected. Visible-light cameras alone detect distant subjects poorly.',
    noEventsToExport:'There are no events to export.',

    noticeTitle:'This system assists monitoring staff ??it does not replace them.',
    noticeText:'Life-safety alerts must combine AI detections with confirmation by on-site staff. Video is processed inside the browser and is never transmitted.',

    
      
      backendUnloaded:'not loaded', backendUnavailable:'unavailable',

     

     

     

      

      
    
       unitSecondsShort:'s',

    

     

      

      

     

     

    

        

        

    

     

       

       

     

    

    

      

      
      
    licProject:'This project 쨌 MIT License', licDataset:'COCO Dataset 쨌 CC BY 4.0',
    footText:'Beach Watch ??AI-powered real-time beach safety monitoring. The source is released under the MIT License, free to use, modify and redistribute. This system assists rescue personnel and does not by itself guarantee anyone?셲 safety. Video is processed only inside the user?셲 browser.'
  }
};


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   1-b. v3 異붽? 臾몄옄??(?ㅼ쨷 移대찓??쨌 ?ㅼ튂 ?좏삎 쨌 ?ㅽ듃由??뚯뒪)
   湲곗〈 ?ъ쟾??蹂묓빀?쒕떎. ko/en ?숈씪?깆? ?먭? 吏꾨떒??怨꾩냽 寃利앺븳??
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
Object.assign(I18N.ko, {
  /* 移대찓???щ’ 쨌 而⑦듃濡?*/
  addCamera:'竊?移대찓??異붽?', connectFirst:'移대찓???곌껐', disconnectAll:'?꾩껜 ?곌껐 醫낅즺',
  cameraCountLabel:'{active} / {max}', camSlotDevice:'湲곌린', camSlotStream:'?ㅽ듃由?, camSlotSim:'?쒕??덉씠??,
  camDefaultName:'移대찓??{n}', camLimitReached:'移대찓?쇰뒗 理쒕? {max}?源뚯? ?곌껐?????덉뒿?덈떎.',
  camAdded:'{name} 異붽???, camRemoved:'{name} ?쒓굅??, camConnecting:'{name} ?곌껐 以묅?,
  camConnected:'{name} ?곌껐??쨌 {resolution}', camFailed:'{name} ?곌껐 ?ㅽ뙣 ??{reason}',
  camOfflineTag:'?ㅽ봽?쇱씤', camFocusHint:'?ㅻⅨ 移대찓?쇰? ?대┃?섎㈃ ?ш쾶 蹂????덉뒿?덈떎.',
  camRemoveLabel:'??移대찓???쒓굅', camAlertFocus:'{name}?먯꽌 寃쎈낫 諛쒖깮 ???먮룞?쇰줈 ?뺣??덉뒿?덈떎',
  noCameras:'?곌껐??移대찓?쇨? ?놁뒿?덈떎. 竊?移대찓??異붽?瑜??뚮윭 ?쒖옉?섏꽭??',

  /* 移대찓??異붽? ?ㅼ씠?쇰줈洹?*/
  addCameraEyebrow:'ADD CAMERA', addCameraTitle:'移대찓??異붽?', addCameraConfirm:'異붽?',
  srcDevice:'湲곌린 移대찓??, srcStream:'?ㅽ듃由?URL', srcSim:'?쒕??덉씠??,
  srcDevicePick:'移대찓???좏깮',
  srcDeviceHelp:'USB ?뱀틺, ?댁옣 移대찓?? 洹몃━怨?媛??移대찓??OBS ??濡??ㅼ뼱?ㅻ뒗 ?쒕줎 ?곸긽???ш린???섑??⑸땲?? 紐⑸줉??鍮꾩뼱 ?덉쑝硫?癒쇱? ??踰??곌껐??沅뚰븳???덉슜?섏꽭??',
  srcStreamUrl:'?ㅽ듃由?二쇱냼', srcStreamKind:'?뺤떇', srcAuto:'?먮룞 ?먮퀎', srcVideo:'MP4 / WebM 吏곸젒',
  srcStreamHelp:'?쒕줎쨌IP 移대찓?쇰뒗 蹂댄넻 RTSP濡??≪텧?섎?濡?釉뚮씪?곗?媛 吏곸젒 ?????놁뒿?덈떎. RTSP瑜?<code>HLS(.m3u8)</code>쨌<code>MP4/WebM</code>쨌<code>MJPEG</code> 以??섎굹濡?蹂?섑빐 二쇰뒗 寃뚯씠?몄썾??二쇱냼瑜??ｌ쑝?몄슂. ?쒕쾭??CORS ?덉슜???꾩슂?⑸땲??',
  srcSimHelp:'移대찓?쇨? ?놁뼱??媛먯?쨌寃쎈낫 ?밴꺽 ?먮쫫???ы쁽?섎뒗 ?⑹꽦 ?λ㈃?낅땲?? 諛쒗몴쨌?ъ궗 ?쒖뿰?⑹씠硫??붾㈃????긽 ?쒕??덉씠?섏엫???쒖떆?⑸땲??',
  srcName:'移대찓???대쫫',
  errNeedUrl:'?ㅽ듃由?二쇱냼瑜??낅젰?섏꽭??',
  errBadUrl:'?щ컮瑜?URL???꾨떃?덈떎. http:// ?먮뒗 https:// 濡??쒖옉?댁빞 ?⑸땲??',
  errInsecure:'HTTPS ?섏씠吏?먯꽌??http:// ?ㅽ듃由쇱쓣 遺덈윭?????놁뒿?덈떎. 寃뚯씠?몄썾?대? HTTPS濡??쒓났?섏꽭??',
  errHlsUnsupported:'??釉뚮씪?곗???HLS瑜?吏곸젒 吏?먰븯吏 ?딆뒿?덈떎. hls.js 濡쒕뱶???ㅽ뙣?덉쑝???ㅽ듃?뚰겕瑜??뺤씤?섍굅??MP4/MJPEG ?뺤떇???ъ슜?섏꽭??',
  errStreamLoad:'?ㅽ듃由쇱쓣 ?????놁뒿?덈떎. 二쇱냼쨌CORS ?ㅼ젙쨌寃뚯씠?몄썾???곹깭瑜??뺤씤?섏꽭??',
  errPickDevice:'移대찓?쇰? ?좏깮?섏꽭??',

  /* ?ㅼ튂 ?좏삎 */
  siteEyebrow:'DEPLOYMENT SITE', siteTitle:'?ㅼ튂 ?μ냼 ?좏삎',
  siteLede:'?μ냼???곕씪 ?꾪뿕???깃꺽???щ씪吏묐땲?? ?좏삎??怨좊Ⅴ硫?媛먯? ?뚮씪誘명꽣? 寃쎈낫 ?쒓컙???④퍡 諛붾앸땲??',
  siteBeach:'?댁닔?뺤옣', siteRiver:'媛?쨌 怨꾧끝', siteLake:'?몄닔 쨌 ??섏?', sitePool:'?섏쁺??, siteDrone:'?쒕줎 ??났',
  siteBeachNote:'?뚮룄쨌?댁븞瑜섍? 二??꾪뿕 ?붿씤?낅땲?? 寃쎄퀎?좎쓣 ?뚮룄 ?쇱씤??留욎텛怨? ?뚮룄 ?щ쭚 ?ㅽ깘???듭젣?섍린 ?꾪빐 ?뺤씤 ?꾨젅?꾩쓣 2???댁긽 ?좎??섏꽭?? 5?꾧컙 臾쇰????щ쭩??42%媛 諛붾떎?먯꽌 諛쒖깮?덉뒿?덈떎.',
  siteRiverNote:'湲됰쪟????珥?留뚯뿉 ?щ엺???⑹벝?닿컩?덈떎. 洹몃옒??湲닿툒 ?밴꺽 ?쒓컙??4珥덈줈 吏㏐쾶 ?↔퀬, 醫곴퀬 援쎌? 吏?뺤쓣 怨좊젮??寃쎄퀎?좎쓣 臾쇨? 履쎌쑝濡?諛붿쭩 遺숈씠???몄씠 醫뗭뒿?덈떎. 臾쇰????щ쭩??58%媛 ?섏쿇쨌怨꾧끝?먯꽌 諛쒖깮?⑸땲??',
  siteLakeNote:'?섎㈃???붿옍???뚮룄 ?ㅽ깘???곸? ??? ?섏떖??湲됰??섎뒗 吏?먯씠 ?꾪뿕?⑸땲?? ?ㅽ깘???곸쑝誘濡??좊ː???꾧퀎媛믪쓣 議곌툑 ??떠 ?먭굅由?媛먯?瑜??섎━???몄씠 ?좊━?⑸땲??',
  sitePoolNote:'??곸씠 ?ш퀬 媛源뚯썙 寃異쒖씠 ?쎌뒿?덈떎. ????몄썝 諛?꾧? ?믪븘 以묐났 移댁슫?멸? ?앷린湲??ъ슦誘濡??뺤씤 ?꾨젅?꾩쓣 ?섎젮 ?덉젙?뷀빀?덈떎. 寃쎄퀎?좎? ?섏떖 寃쎄퀎???ㅼ씠鍮?援ъ뿭??留욎텛?몄슂.',
  siteDroneNote:'?곴났?먯꽌 ?대젮?ㅻ낫誘濡??щ엺??留ㅼ슦 ?묎쾶 ?≫옓?덈떎. 理쒖냼 ?몄껜 ?ш린瑜???텛怨?醫낇슒鍮??쒖빟???꾪솕?덉뒿?덈떎. 湲곗껜媛 ?대룞?섎㈃ ?붾㈃ 醫뚰몴 湲곗? 寃쎄퀎?좎씠 臾댁쓽誘명빐吏誘濡? ?쒖뒪?쒖씠 ?λ㈃ ?대룞??媛먯??섎㈃ 寃쎄퀎???먯젙???먮룞?쇰줈 蹂대쪟?⑸땲??',
  headingBeach:'?대? ?덉쟾 愿??, headingRiver:'?섏쿇 쨌 怨꾧끝 ?덉쟾 愿??, headingLake:'?몄닔 ?덉쟾 愿??,
  headingPool:'?섏쁺???덉쟾 愿??, headingDrone:'?쒕줎 ??났 ?덉쟾 愿??,

  /* ?대룞 媛먯? */
  motionFlag:'?λ㈃ ?대룞 以?쨌 寃쎄퀎???먯젙 蹂대쪟', motionPaused:'{name}: ?λ㈃???ш쾶 諛붾뚯뼱 寃쎄퀎???먯젙??蹂대쪟?⑸땲??,
  motionResumed:'{name}: ?λ㈃???덉젙?섏뼱 寃쎄퀎???먯젙???ш컻?⑸땲??,

  /* 吏꾨떒 */
  mMergeLabel:'愿痢????몄썝', mCamsLabel:'?쒖꽦 移대찓??,
  docLinks:'?먯꽭???댁슜? ??μ냼 臾몄꽌???덉뒿?덈떎 ??<b>README.md</b>(臾몄젣 ?뺤쓽쨌?ъ슜踰빧룹엫?⑺듃쨌媛쒕컻 湲곕줉쨌濡쒕뱶留? 쨌 <b>TECHNICAL.md</b>(AI ?뚯씠?꾨씪?맞룹븞?뺤꽦쨌寃利??꾨왂) 쨌 <b>AI_STACK.md</b>(AI 湲곗닠 ?곸꽭 遺꾩꽍) 쨌 <b>IMPACT.md</b>(吏???곗텧 洹쇨굅) 쨌 <b>DEMO_SCRIPT.md</b>(?곕え ?곸긽 ?蹂?',
  cycleShared:'移대찓??{count}?瑜?踰덇컝??遺꾩꽍?⑸땲?? 移대찓?쇰떦 媛먯떆 二쇨린??{seconds}珥덉엯?덈떎.',
  dedupeReport:'以묐났 蹂묓빀: 愿痢?{raw}嫄????몄썝 {merged}紐?
});

Object.assign(I18N.en, {
  addCamera:'竊?Add camera', connectFirst:'Connect camera', disconnectAll:'Disconnect all',
  cameraCountLabel:'{active} / {max}', camSlotDevice:'Device', camSlotStream:'Stream', camSlotSim:'Simulation',
  camDefaultName:'Camera {n}', camLimitReached:'Up to {max} cameras can be connected at once.',
  camAdded:'{name} added', camRemoved:'{name} removed', camConnecting:'Connecting {name}??,
  camConnected:'{name} connected 쨌 {resolution}', camFailed:'{name} failed to connect ??{reason}',
  camOfflineTag:'OFFLINE', camFocusHint:'Click another camera to enlarge it.',
  camRemoveLabel:'Remove this camera', camAlertFocus:'Alert on {name} ??enlarged automatically',
  noCameras:'No cameras connected. Press 竊?Add camera to begin.',

  addCameraEyebrow:'ADD CAMERA', addCameraTitle:'Add a camera', addCameraConfirm:'Add',
  srcDevice:'Device camera', srcStream:'Stream URL', srcSim:'Simulation',
  srcDevicePick:'Select camera',
  srcDeviceHelp:'USB webcams, built-in cameras, and drone feeds routed through a virtual camera (OBS and similar) appear here. If the list is empty, connect once to grant permission.',
  srcStreamUrl:'Stream address', srcStreamKind:'Format', srcAuto:'Auto-detect', srcVideo:'MP4 / WebM direct',
  srcStreamHelp:'Drones and IP cameras normally publish RTSP, which browsers cannot open directly. Point this at a gateway that transcodes RTSP into <code>HLS (.m3u8)</code>, <code>MP4/WebM</code>, or <code>MJPEG</code>. The server must allow CORS.',
  srcSimHelp:'A synthetic scene that reproduces detection and alert escalation without a camera. Intended for demos and judging; the screen always marks it as a simulation.',
  srcName:'Camera name',
  errNeedUrl:'Enter a stream address.',
  errBadUrl:'That is not a valid URL. It must start with http:// or https://.',
  errInsecure:'An HTTPS page cannot load an http:// stream. Serve the gateway over HTTPS.',
  errHlsUnsupported:'This browser has no native HLS support and hls.js failed to load. Check your network or use MP4/MJPEG instead.',
  errStreamLoad:'Could not open the stream. Check the address, CORS settings, and gateway status.',
  errPickDevice:'Select a camera.',

  siteEyebrow:'DEPLOYMENT SITE', siteTitle:'Deployment site type',
  siteLede:'Risk behaves differently by location. Choosing a type adjusts detection parameters and escalation timing together.',
  siteBeach:'Beach', siteRiver:'River 쨌 valley', siteLake:'Lake 쨌 reservoir', sitePool:'Swimming pool', siteDrone:'Aerial drone',
  siteBeachNote:'Waves and rip currents dominate. Align the boundary with the surf line and keep confirmation frames at 2 or more to suppress foam false positives. 42% of Korean water-recreation deaths over five years occurred at sea.',
  siteRiverNote:'Rapids can carry a person away within seconds, so escalation is shortened to 4 seconds and the boundary is best placed tight against the waterline for narrow, winding terrain. 58% of water-recreation deaths occur in rivers and valleys.',
  siteLakeNote:'Calm water means fewer wave false positives, but sudden depth changes are the hazard. With less noise you can afford a lower confidence threshold to extend distant detection.',
  sitePoolNote:'Subjects are large and close, so detection is easy ??but high occupancy makes duplicate counting likely, so confirmation frames are raised for stability. Align the boundary with the depth change or diving zone.',
  siteDroneNote:'Looking straight down, people appear very small, so the minimum body size is lowered and the aspect-ratio constraint relaxed. When the aircraft moves, a screen-space boundary becomes meaningless, so the system suspends boundary judgement whenever it detects scene motion.',
  headingBeach:'Beach Safety Monitoring', headingRiver:'River & Valley Safety Monitoring', headingLake:'Lake Safety Monitoring',
  headingPool:'Pool Safety Monitoring', headingDrone:'Aerial Drone Safety Monitoring',

  motionFlag:'SCENE MOVING 쨌 BOUNDARY SUSPENDED', motionPaused:'{name}: scene shifted sharply ??boundary judgement suspended',
  motionResumed:'{name}: scene stabilised ??boundary judgement resumed',

  mMergeLabel:'Observations ??people', mCamsLabel:'Active cameras',
  docLinks:'Full detail lives in the repository docs ??<b>README.md</b> (problem framing, usage, impact, build log, roadmap) 쨌 <b>TECHNICAL.md</b> (AI pipeline, reliability, verification) 쨌 <b>AI_STACK.md</b> (detailed AI analysis) 쨌 <b>IMPACT.md</b> (how the figures are derived) 쨌 <b>DEMO_SCRIPT.md</b> (demo video script)',
  cycleShared:'{count} cameras are analysed in rotation. The per-camera sweep interval is {seconds}s.',
  dedupeReport:'Duplicate merge: {raw} observations ??{merged} people'
});


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   1-c. v4 異붽? 臾몄옄??(?먯쑀 寃쎄퀎 援ъ뿭 쨌 ?뚮┝ ?섏떊??
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
Object.assign(I18N.ko, {
  /* 媛먯? ?쒖떆 쨌 ?곹깭 (?쇳빆 ?곗궛???덉뿉?쒕쭔 ?곗뿬 ?뺣━ 怨쇱젙???④퍡 鍮좎죱????ぉ) */
  person:'?щ엺', distantPerson:'?먭굅由??щ엺', monitoring:'寃쎄퀎 援ъ뿭 媛먯떆 以?,

  /* 寃쎄퀎 援ъ뿭 ?몄쭛 */
  zoneEyebrow:'DANGER ZONE', zoneTitle:'寃쎄퀎 援ъ뿭 ?몄쭛',
  zoneLede:'?뚮룄?좉낵 ?덉쟾援ъ뿭? 吏곸꽑???꾨떃?덈떎. ?먯쓣 ?먰븯??留뚰겮 李띿뼱 吏?뺤뿉 留욌뒗 紐⑥뼇?쇰줈 洹몃━?몄슂.',
  zoneModeLine:'??(?대━?쇱씤)', zoneModeLineHelp:'?좊낫??諛붽묑履??꾩そ)???덉쑝硫??꾪뿕',
  zoneModePolygon:'援ъ뿭 (?대━怨?', zoneModePolygonHelp:'?ロ엺 援ъ뿭 ?덉뿉 ?ㅼ뼱?ㅻ㈃ ?꾪뿕',
  zoneEdit:'?몄쭛 ?쒖옉', zoneEditDone:'?몄쭛 ?꾨즺', zoneUndo:'留덉?留?????젣', zoneReset:'湲곕낯 紐⑥뼇',
  zoneSimplify:'??以꾩씠湲?, zoneApplyAll:'紐⑤뱺 移대찓?쇱뿉 ?곸슜',
  zonePointCount:'??{n}媛?, zoneModeTag:'{mode}',
  zoneHintEdit:'?붾㈃???대┃?섎㈃ ?먯씠 異붽??섍퀬, ?먯쓣 ?뚮㈃ ?대룞?⑸땲?? ?먯쓣 ?붾툝?대┃?섎㈃ ??젣?⑸땲??',
  zoneHintView:'?몄쭛???쒖옉?섎㈃ ?붾㈃?먯꽌 ?먯쓣 異붽?쨌?대룞쨌??젣?????덉뒿?덈떎.',
  zoneHintTouch:'?붾㈃????븯硫??먯씠 異붽??섍퀬, 湲멸쾶 ?뚮윭 ?뚮㈃ ?대룞?⑸땲?? ?먯쓣 ??踰???븯硫???젣?⑸땲??',
  zoneMinPoints:'?좎? ??2媛? 援ъ뿭? ??3媛??댁긽?댁뼱???⑸땲??',
  zoneApplied:'?꾩옱 寃쎄퀎 援ъ뿭??移대찓??{n}????곸슜?덉뒿?덈떎.',
  zoneSimplified:'??{before}媛???{after}媛쒕줈 ?뺣━?덉뒿?덈떎.',
  zoneSwitched:'寃쎄퀎 諛⑹떇??{mode}(??濡?諛붽엥?듬땲??',
  height:'?믪씠', tilt:'湲곗슱湲?,
  sliderNote:'?먯씠 2媛쒖씪 ?뚮쭔 ?믪씠쨌湲곗슱湲??щ씪?대뜑瑜??????덉뒿?덈떎.',

  /* 鍮??붾㈃ 쨌 鍮좊Ⅸ ?쒖옉 */
  emptyTitle:'媛먯떆??移대찓?쇰? 異붽??섏꽭??,
  emptyLede:'移대찓?쇰뒗 理쒕? 5?源뚯? 遺숈씪 ???덉뒿?덈떎. ?λ퉬媛 ?녿떎硫??쒕??덉씠?섏쑝濡?媛먯?? 3?④퀎 寃쎈낫 ?밴꺽??洹몃?濡??뺤씤?????덉뒿?덈떎.',
  step1:'1. ?μ냼 ?좏삎 ?좏깮', step1b:'?댁닔?뺤옣쨌媛빧룻샇?샕룹닔?곸옣쨌?쒕줎 以묒뿉??怨좊Ⅴ硫?媛먯? ?뚮씪誘명꽣媛 ?④퍡 留욎떠吏묐땲??',
  step2:'2. 移대찓???곌껐', step2b:'湲곌린 移대찓?? ?쒕줎쨌IP 移대찓???ㅽ듃由?URL, ?먮뒗 ?쒕??덉씠?섏쓣 ?좏깮?⑸땲??',
  step3:'3. 寃쎄퀎 援ъ뿭 洹몃━湲?, step3b:'?뚮룄?졖룹닔??寃쎄퀎瑜??곕씪 ?먯쓣 李띿뼱 ?꾪뿕 援ъ뿭??吏?뺤뿉 留욊쾶 洹몃┰?덈떎.',
  quickSim:'?쒕??덉씠?섏쑝濡?蹂닿린', quickDevice:'湲곌린 移대찓???곌껐', quickStream:'?ㅽ듃由?URL ?곌껐',

  /* ?뚮┝ ?섏떊??*/
  contactsEyebrow:'ALERT RECIPIENTS', contactsTitle:'?뚮┝ ?섏떊??,
  contactsLede:'?깅줉???대떦?먯뿉寃??꾪뿕 ?깃툒??留욎떠 ?뚮┝??蹂대깄?덈떎. 洹쇰Т 以묒씤 ?щ엺?먭쾶留?諛쒖넚?⑸땲??',
  contactsEmpty:'?깅줉???섏떊?먭? ?놁뒿?덈떎. ?섏떊?먮? ?깅줉?섎㈃ 寃쎈낫媛 ?붾㈃?먮쭔 ?⑥? ?딄퀬 ?대떦?먯뿉寃?吏곸젒 ?꾨떖?⑸땲??',
  addContact:'竊??섏떊???깅줉', editContact:'?섏젙', removeContact:'??젣', testContact:'?뚯뒪??諛쒖넚',
  contactOnDuty:'洹쇰Т 以?, contactOffDuty:'?湲?, contactToggle:'洹쇰Т ?곹깭 ?꾪솚',
  contactDialogTitle:'?섏떊???깅줉', contactDialogEditTitle:'?섏떊???섏젙', contactSave:'???,
  fieldName:'?대쫫', fieldRole:'??븷 쨌 ?대떦 援ъ뿭', fieldPhone:'?대???, fieldEmail:'?대찓??,
  fieldWebhook:'?뱁썒 URL (?좏깮)', fieldMinLevel:'?섏떊 ?쒖옉 ?깃툒',
  levelAlertOnly:'寃쎄퀬 ?댁긽', levelCriticalOnly:'湲닿툒留?,
  fieldWebhookHelp:'釉뚮씪?곗?留뚯쑝濡쒕뒗 臾몄옄쨌?대찓?쇱쓣 ?먮룞 諛쒖넚?????놁뒿?덈떎. ?ㅼ젣 ?듬낫??<b>?뱁썒</b>?쇰줈 蹂대깄?덈떎 ??Slack쨌Discord쨌?щ궡 ?쒕쾭 ??POST瑜?諛쏅뒗 二쇱냼瑜??ｌ쑝硫?寃쎈낫 ??JSON???꾩넚?⑸땲?? ?대??걔룹씠硫붿씪???낅젰???먮㈃ 寃쎈낫 李쎌뿉????踰덉뿉 ?꾪솕쨌臾몄옄쨌硫붿씪??嫄????덈뒗 踰꾪듉???앷퉩?덈떎.',
  errContactName:'?대쫫???낅젰?섏꽭??',
  errContactWebhook:'?뱁썒 二쇱냼??http:// ?먮뒗 https:// 濡??쒖옉?댁빞 ?⑸땲??',
  errContactChannel:'?대??걔룹씠硫붿씪쨌?뱁썒 以?理쒖냼 ?섎굹???낅젰?댁빞 ?⑸땲??',
  contactAdded:'?섏떊??{name} ?깅줉??, contactUpdated:'?섏떊??{name} ?섏젙??, contactRemoved:'?섏떊??{name} ??젣??,
  contactDutyOn:'{name} 洹쇰Т ?쒖옉', contactDutyOff:'{name} ?湲??꾪솚',
  notifySent:'{name}?먭쾶 ?뚮┝ 諛쒖넚', notifyWebhookOk:'{name} ?뱁썒 ?꾩넚 ?깃났',
  notifyWebhookFail:'{name} ?뱁썒 ?꾩넚 ?ㅽ뙣 ??{reason} (CORS ?덉슜 ?먮뒗 以묎퀎 ?쒕쾭媛 ?꾩슂?????덉뒿?덈떎)',
  notifyNoRecipients:'洹쇰Т 以묒씤 ?섏떊?먭? ?놁뼱 ?붾㈃ 寃쎈낫留??쒖떆?⑸땲??,
  notifyTestSent:'{name}?먭쾶 ?뚯뒪???뚮┝??蹂대깉?듬땲??,
  toastRecipients:'?섏떊: {names}',
  actionCall:'?꾪솕', actionSms:'臾몄옄', actionMail:'硫붿씪',
  testAlertBody:'[?뚯뒪?? Beach Watch ?뚮┝ ?곌껐 ?뺤씤?낅땲?? ?ㅼ젣 ?곹솴???꾨떃?덈떎.'
});

Object.assign(I18N.en, {
  person:'PERSON', distantPerson:'DISTANT PERSON', monitoring:'Zone monitoring active',
  zoneEyebrow:'DANGER ZONE', zoneTitle:'Danger zone editor',
  zoneLede:'Surf lines and safe areas are not straight. Place as many points as you need and draw a shape that follows the terrain.',
  zoneModeLine:'Line (polyline)', zoneModeLineHelp:'Danger is anything past (above) the line',
  zoneModePolygon:'Area (polygon)', zoneModePolygonHelp:'Danger is anything inside the closed area',
  zoneEdit:'Start editing', zoneEditDone:'Finish editing', zoneUndo:'Remove last point', zoneReset:'Reset shape',
  zoneSimplify:'Simplify points', zoneApplyAll:'Apply to all cameras',
  zonePointCount:'{n} points', zoneModeTag:'{mode}',
  zoneHintEdit:'Click the view to add a point, drag a point to move it, double-click a point to delete it.',
  zoneHintView:'Start editing to add, move, or delete points directly on the view.',
  zoneHintTouch:'Tap the view to add a point, press and drag to move it, double-tap a point to delete it.',
  zoneMinPoints:'A line needs at least 2 points and an area at least 3.',
  zoneApplied:'Applied the current zone to {n} cameras.',
  zoneSimplified:'Reduced {before} points to {after}.',
  zoneSwitched:'Zone mode switched to {mode}.',
  height:'Height', tilt:'Tilt',
  sliderNote:'The height and tilt sliders are available only while the zone has exactly 2 points.',

  emptyTitle:'Add a camera to start monitoring',
  emptyLede:'Up to five cameras can be connected. With no hardware to hand, the simulation reproduces detection and the three-stage escalation exactly.',
  step1:'1. Pick the site type', step1b:'Beach, river, lake, pool, or drone ??detection parameters follow your choice.',
  step2:'2. Connect a camera', step2b:'A device camera, a drone/IP camera stream URL, or the built-in simulation.',
  step3:'3. Draw the danger zone', step3b:'Place points along the surf line or depth change so the zone matches the terrain.',
  quickSim:'Try the simulation', quickDevice:'Connect device camera', quickStream:'Connect stream URL',

  contactsEyebrow:'ALERT RECIPIENTS', contactsTitle:'Alert recipients',
  contactsLede:'Registered staff are notified according to alert severity. Only people marked on duty receive alerts.',
  contactsEmpty:'No recipients registered. Once you add one, alerts reach a person directly instead of only appearing on screen.',
  addContact:'竊?Add recipient', editContact:'Edit', removeContact:'Delete', testContact:'Send test',
  contactOnDuty:'On duty', contactOffDuty:'Standby', contactToggle:'Toggle duty status',
  contactDialogTitle:'Add recipient', contactDialogEditTitle:'Edit recipient', contactSave:'Save',
  fieldName:'Name', fieldRole:'Role 쨌 assigned zone', fieldPhone:'Mobile', fieldEmail:'Email',
  fieldWebhook:'Webhook URL (optional)', fieldMinLevel:'Notify from severity',
  levelAlertOnly:'ALERT and above', levelCriticalOnly:'CRITICAL only',
  fieldWebhookHelp:'A browser alone cannot send SMS or email. Real delivery goes out over a <b>webhook</b> ??give any address that accepts a POST (Slack, Discord, your own server) and the alert is sent as JSON. Filling in a mobile number or email adds one-tap call / SMS / mail buttons to the alert popup.',
  errContactName:'Enter a name.',
  errContactWebhook:'A webhook address must start with http:// or https://.',
  errContactChannel:'Provide at least one of mobile, email, or webhook.',
  contactAdded:'Recipient {name} added', contactUpdated:'Recipient {name} updated', contactRemoved:'Recipient {name} deleted',
  contactDutyOn:'{name} is on duty', contactDutyOff:'{name} moved to standby',
  notifySent:'Notified {name}', notifyWebhookOk:'{name} webhook delivered',
  notifyWebhookFail:'{name} webhook failed ??{reason} (the endpoint may need CORS enabled, or a relay server)',
  notifyNoRecipients:'No recipient is on duty ??showing the on-screen alert only',
  notifyTestSent:'Test alert sent to {name}',
  toastRecipients:'Recipients: {names}',
  actionCall:'Call', actionSms:'SMS', actionMail:'Mail',
  testAlertBody:'[TEST] Beach Watch notification check. This is not a real incident.'
});


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   1-d. ?ъ슫 留??ㅻ벉湲?(v5)
   ??????????????????????????????????????????????????????????????????
   ?대━?쇱씤쨌?대━怨ㅒ룻봽由ъ뀑쨌?꾧퀎媛뮻룹텛濡?吏?곗쿂???꾨Ц ?⑹뼱瑜?洹몃?濡??붾㈃??   ?대낫?대㈃, ?뺤옉 ???쒖뒪?쒖쓣 ???덉쟾?붿썝怨?愿?쒖슂?먯씠 ?쎌? 紐삵븳??
   ?욎쓽 ?ъ쟾 ?꾩뿉 ??뼱?⑥꽌 ?붾㈃ 臾멸뎄瑜??꾨? ?쇱긽?대줈 諛붽씔??
   (?대? 蹂???대쫫? 洹몃?濡??먭퀬 '蹂댁씠??留?留?諛붽씔??)
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
Object.assign(I18N.ko, {
  /* ?곷떒 諛곗? */
  badgeEngine:'泥섎━ ?μ튂', badgeEnvironment:'?곹솴', badgeHealth:'?곹깭',
  badgeOnDevice:'?곸긽? ??湲곌린 ?덉뿉?쒕쭔 泥섎━', badgeLicense:'?꾧뎄???????덈뒗 怨듦컻 ?뚯뒪',
  envUnknown:'?뺤씤 ??, envClear:'??쨌 留묒쓬', envHaze:'?먮┝ 쨌 ?덇컻', envNight:'諛?쨌 ?대몢?',
  envGlare:'?뉖튆 諛섏궗 ?ы븿', envCrowd:'?щ엺 留롮쓬',
  healthIdle:'?湲?, healthGood:'?뺤긽', healthDegraded:'?먮젮吏?, healthError:'臾몄젣 ?덉쓬', healthRecovering:'?ㅼ떆 ?곌껐 以?,
  backendUnloaded:'以鍮???, backendUnavailable:'?ъ슜 遺덇?',

  /* 愿???붾㈃ */
  monitoringEyebrow:'?ㅼ떆媛??덉쟾 媛먯떆', dangerBoundary:'?꾪뿕 援ъ뿭',
  simulationFlag:'泥댄뿕 紐⑤뱶 쨌 ?ㅼ젣 ?곸긽 ?꾨떂', simCameraName:'泥댄뿕???붾㈃', simLiveStatus:'泥댄뿕 紐⑤뱶 吏꾪뻾 以?,
  person:'?щ엺', distantPerson:'硫由??덈뒗 ?щ엺', lineAlert:'?꾪뿕 援ъ뿭 吏꾩엯',
  cameraPreview:'移대찓???붾㈃', cameraOffline:'移대찓??爰쇱쭚', cameraLive:'?ㅼ떆媛?移대찓??,
  cameraNotConnected:'移대찓???놁쓬', cameraConnected:'移대찓???곌껐??쨌 {resolution}',

  /* ?덉쟾 ?곹깭 */
  safetyStatus:'?덉쟾 ?곹깭', ready:'?湲?, waiting:'媛먯떆 ?湲?以?,
  readyText:'移대찓?쇰? ?곌껐?섎㈃ ?꾪뿕 援ъ뿭 媛먯떆媛 ?쒖옉?⑸땲?? 移대찓?쇨? ?녿떎硫?泥댄뿕 紐⑤뱶濡??대뼸寃??숈옉?섎뒗吏 蹂????덉뒿?덈떎.',
  boundaryPoints:'援ъ뿭 ??媛쒖닔', peopleAbove:'?꾪뿕 援ъ뿭 ?щ엺',
  monitoring:'?꾪뿕 援ъ뿭 媛먯떆 以?,
  monitoringText:'?붾㈃ ?꾩껜? ?뺣???移몄쓣 ?④퍡 ?댄렣, 硫由??덈뒗 ?щ엺源뚯? 李얠븘?낅땲??',
  levelWatch:'二쇱쓽', levelAlert:'寃쎄퀬', levelCritical:'湲닿툒',
  watchTitle:'?꾪뿕 援ъ뿭 吏꾩엯 ?뺤씤 以?, watchText:'{count}紐낆씠 ?꾪뿕 援ъ뿭???ㅼ뼱?붿뒿?덈떎. ?ㅼ젣 ?щ엺??留욌뒗吏 ?뺤씤?섎뒗 以묒엯?덈떎.',
  alertTitle:'?꾪뿕 援ъ뿭???щ엺 ?덉쓬', alertCount:'?꾪뿕 援ъ뿭???щ엺 {count}紐낆씠 ?덉뒿?덈떎.',
  criticalTitle:'湲닿툒 쨌 ?ㅻ옒 癒몃Т??以?, criticalText:'{count}紐낆씠 {seconds}珥덉㎏ ?꾪뿕 援ъ뿭???덉뒿?덈떎. 利됱떆 ?뺤씤???꾩슂?⑸땲??',
  adminAlertTitle:'?꾪뿕 ?뚮┝', adminAlertBody:'[{level}] ?꾪뿕 援ъ뿭???щ엺 {count}紐낆씠 ?덉뒿?덈떎.',
  eventAlert:'[{level}] ?꾪뿕 援ъ뿭??{count}紐?, latestEvent:'理쒓렐 寃쎈낫', alertLog:'寃쎈낫 湲곕줉',
  noEvents:'?꾩쭅 諛쒖깮??寃쎈낫媛 ?놁뒿?덈떎.', exportEvents:'寃쎈낫 湲곕줉 ?대젮諛쏄린',
  eventSimStart:'泥댄뿕 紐⑤뱶 ?쒖옉', eventSimStop:'泥댄뿕 紐⑤뱶 醫낅즺',
  eventCameraLost:'移대찓???곌껐???딄꺼 ?ㅼ떆 ?곌껐?섎뒗 以묒엯?덈떎', eventCameraBack:'移대찓?쇨? ?ㅼ떆 ?곌껐?섏뿀?듬땲??,

  /* 移대찓??*/
  addCamera:'竊?移대찓??異붽?', connectFirst:'移대찓???곌껐', disconnectAll:'?꾩껜 ?꾧린',
  runSimulation:'泥댄뿕 紐⑤뱶 ?쒖옉', stopSimulation:'泥댄뿕 紐⑤뱶 ?꾧린',
  camSlotDevice:'湲곌린', camSlotStream:'?명꽣??, camSlotFile:'?곸긽 ?뚯씪', camSlotScreen:'?붾㈃', camSlotSim:'泥댄뿕',
  camDefaultName:'移대찓??{n}', camOfflineTag:'爰쇱쭚',
  camFocusHint:'?ㅻⅨ 移대찓?쇰? ?꾨Ⅴ硫??ш쾶 蹂????덉뒿?덈떎.',
  noCameras:'?곌껐??移대찓?쇨? ?놁뒿?덈떎. 竊?移대찓??異붽?瑜??뚮윭 ?쒖옉?섏꽭??',
  addCameraEyebrow:'移대찓??異붽?', addCameraTitle:'移대찓??異붽?', addCameraConfirm:'異붽?',
  srcDevice:'??湲곌린 移대찓??, srcStream:'?명꽣??移대찓??, srcSim:'泥댄뿕 紐⑤뱶',
  srcDevicePick:'移대찓??怨좊Ⅴ湲?,
  srcDeviceHelp:'USB ?뱀틺, ?명듃遺??댁옣 移대찓?? 洹몃━怨?OBS 媛숈? ?꾨줈洹몃옩?쇰줈 ?섍릿 ?쒕줎 ?붾㈃???ш린???섑??⑸땲?? 紐⑸줉??鍮꾩뼱 ?덉쑝硫???踰??곌껐??移대찓???ъ슜???덉슜??二쇱꽭??',
  srcStreamUrl:'移대찓??二쇱냼', srcStreamKind:'?곸긽 ?뺤떇', srcAuto:'?먮룞?쇰줈 留욎땄', srcVideo:'?쇰컲 ?곸긽 (MP4 / WebM)',
  srcStreamHelp:'?쒕줎?대굹 CCTV???媛?釉뚮씪?곗?媛 諛붾줈 ?????녿뒗 ?뺤떇?쇰줈 蹂대깄?덈떎. ?곸긽??<code>HLS</code>쨌<code>?쇰컲 ?곸긽</code>쨌<code>MJPEG</code> 以??섎굹濡?諛붽퓭 二쇰뒗 以묎퀎 二쇱냼瑜??ｌ쑝?몄슂. 以묎퀎 ?쒕쾭?먯꽌 ?몃? ?묒냽???덉슜?댁빞 ?⑸땲??',
  srcFile:'?곸긽 ?뚯씪', srcFilePick:'?곸긽 ?뚯씪 ?좏깮',
  srcFileHelp:'??湲곌린????λ맂 ?곸긽 ?뚯씪(MP4쨌WebM쨌MOV ????怨⑤씪 洹몃?濡??ъ깮쨌遺꾩꽍?⑸땲?? ?뚯씪? ?대뵒濡쒕룄 ?꾩넚?섏? ?딄퀬 ??釉뚮씪?곗? ?덉뿉?쒕쭔 ?대┰?덈떎.',
  errNeedFile:'?곸긽 ?뚯씪???좏깮?섏꽭??',
  errFilePlayback:'???곸긽 ?뚯씪???ъ깮?????놁뒿?덈떎. ?뺤떇???뺤씤?섍굅???ㅻⅨ ?뚯씪???좏깮??二쇱꽭??',
  camFileName:'?곸긽 ?뚯씪',
  srcSimHelp:'移대찓?쇨? ?놁뼱??媛먯?? 寃쎈낫媛 ?대뼸寃??щ씪媛?붿? 洹몃?濡?蹂댁뿬 二쇰뒗 媛???붾㈃?낅땲?? 諛쒗몴쨌?쒖뿰?⑹씠硫??붾㈃????긽 泥댄뿕 紐⑤뱶?쇨퀬 ?쒖떆?⑸땲??',
  srcName:'移대찓???대쫫',
  errNeedUrl:'移대찓??二쇱냼瑜??낅젰?섏꽭??',
  errBadUrl:'二쇱냼媛 ?щ컮瑜댁? ?딆뒿?덈떎. http:// ?먮뒗 https:// 濡??쒖옉?댁빞 ?⑸땲??',
  errInsecure:'蹂댁븞 ?곌껐(https) ?섏씠吏?먯꽌??http:// 二쇱냼瑜?遺덈윭?????놁뒿?덈떎. 以묎퀎 二쇱냼瑜?https濡?以鍮꾪빐 二쇱꽭??',
  errHlsUnsupported:'??釉뚮씪?곗?媛 ?대떦 ?뺤떇??諛붾줈 ?ъ깮?섏? 紐삵븯怨? ?ъ깮湲??대젮諛쏄린???ㅽ뙣?덉뒿?덈떎. ?명꽣???곌껐???뺤씤?섍굅???쇰컲 ?곸긽쨌MJPEG ?뺤떇????二쇱꽭??',
  errStreamLoad:'?곸긽???????놁뒿?덈떎. 二쇱냼? 以묎퀎 ?쒕쾭 ?곹깭瑜??뺤씤??二쇱꽭??',
  errPickDevice:'移대찓?쇰? 怨⑤씪 二쇱꽭??',

  /* ?ㅼ튂 ?μ냼 */
  siteEyebrow:'?ㅼ튂 ?μ냼', siteTitle:'?대뵒???ㅼ튂?섎굹??,
  siteLede:'?μ냼留덈떎 ?꾪뿕???ㅻ쫭?덈떎. ?좏삎??怨좊Ⅴ硫?媛먯? ?ㅼ젙怨??뚮┝ ?쒓컙???④퍡 留욎떠吏묐땲??',
  siteBeachNote:'?뚮룄? ?댁븞瑜섍? 媛?????꾪뿕?낅땲?? ?꾪뿕 援ъ뿭???뚮룄?좎뿉 留욎떠 洹몃━怨? ?뚮룄瑜??щ엺?쇰줈 ?섎せ 蹂댁? ?딅룄濡??ㅼ떆 ?뺤씤 ?잛닔瑜?2???댁긽 ?먯꽭?? 理쒓렐 5?꾧컙 臾쇰????щ쭩??42%媛 諛붾떎?먯꽌 ?쇱뼱?ъ뒿?덈떎.',
  siteRiverNote:'湲됰쪟??紐?珥?留뚯뿉 ?щ엺???좊궡??蹂대깄?덈떎. 洹몃옒??湲닿툒 ?뚮┝源뚯? ?쒓컙??4珥덈줈 吏㏐쾶 ?≪븯?듬땲?? 援쎌? 臾쇨만?먮뒗 ?붾㈃???뚯뼱 怨≪꽑?쇰줈 援ъ뿭??洹몃━?몄슂. 臾쇰????щ쭩??58%媛 ?섏쿇怨?怨꾧끝?먯꽌 ?쇱뼱?⑸땲??',
  siteLakeNote:'臾쇨껐???붿옍???쏄꼍蹂닿? ?곸? ??? ?섏떖??媛묒옄湲?源딆뼱吏??怨녹씠 ?꾪뿕?⑸땲?? ?쏄꼍蹂닿? ?곸쑝??媛먯? 誘쇨컧?꾨? 議곌툑 ??떠 硫由ш퉴吏 ?댄뵾???몄씠 醫뗭뒿?덈떎.',
  sitePoolNote:'?щ엺???ш퀬 媛源뚯썙 ???≫옓?덈떎. ???遺먮퉬硫????щ엺???щ윭 踰?? ???덉쑝???ㅼ떆 ?뺤씤 ?잛닔瑜??섎젮 ?덉젙?쒗궢?덈떎. ?꾪뿕 援ъ뿭? ?섏떖 寃쎄퀎???ㅼ씠鍮?援ъ뿭??留욎텛?몄슂.',
  siteDroneNote:'?섎뒛?먯꽌 ?대젮?ㅻ낫硫??щ엺???꾩＜ ?묎쾶 蹂댁엯?덈떎. 洹몃옒???묒? ??곷룄 ?щ엺?쇰줈 ?몄젙?섎룄濡?留욎떠 ?먯뿀?듬땲?? ?쒕줎???吏곸씠硫??붾㈃ 湲곗??쇰줈 洹몃┛ 援ъ뿭???섎?媛 ?놁뼱吏誘濡? ?붾㈃???ш쾶 諛붾뚮㈃ 援ъ뿭 ?먯젙???먮룞?쇰줈 ?좎떆 硫덉땅?덈떎.',

  /* ?꾪뿕 援ъ뿭 洹몃━湲?*/
  zoneEyebrow:'?꾪뿕 援ъ뿭', zoneTitle:'?꾪뿕 援ъ뿭 洹몃━湲?,
  zoneLede:'?뚮룄?좎씠??臾쇰????쒗븳 援ъ뿭? 吏곸꽑???꾨떃?덈떎. <b>?붾㈃???먯쑝濡??몃벏 ?뚯뼱??/b> ?먰븯??怨≪꽑??洹몃?濡?洹몃━?몄슂.',
  zoneModeLine:'??湲뗪린', zoneModeLineHelp:'??諛붽묑履?臾?履????щ엺???덉쑝硫??꾪뿕',
  zoneModePolygon:'?곸뿭 移좏븯湲?, zoneModePolygonHelp:'移좏븳 ?곸뿭 ?덉뿉 ?щ엺???ㅼ뼱?ㅻ㈃ ?꾪뿕',
  zoneEdit:'洹몃━湲??쒖옉', zoneEditDone:'洹몃━湲???, zoneUndo:'?????섎룎由ш린', zoneReset:'泥섏쓬 紐⑥뼇?쇰줈',
  zoneSimplify:'???ㅻ벉湲?, zoneApplyAll:'?ㅻⅨ 移대찓?쇱뿉???묎컳??,
  zonePointCount:'??{n}媛?,
  zoneHintEdit:'?붾㈃??<b>?뚮㈃ ?먯쑝濡?洹몃━??怨≪꽑</b>??洹몃젮吏묐땲?? ??踰??꾨Ⅴ硫??먯씠 ?섎굹 異붽??섍퀬, ?먯쓣 ?뚮㈃ ??꺼吏묐땲?? ?먯쓣 ??踰??꾨Ⅴ硫?吏?뚯쭛?덈떎.',
  zoneHintView:'洹몃━湲??쒖옉???꾨Ⅴ硫??붾㈃??吏곸젒 ?꾪뿕 援ъ뿭??洹몃┫ ???덉뒿?덈떎.',
  zoneHintTouch:'?붾㈃???먭??쎌쑝濡?<b>?몃㈃ 怨≪꽑</b>??洹몃젮吏묐땲?? ??踰???븯硫???異붽?, ?먯쓣 ?뚮㈃ ?대룞, ??踰???븯硫???젣?⑸땲??',
  zoneMinPoints:'?좎? ?먯씠 2媛? ?곸뿭? 3媛??댁긽 ?덉뼱???⑸땲??',
  zoneApplied:'吏湲?洹몃┛ ?꾪뿕 援ъ뿭??移대찓??{n}????묎컳???곸슜?덉뒿?덈떎.',
  zoneSimplified:'??{before}媛쒕? {after}媛쒕줈 ?ㅻ벉?덉뒿?덈떎.',
  zoneSwitched:'{mode} 諛⑹떇?쇰줈 諛붽엥?듬땲??',
  zoneDrawn:'怨≪꽑??洹몃졇?듬땲??????{n}媛?,
  zoneTooManyPoints:'?먯? 理쒕? {max}媛쒓퉴吏 李띿쓣 ???덉뒿?덈떎. ???ㅻ벉湲곕? ?뚮윭 ?뺣━??蹂댁꽭??',
  sliderNote:'?먯씠 2媛쒖씤 怨㏃? ?좎씪 ?뚮쭔 ?믪씠쨌湲곗슱湲??먯옟?대? ?????덉뒿?덈떎.',

  /* 鍮좊Ⅸ ?쒖옉 */
  emptyLede:'移대찓?쇰뒗 理쒕? 5?源뚯? 遺숈씪 ???덉뒿?덈떎. ?λ퉬媛 ?녿떎硫?泥댄뿕 紐⑤뱶濡?媛먯?? 3?④퀎 寃쎈낫瑜?洹몃?濡?蹂????덉뒿?덈떎.',
  step1:'1. ?ㅼ튂 ?μ냼 怨좊Ⅴ湲?, step1b:'?댁닔?뺤옣쨌媛빧룻샇?샕룹닔?곸옣쨌?쒕줎 以묒뿉??怨좊Ⅴ硫?媛먯? ?ㅼ젙???④퍡 留욎떠吏묐땲??',
  step2:'2. 移대찓???곌껐', step2b:'??湲곌린 移대찓?? ?쒕줎쨌CCTV 二쇱냼, ?먮뒗 泥댄뿕 紐⑤뱶 以묒뿉??怨좊쫭?덈떎.',
  step3:'3. ?꾪뿕 援ъ뿭 洹몃━湲?, step3b:'?붾㈃???뚯뼱 ?뚮룄?좎씠??臾쇰????쒗븳 援ъ뿭??怨≪꽑?쇰줈 洹몃┰?덈떎.',
  quickSim:'泥댄뿕 紐⑤뱶濡?蹂닿린', quickDevice:'??湲곌린 移대찓???곌껐', quickStream:'?명꽣??移대찓???곌껐',

  /* ?먮룞 ?숈옉 */
  automation:'?먮룞 ?숈옉', boundaryDetection:'?꾪뿕 援ъ뿭 媛먯?', adminNotification:'?꾪뿕 ?뚮┝ 蹂대궡湲?,
  warningLight:'?붾㈃ 寃쎄킅??, sirenToggle:'寃쎈낫??,

  /* 媛먯? ?ㅼ젙 */
  tuningEyebrow:'媛먯? ?ㅼ젙', tuningTitle:'媛먯? ?ㅼ젙',
  tuningLede:'?꾩옣??留욎떠 ?쏄꼍蹂대? 以꾩씪吏, ?볦튂吏 ?딆쓣吏瑜?議곗젅?⑸땲??',
  envPreset:'?좎뵪 쨌 諛앷린 ?곹솴', presetAuto:'?먮룞?쇰줈 留욎땄', presetClear:'??쨌 留묒쓬',
  presetHaze:'?먮┝ 쨌 ?덇컻', presetNight:'諛?쨌 ?대몢?', presetCrowd:'?щ엺 留롮쓬',
  envPresetHelp:'?먮룞?쇰줈 留욎땄??怨좊Ⅴ硫??붾㈃ 諛앷린瑜??ㅼ뒪濡??댄렣 ?곹솴???먮떒?⑸땲??',
  tunerConfidence:'媛먯? 誘쇨컧??, tunerConfidenceHelp:'??텧?섎줉 硫由??덈뒗 ?щ엺源뚯? ?≪븘?닿퀬, ?믪씪?섎줉 ?뚮룄瑜??щ엺?쇰줈 ?섎せ 蹂대뒗 ?쇱씠 以꾩뼱??땲??',
  tunerFrames:'?ㅼ떆 ?뺤씤 ?잛닔', tunerFramesHelp:'?щ윭 踰??곕떖??蹂댁씤 ??곷쭔 ?щ엺?쇰줈 ?몄젙?⑸땲?? ?뚮룄瑜??щ엺?쇰줈 ?섎せ 蹂대뒗 寃껋쓣 留됱븘 以띾땲??',
  tunerEscalate:'湲닿툒 ?뚮┝源뚯? ?쒓컙', tunerEscalateHelp:'?щ엺???꾪뿕 援ъ뿭?????쒓컙蹂대떎 ?ㅻ옒 癒몃Т瑜대㈃ 湲닿툒 寃쎈낫濡??щ씪媛묐땲??',

  /* ?쒖뒪???곹깭 */
  diagnosticsEyebrow:'?쒖뒪???곹깭', diagnosticsTitle:'?쒖뒪???곹깭',
  diagnosticsLede:'遺꾩꽍 ?띾룄? ?ㅻ쪟瑜?怨꾩냽 ?ш퀬 ?덉뼱?? ?먮젮吏硫??ㅼ뒪濡??뚯븘李⑤┰?덈떎.',
  mFpsLabel:'珥덈떦 遺꾩꽍 ?잛닔', mLatencyLabel:'??踰?遺꾩꽍 ?쒓컙(ms)', mCycleLabel:'??諛뷀??꾨뒗 ?쒓컙(珥?',
  mTilesLabel:'?뺣? 遺꾩꽍 移?, mUptimeLabel:'耳쒕몦 ?쒓컙', mErrorsLabel:'?ㅼ뒪濡?怨좎튇 ?ㅻ쪟',
  mAlertsLabel:'蹂대궦 寃쎈낫', mPeakLabel:'??踰덉뿉 理쒕떎 媛먯?', mMergeLabel:'媛먯? ?????щ엺 ??, mCamsLabel:'耳쒖쭊 移대찓??,
  runSelfTest:'?ㅼ뒪濡??먭??섍린', runStress:'?띾룄 ?쒗뿕',
  selfTestRunning:'?먭??섎뒗 以묅?, selfTestPass:'?먭? ?듦낵 ??{passed}/{total} ??ぉ',
  selfTestFail:'?먭? ?ㅽ뙣 ??{failed}嫄?({passed}/{total} ?듦낵)',
  stressRunning:'?띾룄 ?쒗뿕 以묅?,
  stressDone:'?띾룄 ?쒗뿕 ?꾨즺 ??媛吏????{objects}媛? 寃뱀튇 寃??⑹튂湲?{dedupe}ms, ?곕씪媛湲?{track}ms, ?붾㈃ ?쒖떆 {render}ms, ?⑷퀎 {total}ms',
  dedupeReport:'寃뱀튇 寃??⑹튂湲? 媛먯? {raw}嫄????щ엺 {merged}紐?,
  modelPreparing:'媛먯? 湲곕뒫??以鍮꾪븯??以?, modelRetry:'媛먯? 湲곕뒫 ?ㅼ떆 遺덈윭?ㅻ뒗 以?{attempt}/{max}',
  modelLoadFailed:'媛먯? 湲곕뒫??遺덈윭?ㅼ? 紐삵뻽?듬땲?????명꽣???곌껐???뺤씤??二쇱꽭??,
  modelReady:'媛먯? 以鍮??꾨즺 쨌 泥섎━ ?μ튂 {backend}',
  cameraConnectFailed:'移대찓???곌껐 ?ㅽ뙣', cameraPermissionHelp:'移대찓???ъ슜 ?덉슜???뺤씤?섍퀬, 二쇱냼媛 localhost ?먮뒗 https ?몄? ?뺤씤??二쇱꽭??',
  cameraUnsupported:'??釉뚮씪?곗???移대찓?쇰? 吏?먰븯吏 ?딆뒿?덈떎.',
  degradedTiles:'遺꾩꽍???먮젮???뺣? 遺꾩꽍 移몄쓣 {tiles}媛쒕줈 以꾩??듬땲??,
  restoredTiles:'?ъ쑀媛 ?앷꺼 ?뺣? 遺꾩꽍 移몄쓣 {tiles}媛쒕줈 ?섎룎?몄뒿?덈떎',
  loopHalted:'遺꾩꽍??怨꾩냽 ?ㅽ뙣???덉쟾?섍쾶 硫덉톬?듬땲?? 移대찓?쇰? ?ㅼ떆 ?곌껐??二쇱꽭??',
  loopHaltedHelp:'?곌껐??移대찓?쇨? 紐⑤몢 ?묐떟?섏? ?딆뒿?덈떎. ?꾩껜 ?꾧린瑜??꾨Ⅸ ???ㅼ떆 ?곌껐??二쇱꽭??',
  modelLoadFailedHelp:'媛먯? 湲곕뒫??諛쏆? 紐삵빐 媛먯떆瑜??쒖옉?섏? ?딆븯?듬땲?? ?명꽣???곌껐???뺤씤?섍퀬 移대찓?쇰? ?ㅼ떆 ?곌껐??二쇱꽭?? (移대찓???놁씠 ?뺤씤留??섎젮硫?泥댄뿕 紐⑤뱶瑜??곗꽭??)',
  needsAttention:'?뺤씤???꾩슂?⑸땲??,
  cameraDropped:'{name} ??媛) 怨꾩냽 ?ㅽ뙣??媛먯떆?먯꽌 ?쒖쇅?덉뒿?덈떎. ?섎㉧吏 移대찓?쇰뒗 洹몃?濡?媛먯떆?⑸땲??',
  streamFailedHelp:'{name} ?곌껐 ?ㅽ뙣 ??二쇱냼瑜??뺤씤??二쇱꽭?? ({reason})',
  nightWarning:'諛ㅒ룹뼱?먯??쇰줈 ?먮떒?덉뒿?덈떎. ?쇰컲 移대찓?쇰쭔?쇰줈??硫由??덈뒗 ?щ엺??李얘린 ?대졄?듬땲??',
  noEventsToExport:'?대젮諛쏆쓣 寃쎈낫 湲곕줉???놁뒿?덈떎.',
  cycleShared:'移대찓??{count}?瑜?踰덇컝???댄븤?덈떎. 移대찓???섎굹瑜??ㅼ떆 蹂닿린源뚯? {seconds}珥덇? 嫄몃┰?덈떎.',
  motionFlag:'移대찓???吏곸엫 쨌 援ъ뿭 ?먯젙 ?좎떆 硫덉땄',
  motionPaused:'{name}: ?붾㈃???ш쾶 諛붾뚯뼱 援ъ뿭 ?먯젙???좎떆 硫덉땅?덈떎',
  motionResumed:'{name}: ?붾㈃???덉젙?섏뼱 援ъ뿭 ?먯젙???ㅼ떆 ?쒖옉?⑸땲??,

  /* ?뚮┝ 諛쏆쓣 ?щ엺 */
  contactsEyebrow:'?뚮┝ 諛쏆쓣 ?щ엺', contactsTitle:'?뚮┝ 諛쏆쓣 ?щ엺',
  contactsLede:'?깅줉???대떦?먯뿉寃??꾪뿕 ?뺣룄??留욎떠 ?뚮┝??蹂대깄?덈떎. 洹쇰Т 以묒씤 ?щ엺?먭쾶留?媛묐땲??',
  contactsEmpty:'?깅줉???щ엺???놁뒿?덈떎. ?대떦?먮? ?깅줉?섎㈃ 寃쎈낫媛 ?붾㈃?먮쭔 ?⑥? ?딄퀬 洹??щ엺?먭쾶 諛붾줈 媛묐땲??',
  addContact:'竊??대떦???깅줉', editContact:'?섏젙', removeContact:'??젣', testContact:'?쒗뿕 諛쒖넚',
  contactDialogTitle:'?대떦???깅줉', contactDialogEditTitle:'?대떦???섏젙',
  fieldRole:'??븷 쨌 ?대떦 援ъ뿭',
  fieldWebhook:'?뚮┝ 蹂대궪 ?쒕쾭 二쇱냼 (?좏깮)', fieldMinLevel:'?몄젣遺??諛쏆쓣源뚯슂',
  levelAlertOnly:'寃쎄퀬遺??, levelCriticalOnly:'湲닿툒留?,
  fieldWebhookHelp:'釉뚮씪?곗?留뚯쑝濡쒕뒗 臾몄옄쨌?대찓?쇱쓣 ?먮룞?쇰줈 蹂대궪 ???놁뒿?덈떎. ?먮룞 諛쒖넚? <b>?뚮┝ ?쒕쾭 二쇱냼</b>濡쒕쭔 媛?ν빀?덈떎 ??移댁뭅?ㅽ넚 ?뚮┝ ?곕룞, ?щ궡 ?쒕쾭, Slack 媛숈씠 ?뚮┝??諛쏆븘 二쇰뒗 二쇱냼瑜??ｌ쑝硫??꾪뿕 ?곹솴???먮룞?쇰줈 ?꾨떖?⑸땲?? ?대??걔룹씠硫붿씪???곸뼱 ?먮㈃ 寃쎈낫 李쎌뿉 ?꾪솕쨌臾몄옄쨌硫붿씪 踰꾪듉???앷꺼 ??踰덉뿉 ?곌껐?????덉뒿?덈떎.',
  errContactWebhook:'?쒕쾭 二쇱냼??http:// ?먮뒗 https:// 濡??쒖옉?댁빞 ?⑸땲??',
  errContactChannel:'?대??걔룹씠硫붿씪쨌?쒕쾭 二쇱냼 以?理쒖냼 ?섎굹???낅젰??二쇱꽭??',
  contactAdded:'{name} ?섏쓣 ?깅줉?덉뒿?덈떎', contactUpdated:'{name} ???뺣낫瑜??섏젙?덉뒿?덈떎', contactRemoved:'{name} ?섏쓣 ??젣?덉뒿?덈떎',
  notifyWebhookOk:'{name} ?섏뿉寃??먮룞 ?꾩넚 ?깃났',
  notifyWebhookFail:'{name} ???먮룞 ?꾩넚 ?ㅽ뙣 ??{reason} (諛쏅뒗 ?쒕쾭?먯꽌 ?몃? ?묒냽 ?덉슜???꾩슂?????덉뒿?덈떎)',
  notifyNoRecipients:'洹쇰Т 以묒씤 ?대떦?먭? ?놁뼱 ?붾㈃ 寃쎈낫留??쒖떆?⑸땲??,
  toastRecipients:'諛쏅뒗 ?щ엺: {names}',
  testAlertBody:'[?쒗뿕] ?뚮┝ ?곌껐?????섎뒗吏 ?뺤씤?섎뒗 硫붿떆吏?낅땲?? ?ㅼ젣 ?곹솴???꾨떃?덈떎.',

  /* ?뚮┝ ?덉슜 */
  enableAlerts:'?뵒 ?뚮┝ 耳쒓린', alertsEnabled:'?뵒 ?뚮┝ 耳쒖쭚', alertsBlocked:'?뵓 ?뚮┝ 李⑤떒??,
  enableAlertsHelp:'釉뚮씪?곗? ?뚮┝??耳쒕㈃ ?ㅻⅨ 李쎌쓣 蹂닿퀬 ?덉뼱???꾪뿕 ?곹솴??諛붾줈 ?밸땲??',
  alertsGranted:'釉뚮씪?곗? ?뚮┝??耳곗뒿?덈떎. ?댁젣 ?ㅻⅨ 李쎌쓣 蹂닿퀬 ?덉뼱???꾪뿕 ?곹솴???붾㈃???밸땲??',
  alertsDenied:'釉뚮씪?곗??먯꽌 ?뚮┝??李⑤떒?섏뼱 ?덉뒿?덈떎. 二쇱냼李??쇱そ ?먮Ъ???꾩씠肄섏뿉???뚮┝???덉슜??二쇱꽭??',

  /* ?덈궡 */
  noticeTitle:'???쒖뒪?쒖? ?덉쟾?붿썝????좏븯吏 ?딅뒗 蹂댁“ 媛먯떆 ?꾧뎄?낅땲??',
  noticeText:'?꾪뿕 ?뚮┝? AI 媛먯? 寃곌낵? ?꾩옣 ?대떦?먯쓽 ?뺤씤???④퍡 ?곸슜?댁빞 ?⑸땲?? ?곸긽? ??湲곌린 ?덉뿉?쒕쭔 泥섎━?섎ŉ 諛뽰쑝濡??섍?吏 ?딆뒿?덈떎.',
  licProject:'???꾨줈?앺듃 쨌 ?꾧뎄???ъ슜 媛??MIT)'
});

Object.assign(I18N.en, {
  badgeEngine:'ENGINE', badgeEnvironment:'SCENE', badgeHealth:'HEALTH',
  badgeOnDevice:'Video stays on this device', badgeLicense:'Free & open source',
  envUnknown:'Not checked yet', envClear:'Day 쨌 clear', envHaze:'Overcast 쨌 haze', envNight:'Night 쨌 dark',
  envGlare:'Strong glare', envCrowd:'Crowded',
  healthIdle:'Idle', healthGood:'OK', healthDegraded:'Slowing down', healthError:'Problem', healthRecovering:'Reconnecting',
  backendUnloaded:'not ready', backendUnavailable:'unavailable',

  monitoringEyebrow:'LIVE SAFETY MONITORING', dangerBoundary:'DANGER ZONE',
  simulationFlag:'DEMO MODE 쨌 NOT LIVE FOOTAGE', simCameraName:'DEMO VIEW', simLiveStatus:'Demo mode running',
  person:'PERSON', distantPerson:'FAR AWAY', lineAlert:'IN DANGER ZONE',
  cameraPreview:'CAMERA VIEW', cameraOffline:'CAMERA OFF', cameraLive:'LIVE CAMERA',
  cameraNotConnected:'No camera', cameraConnected:'Camera connected 쨌 {resolution}',

  safetyStatus:'SAFETY STATUS', ready:'READY', waiting:'Waiting to monitor',
  readyText:'Connect a camera and danger-zone monitoring begins. No camera? Demo mode shows exactly how it behaves.',
  boundaryPoints:'Zone points', peopleAbove:'People in zone',
  monitoring:'Watching the danger zone',
  monitoringText:'The whole view and magnified tiles are checked together, so people far out are not missed.',
  levelWatch:'WATCH', levelAlert:'ALERT', levelCritical:'URGENT',
  watchTitle:'Checking entry into the zone', watchText:'{count} person(s) entered the danger zone. Confirming this is a real person.',
  alertTitle:'Person in the danger zone', alertCount:'{count} person(s) are in the danger zone.',
  criticalTitle:'URGENT 쨌 staying too long', criticalText:'{count} person(s) have been in the danger zone for {seconds}s. Check immediately.',
  adminAlertTitle:'Danger alert', adminAlertBody:'[{level}] {count} person(s) in the danger zone.',
  eventAlert:'[{level}] {count} in the danger zone', latestEvent:'LATEST ALERT', alertLog:'Alert history',
  noEvents:'No alerts yet.', exportEvents:'Download alert history',
  eventSimStart:'Demo mode started', eventSimStop:'Demo mode stopped',
  eventCameraLost:'Camera disconnected ??reconnecting', eventCameraBack:'Camera reconnected',

  addCamera:'竊?Add camera', connectFirst:'Connect camera', disconnectAll:'Turn all off',
  runSimulation:'Start demo mode', stopSimulation:'Stop demo mode',
  camSlotDevice:'Device', camSlotStream:'Network', camSlotFile:'Video file', camSlotScreen:'Screen', camSlotSim:'Demo',
  camDefaultName:'Camera {n}', camOfflineTag:'OFF',
  camFocusHint:'Click another camera to enlarge it.',
  noCameras:'No cameras connected. Press 竊?Add camera to begin.',
  addCameraEyebrow:'ADD CAMERA', addCameraTitle:'Add a camera', addCameraConfirm:'Add',
  srcDevice:'This device', srcStream:'Network camera', srcSim:'Demo mode',
  srcDevicePick:'Choose a camera',
  srcDeviceHelp:'USB webcams, built-in cameras, and drone video routed through software like OBS all appear here. If the list is empty, connect once and allow camera access.',
  srcStreamUrl:'Camera address', srcStreamKind:'Video format', srcAuto:'Detect automatically', srcVideo:'Plain video (MP4 / WebM)',
  srcStreamHelp:'Drones and CCTV usually send a format browsers cannot open directly. Use a relay address that converts the video into <code>HLS</code>, <code>plain video</code>, or <code>MJPEG</code>. The relay server must allow outside access.',
  srcFile:'Video file', srcFilePick:'Choose a video file',
  srcFileHelp:'Pick a video file saved on this device (MP4, WebM, MOV, etc.) to play and analyse it directly. The file is never uploaded anywhere ??it stays inside this browser.',
  errNeedFile:'Choose a video file.',
  errFilePlayback:'This video file could not be played. Check the format or choose a different file.',
  camFileName:'Video file',
  srcSimHelp:'A generated view that shows detection and alert escalation without any camera. Made for demos; the screen always marks it as demo mode.',
  srcName:'Camera name',
  errNeedUrl:'Enter a camera address.',
  errBadUrl:'That address is not valid. It must start with http:// or https://.',
  errInsecure:'A secure (https) page cannot load an http:// address. Serve the relay over https.',
  errHlsUnsupported:'This browser cannot play that format directly and the player failed to download. Check your connection, or use plain video / MJPEG.',
  errStreamLoad:'Could not open the video. Check the address and the relay server.',
  errPickDevice:'Choose a camera.',

  siteEyebrow:'WHERE IS IT INSTALLED', siteTitle:'Where is it installed?',
  siteLede:'Every place carries a different risk. Picking a type adjusts the detection settings and alert timing together.',
  siteBeachNote:'Waves and rip currents are the main danger. Draw the zone along the surf line and keep the re-check count at 2 or more so foam is not mistaken for a person. 42% of Korean water-recreation deaths over five years happened at sea.',
  siteRiverNote:'Rapids can sweep someone away in seconds, so the urgent alert is shortened to 4 seconds. For winding water, drag across the view to draw a curve. 58% of water-recreation deaths happen in rivers and valleys.',
  siteLakeNote:'Calm water means fewer false alarms, but sudden depth changes are the hazard. With less noise you can lower the sensitivity a little to see further.',
  sitePoolNote:'People are large and close, so they are easy to spot. When it is busy one person can be counted twice, so raise the re-check count. Align the zone with the depth change or diving area.',
  siteDroneNote:'From above people look very small, so small targets are still accepted as people. When the drone moves, a zone drawn on screen no longer means anything, so zone checking pauses automatically whenever the view shifts sharply.',

  zoneEyebrow:'DANGER ZONE', zoneTitle:'Draw the danger zone',
  zoneLede:'Surf lines and no-swim areas are not straight. <b>Drag across the view</b> and draw the curve exactly as it is.',
  zoneModeLine:'Draw a line', zoneModeLineHelp:'Danger is past the line, on the water side',
  zoneModePolygon:'Fill an area', zoneModePolygonHelp:'Danger is anywhere inside the filled area',
  zoneEdit:'Start drawing', zoneEditDone:'Done drawing', zoneUndo:'Undo one point', zoneReset:'Back to default',
  zoneSimplify:'Smooth the line', zoneApplyAll:'Copy to other cameras',
  zonePointCount:'{n} points',
  zoneHintEdit:'<b>Drag to draw a freehand curve.</b> A single click adds one point, dragging a point moves it, double-clicking a point deletes it.',
  zoneHintView:'Press Start drawing to add, move, or delete points directly on the view.',
  zoneHintTouch:'<b>Swipe to draw a freehand curve.</b> Tap to add a point, drag a point to move it, double-tap to delete it.',
  zoneMinPoints:'A line needs 2 points and an area needs 3.',
  zoneApplied:'Copied this danger zone to {n} cameras.',
  zoneSimplified:'Reduced {before} points to {after}.',
  zoneSwitched:'Switched to {mode}.',
  zoneDrawn:'Curve drawn ??{n} points',
  zoneTooManyPoints:'Up to {max} points. Try Smooth the line to tidy up.',
  sliderNote:'The height and tilt sliders work only on a straight line with exactly 2 points.',

  emptyLede:'Up to five cameras. With no hardware to hand, demo mode shows detection and the three alert stages exactly.',
  step1:'1. Pick the place', step1b:'Beach, river, lake, pool, or drone ??detection settings follow your choice.',
  step2:'2. Connect a camera', step2b:'This device, a drone/CCTV address, or demo mode.',
  step3:'3. Draw the danger zone', step3b:'Drag across the view to trace the surf line or the no-swim area.',
  quickSim:'Try demo mode', quickDevice:'Use this device', quickStream:'Use a network camera',

  automation:'AUTOMATIC ACTIONS', boundaryDetection:'Danger zone detection', adminNotification:'Send danger alerts',
  warningLight:'On-screen warning light', sirenToggle:'Alarm sound',

  tuningEyebrow:'DETECTION SETTINGS', tuningTitle:'Detection settings',
  tuningLede:'Balance fewer false alarms against missing nobody, to suit your site.',
  envPreset:'Weather 쨌 brightness', presetAuto:'Adjust automatically', presetClear:'Day 쨌 clear',
  presetHaze:'Overcast 쨌 haze', presetNight:'Night 쨌 dark', presetCrowd:'Crowded',
  envPresetHelp:'Adjust automatically checks the brightness of the view and decides for itself.',
  tunerConfidence:'Detection sensitivity', tunerConfidenceHelp:'Lower catches people further away; higher avoids mistaking waves for people.',
  tunerFrames:'Re-check count', tunerFramesHelp:'Only targets seen several times in a row count as a person. This is what stops waves triggering alarms.',
  tunerEscalate:'Time until urgent alert', tunerEscalateHelp:'If someone stays in the danger zone longer than this, the alert becomes urgent.',

  diagnosticsEyebrow:'SYSTEM STATUS', diagnosticsTitle:'System status',
  diagnosticsLede:'Speed and errors are measured continuously, so the system notices for itself when it slows down.',
  mFpsLabel:'Checks per second', mLatencyLabel:'Time per check (ms)', mCycleLabel:'Time for one round (s)',
  mTilesLabel:'Magnified tiles', mUptimeLabel:'Running time', mErrorsLabel:'Self-fixed errors',
  mAlertsLabel:'Alerts sent', mPeakLabel:'Most at once', mMergeLabel:'Detections ??people', mCamsLabel:'Cameras on',
  runSelfTest:'Run self-check', runStress:'Speed test',
  selfTestRunning:'Running self-check??, selfTestPass:'Self-check passed ??{passed}/{total}',
  selfTestFail:'Self-check failed ??{failed} of {total} ({passed} passed)',
  stressRunning:'Running speed test??,
  stressDone:'Speed test done ??{objects} test targets, merge {dedupe}ms, tracking {track}ms, drawing {render}ms, total {total}ms',
  dedupeReport:'Merging overlaps: {raw} detections ??{merged} people',
  modelPreparing:'Getting detection ready', modelRetry:'Retrying detection download {attempt}/{max}',
  modelLoadFailed:'Could not load detection ??check your internet connection',
  modelReady:'Detection ready 쨌 engine {backend}',
  cameraConnectFailed:'Camera connection failed', cameraPermissionHelp:'Allow camera access and make sure the address is localhost or https.',
  cameraUnsupported:'This browser does not support cameras.',
  degradedTiles:'Running slow ??magnified tiles reduced to {tiles}',
  restoredTiles:'Headroom recovered ??magnified tiles back to {tiles}',
  loopHalted:'Detection kept failing and stopped safely. Reconnect the camera.',
  loopHaltedHelp:'None of the connected cameras are responding. Disconnect all, then connect again.',
  modelLoadFailedHelp:'Detection could not be downloaded, so monitoring did not start. Check your internet connection and reconnect the camera. (Use demo mode to see how it works without a camera.)',
  needsAttention:'Needs attention',
  cameraDropped:'{name} kept failing and was dropped from monitoring. The other cameras keep watching.',
  streamFailedHelp:'{name} could not connect ??check the address. ({reason})',
  nightWarning:'Judged as night / dark. An ordinary camera struggles to spot people far away in these conditions.',
  noEventsToExport:'There is no alert history to download.',
  cycleShared:'{count} cameras are checked in turn. Each camera comes round again every {seconds}s.',
  motionFlag:'CAMERA MOVING 쨌 ZONE CHECK PAUSED',
  motionPaused:'{name}: view shifted sharply ??zone checking paused',
  motionResumed:'{name}: view steady again ??zone checking resumed',

  contactsEyebrow:'WHO GETS ALERTED', contactsTitle:'Who gets alerted',
  contactsLede:'Registered staff are alerted according to how serious it is. Only people on duty receive them.',
  contactsEmpty:'Nobody registered yet. Add someone and alerts reach a person directly instead of only showing on screen.',
  addContact:'竊?Add person', editContact:'Edit', removeContact:'Delete', testContact:'Send test',
  contactDialogTitle:'Add a person', contactDialogEditTitle:'Edit person',
  fieldRole:'Role 쨌 assigned area',
  fieldWebhook:'Alert server address (optional)', fieldMinLevel:'Alert from',
  levelAlertOnly:'ALERT and up', levelCriticalOnly:'URGENT only',
  fieldWebhookHelp:'A browser cannot send SMS or email by itself. Automatic delivery works only through an <b>alert server address</b> ??any address that accepts alerts (your own server, Slack, a messaging integration) receives the danger alert automatically. Adding a mobile number or email puts call / SMS / mail buttons in the alert popup for one-tap contact.',
  errContactWebhook:'The server address must start with http:// or https://.',
  errContactChannel:'Enter at least one of mobile, email, or server address.',
  contactAdded:'{name} added', contactUpdated:'{name} updated', contactRemoved:'{name} deleted',
  notifyWebhookOk:'Auto-sent to {name}',
  notifyWebhookFail:'Auto-send to {name} failed ??{reason} (the receiving server may need to allow outside access)',
  notifyNoRecipients:'Nobody is on duty ??showing the on-screen alert only',
  toastRecipients:'Sent to: {names}',
  testAlertBody:'[TEST] Checking that alerts arrive. This is not a real incident.',

  enableAlerts:'?뵒 Turn on alerts', alertsEnabled:'?뵒 Alerts on', alertsBlocked:'?뵓 Alerts blocked',
  enableAlertsHelp:'Turn on browser alerts and danger appears even while you are looking at another window.',
  alertsGranted:'Browser alerts are on. Danger will now show even while you are in another window.',
  alertsDenied:'Alerts are blocked by the browser. Allow notifications from the padlock icon in the address bar.',

  noticeTitle:'This system assists lifeguards ??it does not replace them.',
  noticeText:'Danger alerts should combine AI detection with confirmation by staff on site. Video is processed on this device only and never leaves it.',
  licProject:'This project 쨌 free to use (MIT)'
});

'use strict';
/* v7 ???ㅽ봽?쇱씤 쨌 ?뚯꽦 ?덈궡 쨌 ?ㅻ깄??쨌 媛먯떆 ?쒓컙? 쨌 愿??紐⑤뱶 쨌 ?⑥텞??*/
Object.assign(I18N.ko, {
  /* 愿??紐⑤뱶 쨌 ?⑥텞??*/
  controlRoom:'愿??紐⑤뱶', controlRoomExit:'愿??紐⑤뱶 ?꾧린',
  controlRoomOn:'愿??紐⑤뱶 ??移대찓?쇰? ?붾㈃ 媛???꾩썎?덈떎', controlRoomOff:'愿??紐⑤뱶瑜?猿먯뒿?덈떎',
  shortcutsShort:'?⑥텞??, shortcutsEyebrow:'?⑥텞??, shortcutsTitle:'?ㅻ낫???⑥텞??,
  scCamera:'洹?踰덊샇??移대찓?쇰? ?ш쾶 蹂닿린',
  scEdit:'?꾪뿕 援ъ뿭 洹몃━湲??쒖옉 / ?앸궡湲?,
  scFull:'愿??紐⑤뱶 (?붾㈃ 媛??',
  scDemo:'泥댄뿕 紐⑤뱶 ?쒖옉 / ?꾧린',
  scMute:'寃쎈낫??耳쒓린 / ?꾧린',
  scTest:'?ㅼ뒪濡??먭??섍린',
  scPoint:'(洹몃━??以? ?ㅼ쓬 ???좏깮',
  scNudge:'(洹몃━??以? ?좏깮???먯쓣 ??린湲?쨌 Shift 瑜??꾨Ⅴ硫??ш쾶',
  scHelp:'???꾩?留??닿린',
  close:'?リ린',
  sirenOn:'寃쎈낫?뚯쓣 耳곗뒿?덈떎', sirenOff:'寃쎈낫?뚯쓣 猿먯뒿?덈떎',
  zonePointMoved:'{n}踰??먯쓣 媛濡?{x}%, ?몃줈 {y}% 濡???꼈?듬땲??,
  zonePointSelected:'{n}踰????좏깮 (?꾩껜 {total}媛? 쨌 媛濡?{x}%, ?몃줈 {y}%',

  /* ?댁쁺 ?ㅼ젙 쨌 媛먯떆 ?쒓컙? */
  opsEyebrow:'?댁쁺', opsTitle:'?댁쁺 ?ㅼ젙',
  hoursEnabled:'媛먯떆 ?쒓컙?留?寃쎈낫',
  hoursFrom:'?쒖옉', hoursTo:'醫낅즺',
  hoursAlways:'吏湲덉? ?섎（ 醫낆씪 寃쎈낫瑜??몃┰?덈떎.',
  hoursInside:'{from}??to} ?ъ씠?먮쭔 寃쎈낫瑜??몃┰?덈떎. 吏湲덉? ???쒓컙 ?덉엯?덈떎.',
  hoursOutside:'{from}??to} ?ъ씠?먮쭔 寃쎈낫瑜??몃┰?덈떎. 吏湲덉? ???쒓컙 諛뽰씠???뚮━? ?뚮┝ ?꾩넚??硫덉떠 ?덉뒿?덈떎 (媛먯?? ?붾㈃ ?쒖떆??怨꾩냽?⑸땲??.',
  hoursMuted:'{name} ??媛먯떆 ?쒓컙? 諛뽰씠???뚮━쨌?뚮┝ ?꾩넚??嫄대꼫?곗뿀?듬땲??(湲곕줉? ?⑥뒿?덈떎)',

  /* ?뚯꽦 ?덈궡 */
  voiceToggle:'?뚯꽦?쇰줈 ?쎌뼱 二쇨린',
  voiceAlert:'{level}. {camera}, ?꾪뿕 援ъ뿭??{count}紐? {seconds}珥덉㎏?낅땲??',
  voiceHere:'?꾩옱 ?붾㈃',

  /* 寃쎈낫 ?ㅻ깄??*/
  snapshotToggle:'寃쎈낫 ?쒓컙 ?붾㈃ ?④린湲?,
  snapshotEyebrow:'寃쎈낫 ?붾㈃', snapshotTitle:'寃쎈낫 ?쒓컙???붾㈃',
  snapshotAlt:'{time} 寃쎈낫 ?쒓컙???붾㈃',
  snapshotSave:'?대?吏濡????,
  snapshotNote:'???붾㈃? 湲곌린 ?덉뿉留??덉뒿?덈떎. ??λ릺吏?? ?대뵒濡??꾩넚?섏????딆쑝硫??덈줈怨좎묠?섎㈃ ?щ씪吏묐땲??',

  /* ?ㅽ봽?쇱씤 */
  badgeOffline:'?ㅽ봽?쇱씤',
  offlineReady:'以鍮??꾨즺 쨌 ?뚯씪 {n}媛?, offlineNotYet:'以鍮?????,
  offlineUnsupported:'??釉뚮씪?곗????ㅽ봽?쇱씤 ??μ쓣 吏?먰븯吏 ?딆뒿?덈떎',
  prepareOffline:'?명꽣???놁씠 ?????덇쾶 以鍮?,
  prepareOfflineHelp:'吏湲???踰?諛쏆븘 ?먮㈃, ?ㅼ쓬遺?곕뒗 ?명꽣?룹씠 ?딄꺼??媛먯?媛 洹몃?濡??숈옉?⑸땲??',
  offlinePreparing:'諛쏅뒗 以묅?,
  offlineStored:'?ㅽ봽?쇱씤 以鍮??꾨즺 ???뚯씪 {n}媛쒕? ??ν뻽?듬땲??,
  offlineFailed:'?ㅽ봽?쇱씤 以鍮??ㅽ뙣 ???명꽣???곌껐???뺤씤??二쇱꽭??,
  offlineUsedCache:'{what} 瑜???ν빐 ??寃껋뿉??遺덈윭?붿뒿?덈떎 (?명꽣??遺덊븘??',
  offlineModel:'AI 紐⑤뜽',
  /* ?붾㈃ ???덈궡臾?쨌 ?뚯쟾 */
  hintCloseLabel:'?붾㈃ ???덈궡 ?リ린',
  hintDismissed:'?붾㈃ ???덈궡瑜??レ븯?듬땲?? 媛숈? ?ㅻ챸? ?꾨옒 洹몃━湲?移대뱶??洹몃?濡??덉뒿?덈떎.',
  hintRestore:'?붾㈃ ???덈궡 ?ㅼ떆 蹂닿린',
  tilt:'?뚯쟾',
  /* 洹몃━湲?踰꾪듉 ?ㅻ챸 ??留덉슦?ㅻ? ?щ━嫄곕굹 珥덉젏??媛硫??꾨옒 以꾩뿉 ?щ떎 */
  zoneTipDefault:'踰꾪듉 ?꾩뿉 留덉슦?ㅻ? ?щ━硫?媛곴컖 ?대뼡 ?쇱쓣 ?섎뒗吏 ?뚮젮 以띾땲??',
  tipEdit:'洹몃━湲??쒖옉 ???붾㈃ ?꾩뿉???꾪뿕 援ъ뿭??吏곸젒 洹몃┫ ???덇쾶 ?⑸땲?? 洹몃━???숈븞?먮뒗 媛먯떆媛 怨꾩냽?⑸땲??',
  tipUndo:'?????섎룎由ш린 ??諛⑷툑 李띿? ???섎굹留??놁빋?덈떎. ?섎せ ?뚮윭 ?앷릿 ?먯쓣 吏?????곷땲?? ?щ윭 踰??꾨Ⅴ硫??섎굹??嫄곗뒳???щ씪媛묐땲?? ?꾨? 吏?곕젮硫?泥섏쓬 紐⑥뼇?쇰줈瑜??곗꽭??',
  tipSimplify:'???ㅻ벉湲???紐⑥뼇? 洹몃?濡??먭퀬 ??媛쒖닔留?以꾩엯?덈떎. ?먯쑝濡?洹몃━硫??먯씠 ?섏떗 媛??앷린?붾뜲, ?먯씠 留롮쑝硫??먯옟?닿? 珥섏킌??怨좎튂湲??대졄?듬땲?? ??踰??뚮윭 ?뺣━?????먮낫?몄슂.',
  tipReset:'泥섏쓬 紐⑥뼇?쇰줈 ?????μ냼??湲곕낯 寃쎄퀎?좎쑝濡??섎룎由쎈땲?? 洹몃┛ 寃껋씠 紐⑤몢 ?щ씪吏묐땲??',
  tipApplyAll:'?ㅻⅨ 移대찓?쇱뿉???묎컳????吏湲?移대찓?쇱쓽 援ъ뿭???섎㉧吏 移대찓?쇱뿉 洹몃?濡?蹂듭궗?⑸땲?? 媛숈? 吏?뺤쓣 ?щ윭 ?媛 ?섎닠 蹂????곷땲??',
  zoneSimplifyNoChange:'?대? 異⑸텇???⑥닚?⑸땲????以꾩씪 ?먯씠 ?놁뒿?덈떎.',
  /* 遺곴레??吏?????몄?源뚯? 嫄몃┛ ?쒓컙 */
  nsTag:'遺곴레??吏??,
  nsLabel:'?꾪뿕 援ъ뿭 吏꾩엯 ???대떦???뺤씤源뚯? (以묒븰媛?',
  nsNoData:'?꾩쭅 ?뺤씤??寃쎈낫媛 ?놁뒿?덈떎. 寃쎈낫 李쎌쓽 ?뚰솗?명뻽?듬땲?ㅳ띾? ?꾨Ⅴ硫????レ옄媛 ?볦엯?덈떎.',
  nsSummary:'理쒓렐 {n}嫄댁쓽 以묒븰媛믪엯?덈떎. ?щ엺 ?덈쭔?쇰줈???됯퇏 {baseline}珥덇? 嫄몃┰?덈떎. 8二?紐⑺몴??{target}珥??댄븯?낅땲??',
  nsAckButton:'?뺤씤?덉뒿?덈떎',
  nsAcknowledged:'?대떦???뺤씤 ??吏꾩엯遺??{seconds}珥?嫄몃졇?듬땲??,
  nsEventAck:'?대떦?먭? ?뺤씤?덉뒿?덈떎 ??{seconds}珥?,
  nsResetDone:'遺곴레??吏??湲곕줉??吏?좎뒿?덈떎.',
  /* ? 誘몄뀡 */
  missionTag:'? 誘몄뀡',
  missionText:'8二??? ?댁닔?뺤옣 ?덉쟾?붿썝???꾪뿕 援ъ뿭 吏꾩엯??20珥덇? ?꾨땲??5珥??덉뿉 ?뚭쾶 ?쒕떎.',
  missionMetric:'遺곴레??吏????吏꾩엯?먯꽌 ?대떦???뺤씤源뚯? 嫄몃┛ ?쒓컙(以묒븰媛? 21.8珥???5珥??댄븯',
  /* ?대┛???덉쟾 쨌 媛쒖씤?뺣낫 */
  childMode:'?대┛?대룄 ?뺤떎???↔린',
  precisionMode:'?뺣? 紐⑤뱶 (癒??щ엺源뚯?)',
  precisionOn:'?뺣? 紐⑤뱶 耳쒖쭚 ???붾㈃?????섍쾶 ?섎늻怨?醫뚯슦 諛섏쟾?쇰줈 ??踰???遊낅땲?? ?먮┛ 湲곌린?먯꽌??諛섏쓳???먮젮吏????덉뒿?덈떎',
  precisionOff:'?뺣? 紐⑤뱶 爰쇱쭚 ??湲곕낯 媛먯?濡??뚯븘媛묐땲??,
  srcYt:'?좏뒠釉?쨌 ?붾㈃',
  srcYtUrl:'?좏뒠釉?二쇱냼 (?좏깮)',
  srcYtHelp:'?좏뒠釉??붾㈃? 蹂댁븞??留곹겕留뚯쑝濡쒕뒗 遺꾩꽍?????놁뒿?덈떎. 二쇱냼瑜??ｊ퀬 異붽??섎㈃ ?곸긽??????뿉???대━怨? ?댁뼱???⑤뒗 ?붾㈃ 怨듭쑀 李쎌뿉??洹???쓣 怨좊Ⅴ硫??⑸땲?? 洹몃븣遺?곕뒗 ?쇰컲 移대찓?쇱? ?묎컳???꾪뿕 援ъ뿭??洹몃━怨?寃쎈낫瑜?諛쏆쓣 ???덉뒿?덈떎.',
  srcYtSkip:'二쇱냼瑜?鍮꾩썙 ?먭퀬 異붽??섎㈃ ?좏뒠釉뚮? ?댁? ?딄퀬 諛붾줈 ?붾㈃ 怨듭쑀留??쒖옉?⑸땲??(?ㅻⅨ ?꾨줈洹몃옩 ?붾㈃??媛먯떆?????덉뒿?덈떎).',
  errBadYouTube:'?좏뒠釉?二쇱냼瑜??뚯븘蹂????놁뒿?덈떎. watch?v=???먮뒗 youtu.be/???뺥깭濡??ｌ뼱 二쇱꽭??,
  errScreenUnsupported:'??釉뚮씪?곗????붾㈃ 怨듭쑀瑜?吏?먰븯吏 ?딆뒿?덈떎. ?щ＼쨌?ｌ? 理쒖떊?먯쓣 ?곌굅??https 二쇱냼濡??묒냽??二쇱꽭??,
  screenShareCancelled:'?붾㈃ 怨듭쑀瑜?痍⑥냼?덉뒿?덈떎. ?ㅼ떆 異붽??섎㈃ 怨듭쑀 李쎌씠 ??踰????밸땲??,
  ytOpened:'?좏뒠釉??곸긽??????뿉???댁뿀?듬땲?????댁뼱吏???붾㈃ 怨듭쑀 李쎌뿉??洹???쓣 怨좊Ⅴ?몄슂',
  camYouTubeName:'?좏뒠釉??붾㈃',
  camScreenName:'怨듭쑀 ?붾㈃',
  childModeOn:'?대┛???곗꽑 ???묒? ?щ엺???몄젙?섎룄濡??ш린 湲곗?????톬?듬땲??????뺤씤 ?잛닔 +1)',
  childModeOff:'?대┛???곗꽑??猿먯뒿?덈떎 ???ш린 湲곗????대Ⅸ 湲곗??쇰줈 ?뚯븘媛묐땲??,
  wipeData:'??湲곌린????λ맂 ???뺣낫 吏?곌린',
  wipeDataHelp:'?대떦???곕씫泥샕룹쐞??援ъ뿭쨌?ㅼ젙????釉뚮씪?곗?????λ릺???덉뒿?덈떎. 怨듭슜 PC?먯꽌 ???ㅼ뿉???뚮윭??吏?곗꽭??',
  wipeConfirm:'?대떦???곕씫泥섏? 紐⑤뱺 ?ㅼ젙????釉뚮씪?곗??먯꽌 吏?곷땲?? ?섎룎由????놁뒿?덈떎. 怨꾩냽?좉퉴??',
  wipeDone:'??湲곌린????λ맂 ?뺣낫瑜?紐⑤몢 吏?좎뒿?덈떎.',
  docLinks:'?먯꽭???댁슜? ??μ냼 臾몄꽌???덉뒿?덈떎 ??<b>README.md</b>(臾몄젣 ?뺤쓽쨌?ъ슜踰빧룹엫?⑺듃쨌媛쒕컻 湲곕줉쨌濡쒕뱶留? 쨌 <b>TECHNICAL.md</b>(AI ?뚯씠?꾨씪?맞룹븞?뺤꽦쨌寃利??꾨왂) 쨌 <b>AI_STACK.md</b>(AI 湲곗닠 ?곸꽭 遺꾩꽍) 쨌 <b>TEAM.md</b>(? 誘몄뀡쨌遺곴레??吏?쑣룻? 洹쒖튃쨌二쇨컙 由щ벉) 쨌 <b>DATASET_PLAN.md</b>(?곗씠?곗뀑쨌紐⑤뜽 媛쒖꽑 怨꾪쉷) 쨌 <b>RELAY.md</b>(臾몄옄쨌?대찓???먮룞 諛쒖넚 ?곌껐) 쨌 <b>IMPACT.md</b>(吏???곗텧 洹쇨굅) 쨌 <b>DEMO_SCRIPT.md</b>(?곕え ?곸긽 ?蹂?'
});

Object.assign(I18N.en, {
  controlRoom:'Control room', controlRoomExit:'Exit control room',
  controlRoomOn:'Control room ??cameras fill the screen', controlRoomOff:'Left control room',
  shortcutsShort:'Shortcuts', shortcutsEyebrow:'SHORTCUTS', shortcutsTitle:'Keyboard shortcuts',
  scCamera:'Enlarge that camera',
  scEdit:'Start / finish drawing the danger zone',
  scFull:'Control room (full screen)',
  scDemo:'Start / stop demo mode',
  scMute:'Alarm sound on / off',
  scTest:'Run the self-check',
  scPoint:'(while drawing) select the next point',
  scNudge:'(while drawing) move the selected point 쨌 hold Shift for bigger steps',
  scHelp:'Open this help',
  close:'Close',
  sirenOn:'Alarm sound on', sirenOff:'Alarm sound off',
  zonePointMoved:'Point {n} moved to {x}% across, {y}% down',
  zonePointSelected:'Point {n} of {total} selected 쨌 {x}% across, {y}% down',

  opsEyebrow:'OPERATION', opsTitle:'Operating settings',
  hoursEnabled:'Alert only during watch hours',
  hoursFrom:'From', hoursTo:'To',
  hoursAlways:'Alerts sound around the clock.',
  hoursInside:'Alerts sound only between {from} and {to}. Right now you are inside that window.',
  hoursOutside:'Alerts sound only between {from} and {to}. You are outside that window, so sound and delivery are paused (detection and on-screen marks continue).',
  hoursMuted:'{name} ??outside watch hours, so sound and delivery were skipped (the event is still logged)',

  voiceToggle:'Read alerts aloud',
  voiceAlert:'{level}. {camera}, {count} in the danger zone, {seconds} seconds.',
  voiceHere:'this view',

  snapshotToggle:'Keep a picture of the alert moment',
  snapshotEyebrow:'ALERT SNAPSHOT', snapshotTitle:'The moment of the alert',
  snapshotAlt:'Screen at the moment of the {time} alert',
  snapshotSave:'Save as image',
  snapshotNote:'This picture stays on this device. It is never saved or sent anywhere, and it disappears when you reload.',

  badgeOffline:'Offline',
  offlineReady:'Ready 쨌 {n} files', offlineNotYet:'Not ready',
  offlineUnsupported:'This browser cannot store files for offline use',
  prepareOffline:'Get ready to work without internet',
  prepareOfflineHelp:'Download once now and detection keeps working even when the connection drops.',
  offlinePreparing:'Downloading??,
  offlineStored:'Ready for offline use ??{n} files stored',
  offlineFailed:'Could not prepare for offline use ??check your internet connection',
  offlineUsedCache:'Loaded {what} from storage (no internet needed)',
  offlineModel:'the AI model',
  hintCloseLabel:'Close the on-screen tip',
  hintDismissed:'On-screen tip closed. The same guidance stays in the drawing card below.',
  hintRestore:'Show the on-screen tip again',
  tilt:'Rotate',
  zoneTipDefault:'Hover a button to see what it does.',
  tipEdit:'Start drawing ??lets you draw the danger zone straight onto the view. Monitoring keeps running while you draw.',
  tipUndo:'Undo one point ??removes just the point you added last. Use it for a stray tap. Press repeatedly to step back one point at a time; to clear everything use Reset shape.',
  tipSimplify:'Tidy the line ??keeps the shape but cuts the number of points. Drawing by hand leaves dozens of points, and crowded handles are hard to adjust. Tidy once, then fine-tune.',
  tipReset:'Reset shape ??returns to this site\'s default boundary. Everything you drew is discarded.',
  tipApplyAll:'Copy to other cameras ??applies this zone to every other camera. Handy when several cameras watch the same shoreline.',
  zoneSimplifyNoChange:'Already simple enough ??nothing to remove.',
  nsTag:'NORTH STAR',
  nsLabel:'Zone entry ??staff acknowledgement (median)',
  nsNoData:'No acknowledged alerts yet. Press ?쏛cknowledged??in the alert popup and this number starts building.',
  nsSummary:'Median of the last {n}. Human eyes alone take about {baseline}s. The 8-week target is {target}s or less.',
  nsAckButton:'Acknowledged',
  nsAcknowledged:'Acknowledged ??{seconds}s from entry',
  nsEventAck:'Staff acknowledged ??{seconds}s',
  nsResetDone:'North Star history cleared.',
  missionTag:'TEAM MISSION',
  missionText:'In 8 weeks, a lifeguard learns that someone entered the danger zone in 5 seconds instead of 20.',
  missionMetric:'North Star ??median time from zone entry to staff acknowledgement: 21.8s ??5s or less',
  childMode:'Catch children too',
  precisionMode:'Precision mode (distant people)',
  precisionOn:'Precision mode on ??finer tiles plus a mirrored re-check. Slower devices may lag',
  precisionOff:'Precision mode off ??back to standard detection',
  srcYt:'YouTube 쨌 Screen',
  srcYtUrl:'YouTube link (optional)',
  srcYtHelp:'YouTube frames cannot be analysed from a link alone for security reasons. Paste a link and the video opens in a new tab; then pick that tab in the screen-share prompt. From there it behaves exactly like a normal camera ??draw the zone and get alerts.',
  srcYtSkip:'Leave the link empty to skip YouTube and start screen sharing straight away (any application window can be watched).',
  errBadYouTube:'That does not look like a YouTube link. Use watch?v=??or youtu.be/??,
  errScreenUnsupported:'This browser cannot share a screen. Use a recent Chrome/Edge, or open the page over https',
  screenShareCancelled:'Screen sharing was cancelled. Add the camera again to reopen the prompt',
  ytOpened:'Opened the YouTube video in a new tab ??pick that tab in the screen-share prompt',
  camYouTubeName:'YouTube screen',
  camScreenName:'Shared screen',
  childModeOn:'Child priority on ??smaller bodies now count as people (re-check count +1 to compensate)',
  childModeOff:'Child priority off ??size limits return to adult scale',
  wipeData:'Erase my data from this device',
  wipeDataHelp:'Contacts, danger zones and settings are stored in this browser. Press this after using a shared computer.',
  wipeConfirm:'This erases all contacts and settings from this browser. It cannot be undone. Continue?',
  wipeDone:'Everything stored on this device has been erased.',
  docLinks:'Full detail lives in the repository docs ??<b>README.md</b> (problem framing, usage, impact, build log, roadmap) 쨌 <b>TECHNICAL.md</b> (AI pipeline, reliability, verification) 쨌 <b>AI_STACK.md</b> (detailed AI analysis) 쨌 <b>TEAM.md</b> (mission, North Star, team rules, weekly rhythm) 쨌 <b>DATASET_PLAN.md</b> (dataset & model plan) 쨌 <b>RELAY.md</b> (wiring up real SMS / e-mail) 쨌 <b>IMPACT.md</b> (how the figures are derived) 쨌 <b>DEMO_SCRIPT.md</b> (demo video script)'
});

'use strict';
/* 以묎뎅??媛꾩껜) ?ъ쟾 ????踰덉㎏ 吏???몄뼱.
 *
 * ko쨌en ? ?щ윭 ?뚯씪???섎돇?????뚯씪????臾멸뎄瑜???뼱?곕뒗 援ъ“吏留?
 * 以묎뎅?대뒗 泥섏쓬遺??理쒖쥌 臾멸뎄濡???踰뚮쭔 ?묒꽦?덈떎. 洹몃옒?????뚯씪 ?섎굹留? * 蹂대㈃ ?붾㈃???ㅼ젣濡??⑤뒗 以묎뎅???꾨?瑜??뺤씤?????덈떎.
 *
 * 踰덉뿭 ?먯튃
 *   - ?쒓뎅?댄뙋怨?媛숈? '?ъ슫 留? 湲곗“瑜?吏?⑤떎. ?꾨Ц?⑹뼱(?섊봇쨌鸚싪씁壤???瑜??쇳븳??
 *   - 移섑솚 蹂??{count}, {name} ????諛섎뱶??洹몃?濡??④릿?? ?먭? 吏꾨떒??寃?ы븳??
 *   - ?덉쟾 怨좎?쨌?쒓퀎 臾멸뎄???살쓣 以꾩씠吏 ?딅뒗?? 異뺤빟??怨?怨쇱옣???섍린 ?뚮Ц?대떎.
 */
I18N.zh = {
  skipToMonitor:'瓮녘쉬?곁썞?㎫뵽??,
  settings:'溫양쉰', preferences:'?뤷?溫양쉰', settingsTitle:'?뤷?溫양쉰',
  language:'瑥??', languageHelp:'??됭?鼇鴉싧쑉訝뗦А溫욥뿮?뜸퓷?쇻?,
  cancel:'?뽪텋', saveSettings:'岳앭춼溫양쉰',
  badgeEngine:'瓦먪츞凉뺞뱨', badgeEnvironment:'??쥊', badgeHealth:'?뜻?,
  badgeOnDevice:'鰲녽쥜餓끻쑉?ц?鸚뉐쨪??, badgeLicense:'餓삡퐬雅뷴룾?ょ뵳鵝욜뵪?꾢?繹먬」??,
  envUnknown:'弱싨쑋?ㅶ뼪', envClear:'?썲ㄹ 쨌 ??, envHaze:'?닷ㄹ 쨌 ??, envNight:'鸚쒒뿴 쨌 ?뤸슅',
  envGlare:'凉븀깉?띶뀎', envCrowd:'雅뷴쩀',
  healthIdle:'孃끾쑛', healthGood:'閭ｅ만', healthError:'?됮뿮窯?, healthRecovering:'閭ｅ쑉?띷뼭瓦욄렏',
  monitoringEyebrow:'若욄뿶若됧뀲?묉렒', mainTitle:'役룡빼若됧뀲?묉렒?꾢깗鸚?,
  dangerBoundary:'?깁솴?뷴윜',
  initialHint:'?밧눤?삯씊竊뚧붂營?씁?뚨봇?꾡륵訝ょク?밤?,
  simulationFlag:'鵝볣챿與▼폀 쨌 亮띌씆?잌츩壤긷깗',
  boundaryControl:'渦밭븣瘟껅빐',
  mobileLineHelp:'瑥룝슴?ⓧ툔?방퍚?쀯펽訝띹쫨?닸렏?뽩뒯鰲녽쥜??,
  height:'遙섇벧', tilt:'?뗨쉬', saveBoundary:'岳앭춼渦밭븣', saved:'藥꿜퓷耶?,
  cameraSelect:'?됪떓?꾢깗鸚?, editBoundary:'瘟껅빐渦밭븣', resetBoundary:'?℡쨳容섋?渦밭븣',
  runSimulation:'凉冶뗤퐪謠뚧Æ凉?,
  cameraPreview:'?꾢깗鸚당뵽??, cameraNotConnected:'亦→쐣?꾢깗鸚?,
  safetyStatus:'若됧뀲?뜻?, ready:'孃끾쑛', waiting:'嶺됧푷凉冶뗧썞??,
  readyText:'瓦욄렏?꾢깗鸚닷릮?녑?冶뗧썞?㎩뜳?⒴뙷?잆귝깹?됪몖?뤷ㅄ?띰펽??뵪鵝볣챿與▼폀?η쐦瓦먫죱?밧폀??,
  boundaryPoints:'?뷴윜?방빊', peopleAbove:'?깁솴?뷴윜?끺볶??,
  monitoringText:'?뚧뿶?η쐦?닷퉭?삯씊?뚧붂鸚㎩릮?꾢늽?쀯펽瓦욆퓶鸚꾤쉪雅뷰튋訝띴폏轢뤸럦??,
  latestEvent:'?瓦묋???, alertLog:'鈺?뒫溫겼퐬', noEvents:'瓦섉깹?됧룕?잒??γ?,
  exportEvents:'訝뗨슬鈺?뒫溫겼퐬',
  lineAlert:'瓦쎾뀯?깁솴?뷴윜',
  levelWatch:'力ⓩ꼷', levelAlert:'鈺?몜', levelCritical:'榮㎪?,
  watchTitle:'閭ｅ쑉簾????맔瓦쎾뀯?깁솴?뷴윜',
  watchText:'??{count} 雅븃퓵?ε뜳?⒴뙷?잞펽閭ｅ쑉簾????맔訝븀쐿雅뷩?,
  alertTitle:'?깁솴?뷴윜?끾쐣雅?,
  alertCount:'?깁솴?뷴윜?끾쐣 {count} 雅뷩?,
  criticalTitle:'榮㎪?쨌 譯욅븰瓦뉏퉭',
  criticalText:'{count} 雅뷴럴?ⓨ뜳?⒴뙷?잌걶??{seconds} 燁믭펽瑥루쳦?녕‘溫ㅳ?,
  adminAlertTitle:'?깁솴鈺?뒫',
  adminAlertBody:'[{level}] ?깁솴?뷴윜?끾쐣 {count} 雅뷩?,
  eventAlert:'[{level}] ?깁솴?뷴윜??{count} 雅?,
  eventCameraLost:'?꾢깗鸚닸뼪凉竊뚧??③뇥?계퓹??,
  eventCameraBack:'?꾢깗鸚닷럴?띷뼭瓦욄렏',
  eventSimStart:'鵝볣챿與▼폀藥꿨?冶?,
  automation:'?ゅ뒯?ⓧ퐳',
  boundaryDetection:'?깁솴?뷴윜汝役?, adminNotification:'?묌곩뜳?⑶싩윥',
  warningLight:'掠뤷퉽鈺?ㅊ??, sirenToggle:'鈺?뒫鶯?,
  tuningEyebrow:'汝役뗨?營?, tuningTitle:'汝役뗨?營?,
  tuningLede:'?방뜮?겼쑛?끻넻竊뚦쑉?뚦뇧弱묋??γ띶뭽?뚥툖轢뤺퓝餓삡퐬雅뷩띴퉳?닺컘?담?,
  envPreset:'鸚⒵컮 쨌 雅?벧',
  presetAuto:'?ゅ뒯瘟껅빐', presetClear:'?썲ㄹ 쨌 ??, presetHaze:'?닷ㄹ 쨌 ??,
  presetNight:'鸚쒒뿴 쨌 ?뤸슅', presetCrowd:'雅뷴쩀',
  envPresetHelp:'?됪떓?ゅ뒯瘟껅빐?롳펽楹사퍨鴉싪눎藥길윥?뗧뵽?㏘벽佯?뭉?ㅶ뼪壤볟뎺?뜹넻??,
  tunerConfidence:'汝役뗧겣?뤷벧',
  tunerConfidenceHelp:'瘟껂퐥??빳?묊렟?닺퓶鸚꾤쉪雅븝폑瘟껈쳵?쇾툖?볠뒍役よ뒻瑥???먧볶??,
  tunerFrames:'?띶쨳簾??轝→빊',
  tunerFramesHelp:'?ゆ쐣瓦욅뺌鸚싨А?븀렟?꾤쎅?뉑뎺嶸쀤퐳雅뷩귟퓳閭ｆ삸役よ뒻訝띴폏鰲?룕鈺?뒫?꾢렅?졼?,
  tunerEscalate:'?뉒벨訝븀뇻?η쉪?띌뿴',
  tunerEscalateHelp:'倻귝옖?됦볶?ⓨ뜳?⒴뙷?잌걶?숃텈瓦뉓퓳訝ゆ뿶?댐펽鈺?뒫鴉싧뜃瀛㏛맏榮㎪γ?,
  unitSeconds:'燁?,
  diagnosticsEyebrow:'楹사퍨?뜻?, diagnosticsTitle:'楹사퍨?뜻?,
  diagnosticsLede:'?곭뺌役뗩뇧?녷옄?잌벧?뚪뵗瑥?펽?졿??섉뀬?띄내瀯잋폏?ゅ런野잒쭑??,
  mFpsLabel:'驪뤹쭜?녷옄轝→빊', mLatencyLabel:'?뺞А?녷옄?쀦뿶(ms)', mCycleLabel:'饔??訝?덄쉪?띌뿴(燁?',
  mTilesLabel:'?얍ㄷ?녷옄?녶쓼', mUptimeLabel:'瓦먫죱?띌뿴', mErrorsLabel:'?よ죱岳?쨳?꾦뵗瑥?,
  mAlertsLabel:'藥꿨룕?곮???, mPeakLabel:'?뺞А?鸚싨?役?,
  runSelfTest:'?ゆ닊汝??, runStress:'?잌벧役뗨캊',
  selfTestRunning:'閭ｅ쑉汝?β?,
  selfTestPass:'汝?ι싪퓝 ??{passed}/{total} 窈?,
  selfTestFail:'汝?εㅁ兀???{failed} 窈방쑋?싪퓝竊?passed}/{total} ?싪퓝竊?,
  stressRunning:'閭ｅ쑉瓦쏂죱?잌벧役뗨캊??,
  stressDone:'?잌벧役뗨캊若뚧닇 ??役뗨캊??젃 {objects} 訝わ펽?덂뭉?띶룧 {dedupe}ms竊뚩퇎甕?{track}ms竊뚨퍡??{render}ms竊뚦릦溫?{total}ms',
  modelPreparing:'閭ｅ쑉?녶쨭汝役뗥뒣??,
  modelRetry:'閭ｅ쑉?띷뼭訝뗨슬汝役뗥뒣??{attempt}/{max}',
  modelLoadFailed:'?졿퀡?좄슬汝役뗥뒣????瑥룡??η퐨瀯쒑퓹??,
  modelReady:'汝役뗥뇛鸚뉐갚瀯?쨌 瓦먪츞凉뺞뱨 {backend}',
  cameraPermissionHelp:'瑥루‘溫ㅵ럴?곮?鵝욜뵪?꾢깗鸚댐펽亮띄‘溫ㅷ퐨?訝?localhost ??https??,
  cameraUnsupported:'閭ㅶ탲鰲덂솳訝띷뵱?곫몖?뤷ㅄ??,
  degradedTiles:'?녷옄?섉뀬竊뚦럴弱녷붂鸚㎩늽?먨늽?쀥뇧弱묈댆 {tiles} 訝?,
  restoredTiles:'?㎬꺗?℡쨳竊뚦럴弱녷붂鸚㎩늽?먨늽?쀨컘??{tiles} 訝?,
  loopHalted:'?녷옄?곭뺌鸚김뇰竊뚦럴若됧뀲?쒏??귟??띷뼭瓦욄렏?꾢깗鸚담?,
  nightWarning:'?ㅶ뼪訝뷴쩂?댐폀?뤸슅?귚퍎?졿솹?싨몖?뤷ㅄ孃덆슻?묊렟瓦쒎쨪?꾡볶??,
  noEventsToExport:'亦→쐣??툔饔썹쉪鈺?뒫溫겼퐬??,
  noticeTitle:'?х내瀯잍삸渦끻뒰?묉렒藥ε끁竊뚥툖?썰빰?욕츎?ⓨ몮??,
  noticeText:'?깁솴鈺?뒫佯붺퍜??AI 汝役뗧퍜?쒍툗?겼쑛雅뷴몮?꾤‘溫ㅳ귟쭍窯묇퍎?ⓩ쑍溫얍쨭鸚꾤릤竊뚥툖鴉싦폖?븃?鸚뉏퉳鸚뽧?,
  backendUnloaded:'弱싨쑋?녶쨭', backendUnavailable:'訝띶룾??, unitSecondsShort:'燁?,
  licProject:'?ч」??쨌 餓삡퐬雅뷴룾?ょ뵳鵝욜뵪竊뉾IT竊?,
  licDataset:'COCO Dataset 쨌 CC BY 4.0',
  footText:'Beach Watch ???뷰틢 AI ?꾣돈譯⒴츩?뜹츎?①썞?㎯귝틦餓ｇ쟻餓?MIT 溫멨룾瑥곩뀶凉竊뚥뻣鵝뺜볶?썲룾餓θ눎?긴슴?ⓦ곦엶?밧뭽?띶늽?묆귝쑍楹사퍨??푷?⒵븨?잋볶?섊쉪藥ε끁竊뚧쑍翁ュ뭉訝띴퓷瑥곦뻣鵝뺜볶?꾢츎?ⓦ귟쭍窯묇퍎?①뵪?루쉪役뤺쭏?ⓨ냵鸚꾤릤??,
  addCamera:'竊?曆삣뒥?꾢깗鸚?, connectFirst:'瓦욄렏?꾢깗鸚?, disconnectAll:'?③깿?녜뿭',
  cameraCountLabel:'{active} / {max}',
  camSlotDevice:'?ф쑛', camSlotStream:'營묊퍥', camSlotFile:'鰲녽쥜?뉏뻑', camSlotScreen:'掠뤷퉽', camSlotSim:'鵝볣챿',
  camDefaultName:'?꾢깗鸚?{n}',
  camLimitReached:'?鸚싧룾?뚧뿶瓦욄렏 {max} ?경몖?뤷ㅄ??,
  camAdded:'藥꿩렌??{name}', camRemoved:'藥꿰㎉??{name}',
  camConnecting:'閭ｅ쑉瓦욄렏 {name}??,
  camConnected:'{name} 藥꿱퓹??쨌 {resolution}',
  camFailed:'{name} 瓦욄렏鸚김뇰 ??{reason}',
  camOfflineTag:'藥꿨뀽??,
  camFocusHint:'?밧눤?뜸퍟?꾢깗鸚닷뜵??붂鸚㎪윥?뗣?,
  camRemoveLabel:'燁삯솮瓦쇿룿?꾢깗鸚?,
  camAlertFocus:'{name} ?묊뵟鈺?뒫 ??藥꿱눎?ⓩ붂鸚?,
  noCameras:'亦→쐣藥꿱퓹?η쉪?꾢깗鸚담귟??밧눤?뚳펻 曆삣뒥?꾢깗鸚담띶?冶뗣?,
  addCameraEyebrow:'曆삣뒥?꾢깗鸚?, addCameraTitle:'曆삣뒥?꾢깗鸚?, addCameraConfirm:'曆삣뒥',
  srcDevice:'?ф쑛?꾢깗鸚?, srcStream:'營묊퍥?꾢깗鸚?, srcSim:'鵝볣챿與▼폀',
  srcDevicePick:'?됪떓?꾢깗鸚?,
  srcDeviceHelp:'USB ?꾢깗鸚담곭쵒溫경쑍?끿쉰?꾢깗鸚댐펽餓ε룋?싪퓝 OBS 嶺됭쉴餓띈쉬?η쉪?졽볶?븀뵽??꺗鴉싨샑鹽뷴쑉瓦숅뇤?귛쫩?쒎닓烏ⓧ맏令븝펽瑥룟뀍瓦욄렏訝轝▼뭉?곮?鵝욜뵪?꾢깗鸚담?,
  srcStreamUrl:'?꾢깗鸚닷쑑?', srcStreamKind:'鰲녽쥜?쇔폀',
  srcAuto:'?ゅ뒯瑥녶닽', srcVideo:'??싪쭍窯?(MP4 / WebM)',
  srcStreamHelp:'?졽볶?뷴뭽?묉렒?꾢깗鸚닻싧만鵝욜뵪役뤺쭏?ⓩ뿞力뺟쎍?ζ돀凉?꾣졏凉뤵귟?櫻ュ넍?썸뒍鰲녽쥜饔ф뜟訝?<code>HLS</code>??code>??싪쭍窯?/code> ??<code>MJPEG</code> ?꾡릎饔у쑑??귚릎饔ф쐨?▼솳?誤곩뀅溫멨쨼?②????,
  srcFile:'鰲녽쥜?뉏뻑', srcFilePick:'?됪떓鰲녽쥜?뉏뻑',
  srcFileHelp:'?됪떓岳앭춼?ⓩ쑍溫얍쨭訝딁쉪鰲녽쥜?뉏뻑竊뉾P4?갮ebM?갡OV 嶺됵펹?닸렏??붂亮뜹늽?먦귝뻼餓뜸툖鴉싦툓鴉졾댆餓삡퐬?경뼶竊뚦룵?ⓩ?役뤺쭏?ⓨ냵?볟???,
  errNeedFile:'瑥룬됪떓訝訝よ쭍窯묉뻼餓뜰?,
  errFilePlayback:'?졿퀡??붂瑥θ쭍窯묉뻼餓뜰귟?汝?ζ졏凉뤸닑?됪떓?뜸퍟?뉏뻑??,
  camFileName:'鰲녽쥜?뉏뻑',
  srcSimHelp:'?념슴亦→쐣?꾢깗鸚댐펽阿잒꺗若뚧빐掠뺟ㅊ汝役뗥뭽鈺?뒫?뉒벨瓦뉒쮮?꾣Æ?잏뵽?㏂귞뵪雅롦폇鹽븝펽掠뤷퉽訝듾폏冶뗧퍑?뉑낏訝뷰퐪謠뚧Æ凉뤵?,
  srcName:'?꾢깗鸚닷릫燁?,
  errNeedUrl:'瑥룩풏?ζ몖?뤷ㅄ?겼???,
  errBadUrl:'?겼?訝띷?簾?펽恙낂』餓?http:// ??https:// 凉鸚담?,
  errInsecure:'若됧뀲竊늜ttps竊됮〉?€뿞力뺝뒥饔?http:// ?겼??귟?弱녵릎饔у쑑??밥맏 https??,
  errHlsUnsupported:'閭ㅶ탲鰲덂솳?졿퀡?닸렏??붂瑥ζ졏凉륅펽??붂?ⓧ툔饔썰튋鸚김뇰雅녴귟?汝?η퐨瀯쒑퓹?ο펽?뽪뵻?ⓩ솹?싪쭍窯묕폀MJPEG ?쇔폀??,
  errStreamLoad:'?졿퀡?볟?鰲녽쥜?귟?汝?ε쑑??뚥릎饔ф쐨?▼솳?뜻곥?,
  errPickDevice:'瑥룬됪떓訝?경몖?뤷ㅄ??,
  siteEyebrow:'若됭즳?뷸?', siteTitle:'若됭즳?ⓧ?阿덂쑑??,
  siteLede:'訝띶릪?뷸??꾢뜳?⒵㎬뇽訝띶릪?귡됪떓映삣엹?롳펽汝役뗨?營?뭽鈺?뒫?띌뿴鴉싦?亮띈컘?담?,
  siteBeach:'役룡객役닷쑛', siteRiver:'亦녔탛 쨌 繹よ갬', siteLake:'疫뽪퀕 쨌 麗닷틩',
  sitePool:'歷멩납黎?, siteDrone:'?졽볶?븃닼??,
  siteBeachNote:'役룡뎁?뚨┿略멩탛???鸚㎫쉪?깁솴?귟?亦욘뎁瀛욜퍡?뜹뜳?⒴뙷?잞펽亮뜻뒍?띶쨳簾??轝→빊岳앮똻??2 轝▽빳訝딉펽餓ε뀓?딀뎁?김?溫ㅶ닇雅뷩귟퓩雅붷뭅?⒴쎖?뤸객閭삡벙雅뗦븙訝?쐣 42% ?묊뵟?ⓩ돈渦밤?,
  siteRiverNote:'?ζ탛??꺗?ⓨ뇿燁믣냵?듾볶?꿱뎔竊뚦썱閭ㅵ뜃瀛㏛맏榮㎪η쉪?띌뿴煐⑴윮??4 燁믡귡걞?겼섞?꿰쉪麗닻걪竊뚩??뽩뒯?삯씊?삣눣?꿰봇??8% ?꾣닆麗닸?雅▽틟?끻룕?잌쑉亦녔탛?뚧벳瘟룔?,
  siteLakeNote:'麗닻씊亮녜쓾竊뚩??θ푵弱묕펽鵝녷객曆깁い?섇쨪孃덂뜳?⒲귝뿢?뜹묾?겼컩竊뚦룾餓ζ뒍汝役뗧겣?뤷벧葉띶쒜瘟껂퐥訝雅쏉펽?뗥풓?닺퓶??,
  sitePoolNote:'雅븀┿孃쀨퓩?곭쐦壅룡씎鸚㏆펽若방삌熬ュ룕?겹귚퐜雅뷴쩀?뜹릪訝訝や볶??꺗熬ユ빊訝ㅶА竊뚩??먬쳵?띶쨳簾??轝→빊?귛뜳?⒴뙷?잒?野밧뇛麗닸런?녺븣?뽬럼麗닷뙷??,
  siteDroneNote:'餓롧㈉訝?엷鰲녷뿶雅븀쐦壅룡씎?욃만弱륅펽?졿?藥꿱컘?답맏?듿컦??젃阿잒?鵝쒍볶?귝뿞雅뷸쑛燁삣뒯?롳펽?됧콓亮뺝쓲?뉒퍡?띄쉪?뷴윜弱긷ㅁ?삥꼷阿됵펽?餓η뵽?℡ㄷ亮끻룜?뽪뿶鴉싪눎?ⓩ쉨?쒎뙷?잌닩若싥?,
  headingBeach:'役룡빼若됧뀲?묉렒', headingRiver:'亦녔탛 쨌 繹よ갬若됧뀲?묉렒',
  headingLake:'疫뽪퀕若됧뀲?묉렒', headingPool:'歷멩납黎졾츎?①썞??,
  headingDrone:'?졽볶?븃닼?띶츎?①썞??,
  motionFlag:'?꾢깗鸚당㎉?ⓧ릎 쨌 ?뷴윜?ㅵ츣?귛걶',
  motionPaused:'{name}竊싩뵽?℡ㄷ亮끻룜?뽳펽?귛걶?뷴윜?ㅵ츣',
  motionResumed:'{name}竊싩뵽?℡럴葉녑츣竊뚧걿鸚띶뙷?잌닩若?,
  mMergeLabel:'汝役뗦빊 ??雅뷸빊', mCamsLabel:'凉??쉪?꾢깗鸚?,
  docLinks:'瑥?퍏?끻?瑥룩쭅餓볟틩?뉑。 ??<b>README.md</b>竊덆뿮窯섇츣阿됀룝슴?ⓩ뼶力빧룟쉽?띉룟??묋?壤빧룩러瀛욕쎗竊?쨌 <b>TECHNICAL.md</b>竊뉯I 役곭쮮쨌葉녑츣?㎳룬챿瑥곭춺?ο펹 쨌 <b>AI_STACK.md</b>竊뉯I ????瀯녶늽?먲펹 쨌 <b>TEAM.md</b>竊덂썴?잋슴?승룟뙒?곫삜?뉑젃쨌??삜鰲꾢닕쨌驪뤷뫅?귛쪕竊?쨌 <b>DATASET_PLAN.md</b>竊덃빊??썓쨌與▼엹?배퓵溫▼닋竊?쨌 <b>RELAY.md</b>竊덄윮岳≤룬궙餓띈눎?ⓨ룕?곩??ο펹 쨌 <b>IMPACT.md</b>竊덃뙁?뉓?嶸쀤풚??펹 쨌 <b>DEMO_SCRIPT.md</b>竊덃폇鹽븃쭍窯묋꽊?э펹',
  cycleShared:'饔?탛?η쐦 {count} ?경몖?뤷ㅄ?귝캀?경몖?뤷ㅄ驪?{seconds} 燁믦˙?띷뼭?η쐦訝轝▲?,
  dedupeReport:'?덂뭉?띶룧竊싨?役?{raw} 鸚???雅뷸빊 {merged} 雅?,
  person:'雅?, distantPerson:'瓦쒎쨪?꾡볶', monitoring:'閭ｅ쑉?묉렒?깁솴?뷴윜',
  zoneEyebrow:'?깁솴?뷴윜', zoneTitle:'瀯섇댍?깁솴?뷴윜',
  zoneLede:'役ょ봇?뚨쫨歷멨뙷?잌뭉訝띷삸?당봇??b>?뤹뵪?뗦돧瓦뉏??룡떀?①뵽??/b>竊뚨쎍?η뵽?뷰퐷?녘쫨?꾣쎊瀛욍?,
  zoneModeLine:'?사봇', zoneModeLineHelp:'雅뷴쑉瀛욜쉪鸚뽨쑨竊덃객?꾡?堊㏆펹?념맏?깁솴',
  zoneModePolygon:'易귛뙷??, zoneModePolygonHelp:'雅븃퓵?ζ텂?꿨뙷?잌냵?념맏?깁솴',
  zoneEdit:'凉冶뗧퍡??, zoneEditDone:'瀯볠씇瀯섇댍',
  zoneUndo:'?ㅹ?訝訝ょ궧', zoneReset:'?℡쨳?앭쭓壤®듁',
  zoneSimplify:'?당릤瀛욘씉', zoneApplyAll:'?뜸퍟?꾢깗鸚답튋訝??,
  zonePointCount:'{n} 訝ょ궧', zoneModeTag:'{mode}',
  zoneHintEdit:'<b>?뽩뒯?삯씊?녑룾?뤸뎸瀯섆??루뵽?뷸쎊瀛?/b>?귛뜒?삥렌?졽?訝ょ궧竊뚧떀?①궧??㎉?⑨펽?뚦눤?밧뜵??닠?ㅳ?,
  zoneHintView:'?밧눤?뚦?冶뗧퍡?뜰랃펽?녑룾?닸렏?①뵽?㏘툓曆삣뒥?곭㎉?ⓩ닑?좈솮?밤?,
  zoneHintTouch:'<b>?ⓩ뎸?뉐닋瓦뉐뜵??뵽?뷸쎊瀛?/b>?귛뜒?삥렌?좂궧竊뚧떀?①궧燁삣뒯竊뚦룎?삣닠?ㅳ?,
  zoneMinPoints:'瀛욤눛弱묌?誤?2 訝ょ궧竊뚦뙷?잒눛弱묌?誤?3 訝ょ궧??,
  zoneApplied:'藥꿩뒍壤볟뎺?깁솴?뷴윜?뚧졆佯붺뵪??{n} ?경몖?뤷ㅄ??,
  zoneSimplified:'藥꿩뒍 {before} 訝ょ궧?당릤訝?{after} 訝ゃ?,
  zoneSwitched:'藥꿨늾?㏘맏??mode}?띷뼶凉뤵?,
  sliderNote:'?ゆ쐣閭ｅ? 2 訝ょ궧?꾤쎍瀛욘뎺?썰슴?③쳵佯?뭽?얏뼔譯묈쓼??,
  emptyTitle:'瑥룡렌?좄쫨?묉렒?꾣몖?뤷ㅄ',
  emptyLede:'?鸚싧룾瓦욄렏 5 ?경몖?뤷ㅄ?귝뎸渦방깹?됭?鸚뉑뿶竊뚥퐪謠뚧Æ凉뤷룾餓ε츑?닷콝鹽뷸?役뗥뭽訝됬벨鈺?뒫??,
  step1:'1. ?됪떓若됭즳?뷸?',
  step1b:'?ⓩ돈麗닸뎬?뷩곫껙役곥곫퉾力듽곫만力녔콬?곫뿞雅뷸쑛訝?됪떓竊뚧?役뗨?營?폏?뤶퉳瘟껅빐??,
  step2:'2. 瓦욄렏?꾢깗鸚?,
  step2b:'??됪떓?ф쑛?꾢깗鸚담곫뿞雅뷸쑛竊뤹썞?㎪몖?뤷ㅄ?겼?竊뚧닑鵝볣챿與▼폀??,
  step3:'3. 瀯섇댍?깁솴?뷴윜',
  step3b:'?뽩뒯?삯씊竊뚧꼬役ょ봇?뽫쫨歷멨뙷?잏뵽?뷸쎊瀛욍?,
  quickSim:'?ⓧ퐪謠뚧Æ凉뤸윥??, quickDevice:'鵝욜뵪?ф쑛?꾢깗鸚?, quickStream:'鵝욜뵪營묊퍥?꾢깗鸚?,
  contactsEyebrow:'?ζ뵸?싩윥?꾡볶', contactsTitle:'?ζ뵸?싩윥?꾡볶',
  contactsLede:'楹사퍨鴉싨뙃?깁솴葉뗥벧?묊쇉溫곁쉪兀잒뇩雅뷴룕?곲싩윥竊뚦룵?묊퍢閭ｅ쑉?쇘룺?꾡볶??,
  contactsEmpty:'弱싨쑋?삭?餓삡퐬雅뷩귞쇉溫계킓兀ｄ볶?롳펽鈺?뒫訝띴폏?ゆ샑鹽뷴쑉掠뤷퉽訝딉펽?뚥폏?닸렏?곮씨?т볶??,
  addContact:'竊??삭?兀잒뇩雅?, editContact:'岳?뵻', removeContact:'?좈솮', testContact:'瑥뺝룕??,
  contactOnDuty:'?쇘룺訝?, contactOffDuty:'孃끻뫝', contactToggle:'?뉑뜟?쇘룺?뜻?,
  contactDialogTitle:'?삭?兀잒뇩雅?, contactDialogEditTitle:'岳?뵻兀잒뇩雅?, contactSave:'岳앭춼',
  fieldName:'冶볟릫', fieldRole:'?뚩뇩 쨌 兀잒뇩?뷴윜', fieldPhone:'?뗦쑛', fieldEmail:'???',
  fieldWebhook:'?ζ뵸?싩윥?꾣쐨?▼솳?겼?竊덂룾?됵펹',
  fieldMinLevel:'餓롥벆訝瀛㎩?冶뗦렏??,
  levelAlertOnly:'鈺?몜?듾빳訝?, levelCriticalOnly:'餓끿뇻??,
  fieldWebhookHelp:'餓낂씈役뤺쭏?ⓩ뿞力뺠눎?ⓨ룕?곭윮岳→닑??뻑?귟눎?ⓨ룕?곩룵?썽싪퓝<b>?싩윥?띶뒦?ⓨ쑑?</b>若욅렟 ??櫻ュ뀯餓삡퐬?썸렏?띌싩윥?꾢쑑?竊덅눎兩뷸쐨?▼솳?갨lack?곫텋??렓?곩??η춬竊됵펽?깁솴?끻넻弱긴폏?ゅ뒯?곮씨?귛∥?숁뎸?뷴뭽????롳펽鈺?뒫囹쀥룭鴉싧눣?경떒?뤄폀??에竊뤻궙餓뜻뙃??펽?????걫楹삠?,
  errContactName:'瑥룩풏?ε쭞?띲?,
  errContactWebhook:'?띶뒦?ⓨ쑑?恙낂』餓?http:// ??https:// 凉鸚담?,
  errContactChannel:'?뗦쑛?곲궙嶸긱곫쐨?▼솳?겼?訝?눛弱묈∥?쇾?窈밤?,
  contactAdded:'藥꿰쇉溫?{name}', contactUpdated:'藥꿜엶??{name} ?꾡에??,
  contactRemoved:'藥꿨닠??{name}',
  contactDutyOn:'{name} 凉冶뗥쇘룺', contactDutyOff:'{name} 饔т맏孃끻뫝',
  notifySent:'藥꿴싩윥 {name}',
  notifyWebhookOk:'藥꿩닇?잒눎?ⓨ룕?곭퍢 {name}',
  notifyWebhookFail:'??{name} ?ゅ뒯?묌곩ㅁ兀???{reason}竊덃렏?뜻쐨?▼솳??꺗?誤곩뀅溫멨쨼?②???펹',
  notifyNoRecipients:'亦→쐣閭ｅ쑉?쇘룺?꾥킓兀ｄ볶竊뚥퍎?양ㅊ掠뤷퉽鈺?뒫',
  notifyTestSent:'藥꿨릲 {name} ?묌곫탩瑥뺡싩윥',
  toastRecipients:'?ζ뵸雅븝폏{names}',
  actionCall:'?ⓨ뤇', actionSms:'??에', actionMail:'??뻑',
  testAlertBody:'[役뗨캊] 瓦숁삸簾???싩윥?썲맔?곮씨?꾣텋??펽亮띌씆?잌츩?끻넻??,
  healthDegraded:'?섉뀬',
  simCameraName:'鵝볣챿?삯씊', simLiveStatus:'鵝볣챿與▼폀瓦쏂죱訝?,
  cameraOffline:'?꾢깗鸚닷럴?녜뿭', cameraLive:'若욄뿶?꾢깗鸚?,
  cameraConnected:'?꾢깗鸚닷럴瓦욄렏 쨌 {resolution}',
  eventSimStop:'鵝볣챿與▼폀藥꿰퍜??, stopSimulation:'?녜뿭鵝볣챿與▼폀',
  zoneDrawn:'藥꿰뵽?뷸쎊瀛???{n} 訝ょ궧',
  zoneTooManyPoints:'?鸚싧룵?썸붂營?{max} 訝ょ궧?귟??밧눤?뚧빐?녺봇?▲띸꼐嶸訝訝뗣?,
  cameraConnectFailed:'?꾢깗鸚닺퓹?εㅁ兀?,
  loopHaltedHelp:'??됧럴瓦욄렏?꾣몖?뤷ㅄ?썸깹?됧뱧佯붵귟??밧눤?뚦뀲?ⓨ뀽??띶릮?띷뼭瓦욄렏??,
  modelLoadFailedHelp:'?よ꺗訝뗨슬汝役뗥뒣?쏙펽?졿?亦→쐣凉冶뗧썞?㎯귟?汝?η퐨瀯쒑퓹?ε뭉?띷뼭瓦욄렏?꾢깗鸚담귨펷?녑쑉亦→쐣?꾢깗鸚당쉪?끻넻訝뗦윥?뗦븞?쒙펽瑥룝슴?ⓧ퐪謠뚧Æ凉뤵귨펹',
  needsAttention:'?誤곭‘溫?,
  cameraDropped:'{name} ?곭뺌鸚김뇰竊뚦럴餓롧썞?㏛릎燁삯솮?귛끀鵝숁몖?뤷ㅄ瀯㎫뺌?묉렒??,
  streamFailedHelp:'{name} 瓦욄렏鸚김뇰 ??瑥룡??ε쑑??귨펷{reason}竊?,
  enableAlerts:'?뵒 凉??싩윥', alertsEnabled:'?뵒 ?싩윥藥꿨???, alertsBlocked:'?뵓 ?싩윥熬ラ샍閭?,
  enableAlertsHelp:'凉??탲鰲덂솳?싩윥?롳펽?념슴閭ｅ쑉?뗥닽?꾤첊?ｏ펽?깁솴?끻넻阿잋폏塋뗥댗凉밧눣??,
  alertsGranted:'藥꿨???탲鰲덂솳?싩윥?귞렟?ⓨ뜵鵝욕쑉?뜸퍟囹쀥룭竊뚦뜳?⒵깄?듕튋鴉싨샑鹽뷴눣?γ?,
  alertsDenied:'役뤺쭏?ⓨ럴?삥??싩윥?귟??ⓨ쑑??뤷랩堊㎫쉪?곩숱?얏젃訝?뀅溫면싩윥??,
  controlRoom:'?묉렒與▼폀', controlRoomExit:'?녜뿭?묉렒與▼폀',
  controlRoomOn:'?묉렒與▼폀 ???꾢깗鸚닻벟譯→빐訝ゅ콓亮?, controlRoomOff:'藥꿴?븀썞?㎪Æ凉?,
  shortcutsShort:'恙ユ뜼??, shortcutsEyebrow:'恙ユ뜼??, shortcutsTitle:'??썥恙ユ뜼??,
  scCamera:'?얍ㄷ?양ㅊ瑥η폋?루쉪?꾢깗鸚?,
  scEdit:'凉冶뗰폀瀯볠씇瀯섇댍?깁솴?뷴윜',
  scFull:'?묉렒與▼폀竊덆벟譯▼콓亮뺧펹',
  scDemo:'凉冶뗰폀?녜뿭鵝볣챿與▼폀',
  scMute:'凉??폀?녜뿭鈺?뒫鶯?,
  scTest:'?ゆ닊汝??,
  scPoint:'竊덄퍡?뜸릎竊됮됪떓訝뗤?訝ょ궧',
  scNudge:'竊덄퍡?뜸릎竊됬㎉?③됦릎?꾤궧 쨌 ?됦퐦 Shift ??ㄷ亮끿㎉??,
  scHelp:'?볟?瓦쇾릉躍?뒰',
  close:'?녜뿭',
  sirenOn:'藥꿨?????ε０', sirenOff:'藥꿨뀽????ε０',
  zonePointMoved:'藥꿩뒍寧?{n} 訝ょ궧燁삣뒯?경Ø??{x}%?곭볕??{y}%',
  zonePointSelected:'藥꿴됦릎寧?{n} 訝ょ궧竊덂뀻 {total} 訝わ펹 쨌 與ゅ릲 {x}%?곭볕??{y}%',
  opsEyebrow:'瓦먫죱', opsTitle:'瓦먫죱溫양쉰',
  hoursEnabled:'餓끻쑉?묉렒?뜻??묈눣鈺?뒫',
  hoursFrom:'凉冶?, hoursTo:'瀯볠씇',
  hoursAlways:'??뎺?ⓨㄹ?썰폏?묈눣鈺?뒫??,
  hoursInside:'餓끻쑉 {from}??to} 阿뗩뿴?묈눣鈺?뒫?귞렟?ⓨ쨪雅롨??뜻??끹?,
  hoursOutside:'餓끻쑉 {from}??to} 阿뗩뿴?묈눣鈺?뒫?귞렟?ⓨ쨪雅롨??뜻?阿뗥쨼竊뚦０?녑뭽?싩윥?묌곩럴?귛걶竊덃?役뗥뭽掠뤷퉽?양ㅊ餓띶쑉瀯㎫뺌竊됥?,
  hoursMuted:'{name} ??鸚꾡틢?묉렒?뜻?阿뗥쨼竊뚦럴瓮녘퓝鶯곈윹?뚪싩윥?묌곻펷溫겼퐬餓띴폏岳앯븰竊?,
  voiceToggle:'?②??녔쐵瑥?,
  voiceAlert:'{level}??camera}竊뚦뜳?⒴뙷?잌냵 {count} 雅븝펽藥꿰퍘 {seconds} 燁믡?,
  voiceHere:'壤볟뎺?삯씊',
  snapshotToggle:'岳앯븰鈺?뒫?ч뿴?꾤뵽??,
  snapshotEyebrow:'鈺?뒫?삯씊', snapshotTitle:'鈺?뒫?ч뿴?꾤뵽??,
  snapshotAlt:'{time} 鈺?뒫?ч뿴?꾤뵽??,
  snapshotSave:'岳앭춼訝뷴쎗??,
  snapshotNote:'瓦쇿폖?삯씊?ゅ춼?ⓧ틢?ц?鸚뉎귝뿢訝띴폏熬ヤ퓷耶섓펽阿잋툖鴉싧룕?곩댆餓삡퐬?경뼶竊뚦댎?겼릮?녔텋鸚긱?,
  badgeOffline:'獵사봇',
  offlineReady:'?녶쨭若뚧닇 쨌 {n} 訝ゆ뻼餓?, offlineNotYet:'弱싨쑋?녶쨭',
  offlineUnsupported:'閭ㅶ탲鰲덂솳訝띷뵱?곭┿瀛욕춼??,
  prepareOffline:'?녶쨭訝뷸뿞營묊퍥??뵪',
  prepareOfflineHelp:'?겼쑉訝뗨슬訝轝∽펽阿뗥릮?념슴??퐨竊뚧?役뗤튋?썹뀱躍멱퓧烏뚣?,
  offlinePreparing:'閭ｅ쑉訝뗨슬??,
  offlineStored:'獵사봇?녶쨭若뚧닇 ??藥꿜퓷耶?{n} 訝ゆ뻼餓?,
  offlineFailed:'獵사봇?녶쨭鸚김뇰 ??瑥룡??η퐨瀯쒑퓹??,
  offlineUsedCache:'藥꿜퍗岳앭춼?꾢냵若밥릎?좄슬{what}竊덃뿞??붺퐨竊?,
  offlineModel:'AI 與▼엹',
  hintCloseLabel:'?녜뿭?삯씊訝딁쉪?먪ㅊ',
  hintDismissed:'藥꿨뀽??뵽?㏘툓?꾣룓鹽뷩귛릪?루쉪瑥닸삇餓띴퓷?쇿쑉訝뗦뼶?꾤퍡?뜹뜞?뉏릎??,
  hintRestore:'?띷뼭?양ㅊ?삯씊訝딁쉪?먪ㅊ',
  zoneTipDefault:'?딃폖?뉒㎉?경뙃??툓竊뚦갚鴉싧몜瑥됦퐷?꾥눎?꾡퐳?ⓦ?,
  tipEdit:'凉冶뗧퍡????溫⒳퐷??빳?닸렏?①뵽?㏘툓瀯섇댍?깁솴?뷴윜?귞퍡?띈퓝葉뗤릎?묉렒餓띶쑉瀯㎫뺌??,
  tipUndo:'?ㅹ?訝訝ょ궧 ???ゅ닠?ㅵ닖?띷렌?좂쉪?ｄ?訝ょ궧?귞뵪雅롦텋?ㅸ?鰲╊벨?잏쉪?밤귟퓹瀯?궧?삣룾?먧릉孃?욇?귝꺍?③깿歷낂솮瑥루뵪?뚧걿鸚띶닜冶뗥숱?뜰띲?,
  tipSimplify:'?당릤瀛욘씉 ??岳앮똻壤®듁訝띶룜竊뚦룵?뤷컩?밭쉪?곈뇧?귝뎸瀯섆폏雅㎫뵟?졾뛻訝ょ궧竊뚨궧鸚ゅ쩀?뜻뎸?꾣뙟?ⓧ?壅룟푽?얕컘?담귛뀍?당릤訝轝∽펽?띸퍏瘟껁?,
  tipReset:'?℡쨳?앭쭓壤®듁 ???욃댆瑥ε쑛??꾦퍡溫ㅸ씁?뚳펽鵝좂뵽?꾢냵若밥폏?③깿易덂ㅁ??,
  tipApplyAll:'?뜸퍟?꾢깗鸚답튋訝?????듿퐪?띷몖?뤷ㅄ?꾢뙷?잌렅?룟쨳?뜹댆?뜸퐰?꾢깗鸚담귛쩀?경몖?뤷ㅄ?녺쐦?뚥??뉑객?잍뿶孃덃뼶堊욍?,
  zoneSimplifyNoChange:'藥꿰퍘擁녑쩅嶸域???亦→쐣??빳?뤷컩?꾤궧??,
  nsTag:'?쀦엨?잍뙁??,
  nsLabel:'瓦쎾뀯?깁솴?뷴윜 ??兀잒뇩雅븀‘溫ㅿ펷訝?퐤?곤펹',
  nsNoData:'瓦섉깹?됧럴簾???꾥??γ귞궧?삭??η첊?ｄ릎?꾠뚦럴簾???랃펽瓦쇾릉?겼춻弱긴폏凉冶뗧눕燁??,
  nsSummary:'?瓦?{n} 轝←쉪訝?퐤?겹귚퍎?졽볶?쇔뭄?뉔?誤?{baseline} 燁믡? ?①쎅?뉑삸 {target} 燁믢빳?끹?,
  nsAckButton:'藥꿰‘溫?,
  nsAcknowledged:'兀잒뇩雅뷴럴簾?? ??餓롨퓵?ε댆簾???ⓧ틙 {seconds} 燁?,
  nsEventAck:'兀잒뇩雅뷴럴簾?? ??{seconds} 燁?,
  nsResetDone:'藥꿩툍?ㅵ뙒?곫삜?뉑젃溫겼퐬??,
  missionTag:'??삜鵝욕뫝',
  missionText:'8 ?ⓨ릮竊뚧돈譯⒴츎?ⓨ몮弱녶쑉 5 燁믦뚥툖??20 燁믣냵孃쀧윥?됦볶瓦쎾뀯?깁솴?뷴윜??,
  missionMetric:'?쀦엨?잍뙁????餓롨퓵?ε댆兀잒뇩雅븀‘溫ㅷ쉪?띌뿴竊덁릎鵝띷빊竊?1.8 燁???5 燁믢빳??,
  childMode:'?욜ゥ阿잒쫨??씈瑥녶닽',
  precisionMode:'暎양퍏與▼폀竊덅칳?ユ쎍瓦쒐쉪雅븝펹',
  precisionOn:'暎양퍏與▼폀藥꿨??????삯씊?뉐늽?당퍏竊뚦뭉窯앭쨼?싦?轝▼랩?녜븳?뤷쨳汝?귚퐥?㎬꺗溫얍쨭??꺗?섉뀬',
  precisionOff:'暎양퍏與▼폀藥꿨뀽?????℡쨳?뉐뇛瑥녶닽',
  srcYt:'YouTube 쨌 掠뤷퉽',
  srcYtUrl:'YouTube ?얏렏竊덂룾?됵펹',
  srcYtHelp:'?뷰틢若됧뀲?먨댍竊뚥퍎??벦?ζ뿞力뺝늽??YouTube ?삯씊?귛∥?ι벦?ε뭉曆삣뒥?롳펽鰲녽쥜鴉싧쑉?경젃嶺얗〉?볟?竊뚨꽫?롥쑉掠뤷퉽?긴벴囹쀥룭訝?됪떓瑥ζ젃嶺얗〉?녑룾?귚퉳?롥갚訝롦솹?싨몖?뤷ㅄ若뚦뀲訝?뤄펽??빳瀯섇댍?깁솴?뷴윜亮뜻렏?띈??γ?,
  srcYtSkip:'?숂㈉?얏렏?닸렏曆삣뒥竊뚦닕訝띷돀凉 YouTube竊뚨쎍?ε?冶뗥콓亮뺝뀻雅ワ펷阿잌룾?묋쭍?뜸퍟葉뗥틣囹쀥룭竊됥?,
  errBadYouTube:'?졿퀡瑥녶닽瑥?YouTube ?얏렏?귟?鵝욜뵪 watch?v=????youtu.be/???쇔폀',
  errScreenUnsupported:'閭ㅶ탲鰲덂솳訝띷뵱?곩콓亮뺝뀻雅ャ귟?鵝욜뵪渦껅뼭??Chrome/Edge竊뚧닑?싪퓝 https 溫욥뿮',
  screenShareCancelled:'藥꿨룚易덂콓亮뺝뀻雅ャ귛냽轝→렌?졾뜵??뇥?겼섰?뷴뀻雅ョ첊??,
  ytOpened:'藥꿨쑉?경젃嶺얗〉?볟? YouTube 鰲녽쥜 ??瑥룟쑉掠뤷퉽?긴벴囹쀥룭訝?됪떓瑥ζ젃嶺얗〉',
  camYouTubeName:'YouTube ?삯씊',
  camScreenName:'?긴벴?삯씊',
  childModeOn:'?욜ゥ鴉섇뀍藥꿨?????藥꿩붂若썲갰野멧툔?먧빳瑥녶닽?닷컦?꾥벴壤?펷?띶쨳簾??轝→빊 +1 鵝쒍맏烏ε겳竊?,
  childModeOff:'藥꿨뀽??꽴塋δ폍????弱뷴?訝뗩솏?℡쨳訝뷸닇雅뷸젃??,
  wipeData:'歷낂솮?ц?鸚뉏툓岳앭춼?꾣닊?꾡에??,
  wipeDataHelp:'兀잒뇩雅븃걫楹삥뼶凉뤵곩뜳?⒴뙷?잌뭽溫양쉰岳앭춼?ⓩ?役뤺쭏?ⓧ릎?귛쑉?х뵪?듣꼹訝듾슴?ⓨ릮瑥루궧?삥툍?ㅳ?,
  wipeConfirm:'弱녵퍗閭ㅶ탲鰲덂솳訝?툍?ㅶ??됭걫楹삥뼶凉뤷뭽溫양쉰竊뚥툝?졿퀡?℡쨳?귟쫨瀯㎫뺌?쀯폕',
  wipeDone:'藥꿩툍?ㅶ쑍溫얍쨭訝듾퓷耶섊쉪?③깿岳→겘??
};


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   W5 ?ъ슜??寃利?諛섏쁺 臾몄옄?????붾㈃ ?덈궡? ?ㅺ뎅???ㅻ? ??怨녹뿉??愿由?   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
Object.assign(I18N.ko, {
  fieldInsightsEyebrow:'?꾩옣 寃利?諛섏쁺',
  fieldInsightsTitle:'?명꽣酉곗뿉???뺤씤??臾몄젣瑜??대젃寃?蹂댁셿?⑸땲??,
  fieldInsightsLede:'?덉쟾愿由?寃쏀뿕??5紐낆쓽 ?명꽣酉곗뿉???뺤씤??媛먯떆 怨듬갚???쒗뭹???ъ슜 ?먮쫫怨??뚮┝ 諛⑹떇??諛섏쁺?덉뒿?덈떎.',
  insightGapTitle:'媛먯떆 怨듬갚',
  insightGapText:'?ㅻⅨ ?낅Т瑜??섑뻾?섎뒗 ?숈븞?먮룄 ?꾪뿕 ?곹솴???뚮━? ?뚮┝?쇰줈 ?뚮┫ ???덇쾶 ?덉뒿?덈떎.',
  insightBlindTitle:'?ш컖吏?',
  insightBlindText:'?꾩슂??遺遺꾨쭔 ?꾪뿕 援ъ뿭?쇰줈 吏?뺥빐 ?щ엺???볦튂湲??ъ슫 怨듦컙??蹂댁“?곸쑝濡?媛먯떆?⑸땲??',
  insightCountTitle:'?щ엺 ???뺤씤',
  insightCountText:'?붾㈃ ?꾩껜 ?몄썝怨??꾪뿕 援ъ뿭 ?몄썝??援щ텇??諛섎났?곸씤 ?몄썝 ?뺤씤??蹂댁“?⑸땲??',
  insightCctvTitle:'?ㅼ떆媛?CCTV 蹂댁“',
  insightCctvText:'移대찓?쇰? ?щ엺??怨꾩냽 諛붾씪蹂댁? ?딆븘???꾪뿕???붾㈃??癒쇱? ?뺤씤?????덈룄濡?援ъ꽦?덉뒿?덈떎.',
  validationStep1:'?명꽣酉?, validationStep2:'吏곸젒 ?ъ슜', validationStep3:'硫덉텛??吏??愿李?,
  validationStep4:'臾몄젣 ?섏젙', validationStep5:'?ы뀒?ㅽ듃',
  alertGuideWatch:'二쇱쓽', alertGuideWatchText:'吏꾩엯???뺤씤?섎뒗 ?④퀎 쨌 ?뚮━ ?놁쓬',
  alertGuideAlert:'寃쎄퀬', alertGuideAlertText:'1.5珥??댁긽 吏??쨌 寃쎈낫?뚭낵 ?뚮┝',
  alertGuideUrgent:'湲닿툒', alertGuideUrgentText:'?ㅼ젙 ?쒓컙 珥덇낵 쨌 諛섎났 ?ъ씠??,
  peopleAbove:'?꾪뿕 援ъ뿭 ?щ엺',
  zoneModeLine:'寃쎄퀎??, zoneModeLineHelp:'寃쎄퀎??諛붽묑(臾?履????щ엺???덉쑝硫??꾪뿕',
  zoneModePolygon:'?꾪뿕 ?곸뿭', zoneModePolygonHelp:'吏?뺥븳 ?곸뿭 ?덉뿉 ?щ엺???ㅼ뼱?ㅻ㈃ ?꾪뿕'
});

Object.assign(I18N.en, {
  fieldInsightsEyebrow:'FIELD VALIDATION',
  fieldInsightsTitle:'How interview findings shaped the interface',
  fieldInsightsLede:'Insights from five safety-management interviews were reflected in the monitoring flow and alert design.',
  insightGapTitle:'Monitoring gaps',
  insightGapText:'Alerts can be heard and received while the operator is handling another task.',
  insightBlindTitle:'Blind spots',
  insightBlindText:'Define only the areas that need attention so hard-to-see spaces can be monitored as a supplement.',
  insightCountTitle:'People count',
  insightCountText:'The interface separates total detected people from people inside the danger zone.',
  insightCctvTitle:'Real-time CCTV assistance',
  insightCctvText:'The system brings attention to risky camera views so an operator does not have to watch every feed continuously.',
  validationStep1:'Interview', validationStep2:'Hands-on use', validationStep3:'Observe where users stop',
  validationStep4:'Fix the issue', validationStep5:'Retest',
  alertGuideWatch:'WATCH', alertGuideWatchText:'Entry check 쨌 no sound',
  alertGuideAlert:'ALERT', alertGuideAlertText:'Over 1.5s 쨌 sound and notifications',
  alertGuideUrgent:'URGENT', alertGuideUrgentText:'Past the set time 쨌 repeating siren',
  peopleAbove:'People in danger zone',
  zoneModeLine:'Boundary line', zoneModeLineHelp:'Danger is outside the line, on the water side',
  zoneModePolygon:'Danger area', zoneModePolygonHelp:'Danger is inside the selected area'
});

Object.assign(I18N.zh, {
  fieldInsightsEyebrow:'?겼쑛謠뚩칮?배퓵',
  fieldInsightsTitle:'?방뜮溫욤컝?묊렟鴉섇뙑鵝욜뵪?밧폀',
  fieldInsightsLede:'?묇뺄??5 鵝띶츎?①??녺쎑?념볶?섋?瘟덁릎?묊렟?꾤썞?㎫㈉?쏙펽?띷삝?곁썞?㎪탛葉뗥뭽鈺?뒫溫얕?訝??,
  insightGapTitle:'?묉렒令븀쇋',
  insightGapText:'?념슴藥δ퐳雅뷴몮閭ｅ쑉鸚꾤릤?뜸퍟雅뗥뒦竊뚥튋??빳?싪퓝鶯곈윹?뚪싩윥孃쀧윥?깁솴?끻넻??,
  insightBlindTitle:'?꿨뙷',
  insightBlindText:'?ゆ뙁若싮?誤곩뀽力①쉪?뷴윜竊뚥맏雅뷴몮?얌빳?곭뺌?뗥댆?꾤㈉?닸룓堊쏂푷?⑴썞?㎯?,
  insightCountTitle:'雅뷸빊簾??',
  insightCountText:'?뚪씊弱녺뵽?㏘릎?꾣삡볶?겻툗?깁솴?뷴윜?끺볶?겼늽凉?양ㅊ??,
  insightCctvTitle:'若욄뿶?묉렒?꾢깗鸚닺푷??,
  insightCctvText:'楹사퍨鴉섇뀍?먪ㅊ繇롩솴渦껈쳵?꾣몖?뤷ㅄ?삯씊竊뚦뇧弱묉똻瀯?쎆???됬뵽?®쉪兀잍땯??,
  validationStep1:'溫욤컝', validationStep2:'雅꿱눎鵝욜뵪', validationStep3:'鰲귛캗?쒒×鵝띸쉰',
  validationStep4:'岳?쨳??쥦', validationStep5:'?띷А役뗨캊',
  alertGuideWatch:'力ⓩ꼷', alertGuideWatchText:'簾??瓦쎾뀯 쨌 ?졾０??,
  alertGuideAlert:'鈺?몜', alertGuideAlertText:'?곭뺌擁낁퓝 1.5 燁?쨌 鶯곈윹?뚪싩윥',
  alertGuideUrgent:'榮㎪?, alertGuideUrgentText:'擁낁퓝溫얍츣?띌뿴 쨌 ?띶쨳鈺?뒫鶯?,
  peopleAbove:'?깁솴?뷴윜?끺볶??,
  zoneModeLine:'渦밭븣瀛?, zoneModeLineHelp:'雅뷴쑉渦밭븣瀛욕쨼竊덃객?꾡?堊㏆펹?념맏?깁솴',
  zoneModePolygon:'?깁솴?뷴윜', zoneModePolygonHelp:'雅븃퓵?ζ뙁若싧뙷?잌냵?념맏?깁솴'
});


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   2. ?ㅼ젙 ?곸닔
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */

/** ?붾㈃ ?섍꼍蹂?媛먯? ?꾨━??(鍮?議곌굔).
 *  scoreScale : ?ъ슜?먭? ?뺥븳 ?좊ː???꾧퀎媛믪뿉 怨깊빐吏??諛곗닔.
 *               ?議곕룄?먯꽌??紐⑤뜽 ?먯닔 ?먯껜媛 ??븘吏誘濡??꾧퀎媛믪쓣 ??텣??
 *  minFrames  : 洹??섍꼍?먯꽌 理쒖냼濡??붽뎄?섎뒗 ?곗냽 愿痢??꾨젅????
 *  filter     : 異붾줎 吏곸쟾 canvas???곸슜?섎뒗 GPU 媛??蹂댁젙 ?꾪꽣. */
const PRESETS = {
  clear: { scoreScale: 1.00, minFrames: 2, filter: 'none',                                           i18n: 'envClear' },
  haze:  { scoreScale: 0.80, minFrames: 3, filter: 'contrast(1.35) brightness(1.06) saturate(1.15)', i18n: 'envHaze'  },
  night: { scoreScale: 0.62, minFrames: 4, filter: 'brightness(1.55) contrast(1.32) saturate(1.20)', i18n: 'envNight' },
  glare: { scoreScale: 0.92, minFrames: 3, filter: 'brightness(0.88) contrast(1.22)',                i18n: 'envGlare' },
  crowd: { scoreScale: 1.12, minFrames: 3, filter: 'none',                                           i18n: 'envCrowd' }
};

/** ?ㅼ튂 ?μ냼蹂??꾨━??(?꾪뿕???깃꺽).
 *  鍮?議곌굔 ?꾨━?뗪낵 怨깊빐??理쒖쥌 ?뚮씪誘명꽣媛 ?쒕떎.
 *  shape      : ?щ엺?쇰줈 ?몄젙??理쒖냼 ?ш린쨌醫낇슒鍮? ?쒕줎? ?곴났?먯꽌 ?대젮?ㅻ낫誘濡? *               ??곸씠 ?묎퀬 ?꾩뿉??蹂??ㅻ（?ｌ씠??媛濡쒖꽭濡쒓? 鍮꾩듂?댁쭊??
 *  escalate   : 湲닿툒 ?밴꺽 湲곕낯 ?쒓컙(珥?. 湲됰쪟????珥?留뚯뿉 ?⑹벝由щ?濡?吏㏓떎.
 *  motionAware: ?붾㈃???ш쾶 ?붾뱾由щ㈃ 寃쎄퀎???먯젙??蹂대쪟?좎? ?щ?. */
const SITE_PRESETS = {
  beach: { icon: '?룚截?, i18n: 'siteBeach', note: 'siteBeachNote', heading: 'headingBeach',
           scoreScale: 1.00, minFrames: 2, escalate: 6, motionAware: false,
           shape: { minW: 5, minH: 7, minArea: 45, aspectMax: 2.6 },
           line: [{ x: 0.12, y: 0.66 }, { x: 0.88, y: 0.66 }] },
  river: { icon: '?룥截?, i18n: 'siteRiver', note: 'siteRiverNote', heading: 'headingRiver',
           scoreScale: 0.92, minFrames: 2, escalate: 4, motionAware: false,
           shape: { minW: 5, minH: 6, minArea: 40, aspectMax: 2.8 },
           line: [{ x: 0.10, y: 0.58 }, { x: 0.90, y: 0.62 }] },
  lake:  { icon: '?쎏', i18n: 'siteLake', note: 'siteLakeNote', heading: 'headingLake',
           scoreScale: 0.90, minFrames: 2, escalate: 7, motionAware: false,
           shape: { minW: 5, minH: 6, minArea: 40, aspectMax: 2.6 },
           line: [{ x: 0.12, y: 0.60 }, { x: 0.88, y: 0.60 }] },
  pool:  { icon: '?룋', i18n: 'sitePool', note: 'sitePoolNote', heading: 'headingPool',
           scoreScale: 1.10, minFrames: 3, escalate: 5, motionAware: false,
           shape: { minW: 10, minH: 12, minArea: 160, aspectMax: 2.4 },
           line: [{ x: 0.10, y: 0.50 }, { x: 0.90, y: 0.50 }] },
  drone: { icon: '?쉧', i18n: 'siteDrone', note: 'siteDroneNote', heading: 'headingDrone',
           scoreScale: 0.85, minFrames: 3, escalate: 5, motionAware: true,
           shape: { minW: 3, minH: 3, minArea: 18, aspectMax: 3.2 },
           line: [{ x: 0.08, y: 0.50 }, { x: 0.92, y: 0.50 }] }
};

const CONFIG = {
  /* 移대찓??*/
  maxCameras: 5,
  /* 援곗쨷 ?λ㈃?먯꽌 ?쇰꺼 ?쒖떆?됱쓣 以꾩씠湲??쒖옉?섎뒗 ?몄썝 湲곗?.
     ?깆닔湲??댁닔?뺤옣泥섎읆 ?섏떗 紐낆씠 ?≫엳硫???곷쭏??遺숇뒗 ?쇰꺼???쒕줈 寃뱀퀜
     ?곸긽 ?먯껜媛 蹂댁씠吏 ?딄쾶 ?쒕떎. ?꾨옒 ?섎? ?섏쑝硫??됱긽 ??곸쓽 ?쇰꺼??     ?④린怨?crowded), ???섏쑝硫??⑥? ?쇰꺼???묎쾶 以꾩씤??dense). */
  crowdedLabelFrom: 8,
  denseLabelFrom: 20,
  /* 以묐났 蹂묓빀 ???쒕줈 ?ㅻⅨ ?뚯뒪(?꾩껜 ?꾨젅??vs ??? */
  iou: 0.28,
  containment: 0.60,          // ?뚮㈃??湲곗? ?ы븿瑜?  containmentAreaFloor: 0.18, // ?ы븿瑜좊쭔?쇰줈 蹂묓빀?????붽뎄?섎뒗 理쒖냼 硫댁쟻鍮?  crossCenterFactor: 0.45,
  crossMinOverlap: 0.12,      // 嫄곕━留뚯쑝濡?蹂묓빀?????붽뎄?섎뒗 理쒖냼 寃뱀묠(?뚮㈃??湲곗?)
  /* ??踰덉뿉 李얠븘????????곹븳. ?깆닔湲??댁닔?뺤옣? ?붾㈃???섏떗 紐낆씠 ?⑤?濡?     ?곹븳????쑝硫?'硫由??덈뒗 ?щ엺'遺???섎젮 ?섍? ?몄썝???곴쾶 ?몄뼱吏꾨떎. */
  maxDetectionsFull: 100,
  maxDetectionsTile: 50,
  crossRatioMin: 0.35, crossRatioMax: 2.8,
  /* 以묐났 蹂묓빀 ??媛숈? ?뚯뒪(紐⑤뜽?????щ엺????踰???寃쎌슦) */
  sameSourceIou: 0.55, sameSourceIos: 0.82,
  clusterPasses: 3,
  /* ???遺꾪븷 */
  tilesX: 3, tilesY: 2, overlap: 0.22,
  /* ?뺣? 紐⑤뱶 ??癒?諛붾떎???묒? ?щ엺???볦튂吏 ?딄린 ?꾪빐 ??쇱쓣 ???섍쾶 ?섎늻怨?
     醫뚯슦 諛섏쟾 ?꾨젅?꾩쓣 ??踰???蹂몃떎(TTA). ?먮┛ 湲곌린?먯꽌??吏?곗씠 ?섏뼱?섎?濡?     湲곕낯媛믪? 爰쇱쭚?닿퀬, 吏?곗씠 而ㅼ?硫?adaptWorkload 媛 ?먮룞?쇰줈 ?섎룎由곕떎. */
  precisionTilesX: 4, precisionTilesY: 3,
  precisionFlipTta: true,     // 醫뚯슦 諛섏쟾 ?꾩껜 ?꾨젅??1??異붽?
  precisionScoreRelief: 0.04, // 諛섏쟾 ?⑥뒪???먯닔 臾명꽦???대쭔????떠 ?쏀븳 愿痢〓룄 諛쏅뒗??  tileCanvasWidth: 480,
  tileEdgeSlack: 2,           // ???媛?μ옄由ъ뿉 ?대쭔???우쑝硫?'?섎┛ 愿痢??쇰줈 ?쒖떆
  /* 寃쎄퀎 援ъ뿭 ?먯젙 */
  boundaryAnchor: 0,          // 0 = 癒몃━?? 1 = 諛쒕걹. ?섎㈃ ???먯긽 湲곗??대?濡?0.
  boundaryMargin: 0.001,
  maxZonePoints: 60,          // ?먯씠 ?덈Т 留롮쑝硫??몄쭛???대졄怨??먯젙 鍮꾩슜留??섏뼱?쒕떎
  simplifyTolerance: 0.012,   // ???ㅻ벉湲?Douglas?밣eucker) ?덉슜 ?ㅼ감, ?뺢퇋??醫뚰몴 湲곗?
  freehandMinStep: 0.010,     // ?쒕옒洹몃줈 洹몃┫ ???대쭔???吏곸뿬???먯쓣 ?섎굹 李띾뒗???먮뼥由??듭젣)
  freehandTolerance: 0.005,   // 洹몃┛ 吏곹썑 ?먮룞?쇰줈 ?ㅻ벉???뺣룄. 怨≪꽑 紐⑥뼇? ?좎??쒕떎
  /* ?뚮┝ ?섏떊??*/
  maxContacts: 12,
  contactThrottleMs: 15000,   // 媛숈? ?щ엺?먭쾶 ??媛꾧꺽蹂대떎 ?먯＜ 蹂대궡吏 ?딅뒗??  /* 異붿쟻 */
  trackIou: 0.12, trackSizeMin: 0.55, trackSizeMax: 1.8,
  /* ?λ㈃ ?대룞 媛먯? */
  motionThreshold: 26,        // 0??55 ?ㅼ????됯퇏 ?덈?李?  motionSettleMs: 1500,       // ???쒓컙 ?숈븞 議곗슜?섎㈃ ?덉젙?쇰줈 蹂몃떎
  /* 猷⑦봽 */
  baseInterval: 120,
  backgroundInterval: 2000,
  maxConsecutiveErrors: 5,
  latencyDegradeMs: 420,
  latencyRestoreMs: 220,
  /* 寃쎈낫 */
  watchToAlertMs: 1500,
  alertCooldownMs: 8000,
  criticalRepeatMs: 4000,
  /* ?ъ뿰寃?*/
  reconnectBackoff: [1000, 2000, 4000, 8000],
  /* 濡쒓렇 */
  maxEvents: 200, maxLogLines: 60,
  /* 異붿쟻 ?좎삁 ?????꾨젅???볦낀?ㅺ퀬 ??곸쓣 踰꾨━硫?泥대쪟 ?쒓컙??珥덇린?붾릺??     湲닿툒 ?밴꺽???곸쁺 ?쇱뼱?섏? ?딅뒗?? ???잛닔留뚰겮? ?볦퀜??媛숈? ?щ엺?쇰줈 蹂몃떎. */
  trackGraceFrames: 3,
  riskGraceMs: 2200,
  /* ?ㅽ듃由??뺤? 媛먯떆 ??二쎌? ?곸긽??留덉?留??꾨젅?꾩쑝濡??쇱뼱遺숈? 梨?     'LIVE' 濡?蹂댁씠??寃껋씠 ???쒖뒪?쒖뿉??媛???꾪뿕???ㅽ뙣?? */
  streamStallMs: 6000,
  /* ?뚮┝ ?꾩넚 */
  webhookTimeoutMs: 5000,
  /* ?뚯꽦 ?덈궡 ??媛숈? ?곹솴????媛꾧꺽蹂대떎 ?먯＜ ?쎌? ?딅뒗??*/
  voiceRepeatMs: 9000,
  /* 寃쎈낫 ?ㅻ깄????硫붾え由ъ뿉留??⑤뒗?? 理쒓렐 紐?嫄대쭔 ?대?吏瑜??ㅺ퀬 ?덈뒗?? */
  snapshotWidth: 320,
  maxSnapshots: 12,
  /* ?대┛???곗꽑 ???뺥깭 ?섑븳??怨깊븯??諛곗닔. ?묒쓣?섎줉 ?묒? ?щ엺源뚯? 諛쏆븘?ㅼ씤?? */
  childShapeScale: 0.62,
  /* 遺곴레??吏?????몄?源뚯? 嫄몃┛ ?쒓컙(TTA) */
  northStarSamples: 50,           // 理쒓렐 ?대쭔?쇰쭔 蹂닿???以묒븰媛믪쓣 ?몃떎
  northStarTargetSeconds: 5,      // 8二?紐⑺몴: 以묒븰媛?5珥??댄븯
  /* ?ㅻ낫?쒕줈 援ъ뿭 ????린湲?(?뺢퇋??醫뚰몴) */
  nudgeStep: 0.004,
  nudgeStepBig: 0.02,
  /* ?몃? ?ㅽ겕由쏀듃 */
  tfCdns: [
    'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js',
    'https://unpkg.com/@tensorflow/tfjs@4.22.0/dist/tf.min.js'
  ],
  modelCdns: [
    'https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.2.3/dist/coco-ssd.min.js',
    'https://unpkg.com/@tensorflow-models/coco-ssd@2.2.3/dist/coco-ssd.min.js'
  ],
  hlsCdns: [
    'https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js',
    'https://unpkg.com/hls.js@1.5.17/dist/hls.min.js'
  ],
  modelRetries: 3
};

/** ?꾪뙥??紐⑤뜽???낅젰 ?곸닔. 紐⑤몢 怨듦컻 ?듦퀎?먯꽌 ?붽퀬 異쒖쿂???붾㈃ ?섎떒??紐낆떆. */
const IMPACT = {
  seaDeathsPerYear: (24 + 20) / 5,
  earlyDetectableShare: 0.71,
  socialCostPerDeath: 533790000,
  totalBeaches: 254,
  humanScanSeconds: 21.8
};


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   3. ?좏떥由ы떚
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const $ = (selector, root) => (root || document).querySelector(selector);
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const nowMs = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());

/** localStorage???ъ깮??蹂댄샇 紐⑤뱶쨌?뺤콉 李⑤떒 ?깆쑝濡??몄젣???섏쭏 ???덈떎.
 *  ????ㅽ뙣媛 媛먯떆 湲곕뒫??硫덉텛寃??댁꽌?????섎?濡??꾨? ?쇳궓?? */
const store = {
  get(key, fallback) { try { const v = localStorage.getItem(key); return v === null ? fallback : v; } catch (e) { return fallback; } },
  set(key, value)    { try { localStorage.setItem(key, String(value)); return true; } catch (e) { return false; } }
};

function formatDuration(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return String(Math.floor(total / 60)).padStart(2, '0') + ':' + String(total % 60).padStart(2, '0');
}

/** 吏???몄뼱蹂?濡쒖??셋룻몴湲?洹쒖튃????怨녹뿉 紐⑥븘 ?붾떎.
 *  ?몄뼱瑜??섎굹 ???섎┫ ??怨좎퀜?????먮━瑜??????섎굹濡?以꾩씠湲??꾪븳 寃껋씠?? */
const LOCALES = {
  ko: { locale: 'ko-KR', voice: 'ko-KR', title: 'Beach Watch 쨌 AI ?섎? ?덉쟾 愿??,
        hundredMillion: '??, tenThousand: '留?, currencyZero: '0?? },
  en: { locale: 'en-US', voice: 'en-US', title: 'Beach Watch 쨌 AI Water Safety Monitoring',
        hundredMillion: ' 횞 100M', tenThousand: 'k', currencyZero: '0 KRW' },
  zh: { locale: 'zh-CN', voice: 'zh-CN', title: 'Beach Watch 쨌 AI 麗닷윜若됧뀲?묉렒',
        hundredMillion: '雅?, tenThousand: '訝?, currencyZero: '0 ?⒴뀇' }
};

function activeLocale() { return LOCALES[state.language] || LOCALES.ko; }

function formatWon(value) {
  if (!isFinite(value) || value <= 0) return '0';
  const L = activeLocale();
  if (value >= 1e8) return (value / 1e8).toFixed(1) + L.hundredMillion;
  if (value >= 1e4) return Math.round(value / 1e4).toLocaleString() + L.tenThousand;
  return Math.round(value).toLocaleString();
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   4. ?꾩뿭 ?곹깭 쨌 移대찓??紐⑤뜽
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */

let cameraSeq = 0;

/** 移대찓????????꾩쟾???낅┰ ?곹깭.
 *  寃쎄퀎?졖룹텛?겶룰꼍蹂는룻솚寃??먯젙??紐⑤몢 移대찓?쇰퀎濡?遺꾨━?섏뼱?? *  ????먯꽌 ???ㅽ깘???ㅻⅨ ???寃쎈낫瑜??ㅼ뿼?쒗궎吏 ?딅뒗?? */
function createCamera(options) {
  const site = SITE_PRESETS[(typeof state !== 'undefined' && state) ? state.siteType : 'beach'] || SITE_PRESETS.beach;
  return Object.assign({
    id: 'cam' + (++cameraSeq),
    index: cameraSeq,
    name: '',
    kind: 'device',            // 'device' | 'stream' | 'file' | 'screen' | 'sim'
    deviceId: '',
    url: '',
    fileUrl: '',
    streamKind: 'auto',
    stream: null, hls: null, mjpeg: null,
    panel: null, video: null, canvas: null,
    online: false, error: null, simulating: false, sim: null,
    points: site.line.map(p => ({ x: p.x, y: p.y })),
    zoneMode: 'line',          // 'line'(?대━?쇱씤) | 'polygon'(?ロ엺 援ъ뿭)
    previousPeople: [], nextPersonId: 1,
    riskSince: new Map(), riskSeen: new Map(), riskCount: 0, riskTracked: 0, lastAlertCount: 0,
    /* ?뚯쟾? '?먮옒 紐⑥뼇(zoneBase) + 媛곷룄'濡?愿由ы븳?? 媛곷룄瑜??꾩쟻?댁꽌 ?뚮━硫?       諛섏삱由??ㅼ감媛 ?볦뿬 ?щ씪?대뜑瑜??섎룎?ㅻ룄 ?먮옒 紐⑥뼇?쇰줈 ?뚯븘?ㅼ? ?딅뒗?? */
    zoneBase: null, zoneAngle: 0,
    alertLevel: 'none', lastAlertAt: 0, lastCriticalAt: 0,
    scene: 'clear', sceneLastCheck: 0,
    motion: { moving: false, signature: null, lastChangeAt: 0 },
    activeTiles: { x: CONFIG.tilesX, y: CONFIG.tilesY },
    metrics: { latency: 0, latencyAvg: 0, cycle: 0, raw: 0, merged: 0, frames: 0 },
    reconnectAttempt: 0, reconnectTimer: null
  }, options || {});
}

const state = {
  language: 'ko',
  siteType: 'beach',
  cameras: [],
  focusedId: null,
  rrIndex: 0,
  model: null,
  backend: '',
  /* ?뺣? 紐⑤뱶 ????쇱쓣 ???섍쾶 ?섎늻怨?醫뚯슦 諛섏쟾 ?ш??щ? 異붽??쒕떎.
     湲곕낯媛?爰쇱쭚. ?먮┛ 湲곌린?먯꽌 耳쒕㈃ 吏?곗씠 ?섏뼱?쒕떎. */
  precision: false,
  detecting: false,
  halted: false,
  /* 留덉?留??ㅽ뙣 ?ъ쑀. 寃쎈낫媛 ?놁쓣 ???ъ씠?쒕컮??怨꾩냽 ?쒖떆?쒕떎 */
  lastError: '',
  /* ?붾㈃ ??洹몃━湲??덈궡臾몄쓣 ?ъ슜?먭? ?レ븯?붽? */
  hintDismissed: false,
  editing: false,
  drag: -1,
  freehand: null,     // ?쒕옒洹몃줈 洹몃━??以묒씤 沅ㅼ쟻
  /* 吏묎퀎 */
  alertLevel: 'none',
  metrics: { latency: 0, fps: 0, cycle: 0, realCycle: 0, frames: 0, errors: 0, alerts: 0, peak: 0,
             startedAt: 0, tiles: CONFIG.tilesX * CONFIG.tilesY, raw: 0, merged: 0 },
  scene: 'clear',
  presetMode: 'auto',
  userThreshold: 0.40,
  userFrames: 2,
  escalateSeconds: 6,
  events: [],
  contacts: [],
  audioContext: null,
  toastTimer: null
};

/** 移대찓?쇨? ?섎굹???놁쓣 ?뚮룄 寃쎄퀎???몄쭛쨌?먭? 吏꾨떒???숈옉?섎룄濡??먮뒗 ?덈퉬 媛앹껜. */
state.detached = createCamera({ id: 'cam0', name: '?? });

function focusedCamera() {
  return state.cameras.find(c => c.id === state.focusedId) || state.cameras[0] || state.detached;
}

/* 湲곗〈 肄붾뱶쨌?먭? 吏꾨떒??state.points 濡?珥덉젏 移대찓?쇱쓽 寃쎄퀎?좎쓣 ?ㅻ（?꾨줉 ?꾩엫?쒕떎. */
Object.defineProperty(state, 'points', {
  get() { return focusedCamera().points; },
  set(value) { focusedCamera().points = value; }
});

function activeCameras() {
  return state.cameras.filter(c => c.online || c.simulating);
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   5. ?ㅺ뎅???곸슜
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function tr(key, variables) {
  const table = I18N[state.language] || I18N.ko;
  let value = table[key];
  if (value === undefined) value = I18N.ko[key];
  if (value === undefined) return key;
  if (variables) {
    Object.keys(variables).forEach(name => {
      value = value.split('{' + name + '}').join(variables[name]);
    });
  }
  return value;
}

function setLabel(selector, key) {
  const element = $(selector);
  if (element) element.textContent = tr(key);
}

/** 踰꾪듉 ?댄똻???몄뼱??留욎떠 媛깆떊?쒕떎 */
function refreshButtonTips() {
  document.querySelectorAll('[data-tip-key]').forEach(el => { el.title = tr(el.dataset.tipKey); });
  const tip = document.querySelector('#zoneTip');
  if (tip && !tip.dataset.sticky) tip.textContent = tr('zoneTipDefault');
}

function applyLanguage(language, persist) {
  state.language = I18N[language] ? language : 'ko';
  document.documentElement.lang = state.language;
  document.title = activeLocale().title;

  /* ?ъ쟾 媛믪? ??먭? ?듭젣?섎뒗 ?곸닔?대?濡?HTML 議곌컖(<b>, <sup>, <code>)???덉슜?쒕떎. */
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.innerHTML = tr(element.dataset.i18n);
  });

  setLabel('#cameraSelect option:first-child', 'cameraSelect');
  setLabel('#connect', 'connectFirst');
  setLabel('#disconnect', 'disconnectAll');
  setLabel('#simulate', 'runSimulation');

  const heading = $('.heading h1');
  if (heading) heading.textContent = tr(activeSite().heading);

  renderSitePicker();
  renderCameraBar();
  renderContacts();
  refreshAllPanels();
  drawAllBoundaries();
  refreshZoneCard();
  refreshButtonTips();
  refreshStatusPanel();
  refreshBadges();
  refreshTunerLabels();
  refreshImpact();
  renderEventLog();

  const languageSelect = $('#languageSelect');
  if (languageSelect) languageSelect.value = state.language;
  if (persist !== false) store.set('beachWatchLanguage', state.language);
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   6. 吏꾨떒 濡쒓굅
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const Diagnostics = {
  lines: [],
  log(message, kind) {
    const stamp = new Date().toLocaleTimeString(activeLocale().locale, { hour12: false });
    this.lines.unshift({ stamp, message, kind: kind || 'info' });
    if (this.lines.length > CONFIG.maxLogLines) this.lines.length = CONFIG.maxLogLines;
    this.render();
    if (kind === 'error') console.error('[BeachWatch]', message);
  },
  render() {
    const box = $('#diagLog');
    if (!box) return;
    box.innerHTML = '';
    this.lines.forEach(line => {
      const p = document.createElement('p');
      p.className = line.kind;
      p.textContent = line.stamp + '  ' + line.message;
      box.append(p);
    });
  },
  countError(message) {
    state.metrics.errors += 1;
    this.log(message, 'error');
    refreshMetrics();
  }
};

window.addEventListener('error', event => {
  Diagnostics.countError('window.onerror: ' + (event.message || 'unknown'));
});
window.addEventListener('unhandledrejection', event => {
  const reason = event.reason && event.reason.message ? event.reason.message : String(event.reason);
  Diagnostics.countError('unhandledrejection: ' + reason);
});


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   7. 湲고븯 (?꾨? ?쒖닔 ?⑥닔 ???먭? 吏꾨떒?쇰줈 寃利?媛??
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */

/* ??? 寃쎄퀎 援ъ뿭 ?먯젙 ???????????????????????????????????????????????
   ?ㅼ젣 ?대????뚮룄?좉낵 吏꾩엯 ?덉쟾援ъ뿭? 吏곸꽑???꾨땲?? 洹몃옒??寃쎄퀎??   ??2媛쒖쭨由??좊텇???꾨땲????N媛쒖쭨由??꾪삎?쇰줈 ?ㅻ，??
     쨌 line    : ?대━?쇱씤. ?좊낫??諛붽묑履??꾩そ)?대㈃ ?꾪뿕.
     쨌 polygon : ?ロ엺 ?ㅺ컖?? ?대????ㅼ뼱?ㅻ㈃ ?꾪뿕.
   ???먯젙 紐⑤몢 ?쒖닔 ?⑥닔???먭? 吏꾨떒?먯꽌 吏곸젒 寃利앺븳?? */

/** ?먯젙 湲곗??? 諛뺤뒪??媛濡?以묒븰 + boundaryAnchor ?믪씠(湲곕낯 癒몃━??. */
function anchorOf(box) {
  return {
    x: (box.left + box.right) / 2,
    y: box.top + (box.bottom - box.top) * CONFIG.boundaryAnchor
  };
}

/** ?대━?쇱씤??x濡??묒뼱 洹?吏?먯쓽 寃쎄퀎 y瑜?蹂닿컙?쒕떎. 踰붿쐞瑜?踰쀬뼱?섎㈃ null. */
function polylineYAt(x, points) {
  const sorted = points.slice().sort((p, q) => p.x - q.x);
  if (sorted.length < 2) return null;
  if (x < sorted[0].x || x > sorted[sorted.length - 1].x) return null;
  for (let i = 0; i < sorted.length - 1; i++) {
    const a = sorted[i], b = sorted[i + 1];
    if (x >= a.x && x <= b.x) {
      const span = b.x - a.x;
      if (Math.abs(span) < 1e-6) return Math.min(a.y, b.y);
      return a.y + (x - a.x) * (b.y - a.y) / span;
    }
  }
  return null;
}

/** ?먯씠 ?대━?쇱씤蹂대떎 ?꾩そ(諛붾떎 履??멸?. */
function abovePolyline(x, y, points) {
  const lineY = polylineYAt(x, points);
  if (lineY === null) return false;
  return y < lineY - CONFIG.boundaryMargin;
}

/** ?먯씠 ?ㅺ컖???대??멸? ??愿묒꽑 援먯감(ray casting). ?ㅻぉ??紐⑥뼇???뺥솗??泥섎━?쒕떎. */
function pointInPolygon(x, y, points) {
  if (points.length < 3) return false;
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const xi = points[i].x, yi = points[i].y;
    const xj = points[j].x, yj = points[j].y;
    const straddles = (yi > y) !== (yj > y);
    if (!straddles) continue;
    const dy = (yj - yi) || 1e-12;
    if (x < (xj - xi) * (y - yi) / dy + xi) inside = !inside;
  }
  return inside;
}

/** 諛뺤뒪媛 ?꾪뿕 援ъ뿭???덈뒗媛. mode???곕씪 ?대━?쇱씤/?대━怨??먯젙??怨좊Ⅸ?? */
function isInDangerZone(box, points, mode) {
  const pts = points || state.points;
  if (!pts || pts.length < 2) return false;
  const a = anchorOf(box);
  if (mode === 'polygon') return pointInPolygon(a.x, a.y, pts);
  return abovePolyline(a.x, a.y, pts);
}


'use strict';
/** ?댁쟾 ?대쫫 ?좎? ????2媛쒕㈃ ?덉쟾 吏곸꽑 ?먯젙怨??꾩쟾???숈씪?섍쾶 ?숈옉?쒕떎. */
function crossesAboveLine(box, points) {
  return isInDangerZone(box, points || state.points, 'line');
}

/** ???먯쓣 ?대뒓 ?꾩튂???쇱슱吏 ?뺥븳??
 *  ?대━?쇱씤? x ?뺣젹???좎??섍퀬, ?대━怨ㅼ? 媛??媛源뚯슫 蹂 ?꾩뿉 ?쇱썙
 *  ?좎씠 瑗ъ씠吏 ?딄쾶 ?쒕떎. */
function insertIndexFor(points, point, mode) {
  if (points.length < 2) return points.length;
  if (mode !== 'polygon') {
    let index = points.length;
    for (let i = 0; i < points.length; i++) {
      if (point.x < points[i].x) { index = i; break; }
    }
    return index;
  }
  let best = 0, bestDistance = Infinity;
  for (let i = 0; i < points.length; i++) {
    const a = points[i], b = points[(i + 1) % points.length];
    const d = distanceToSegment(point, a, b);
    if (d < bestDistance) { bestDistance = d; best = i + 1; }
  }
  return best;
}

function distanceToSegment(p, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  const lengthSquared = dx * dx + dy * dy;
  if (lengthSquared < 1e-12) return Math.hypot(p.x - a.x, p.y - a.y);
  let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / lengthSquared;
  t = clamp(t, 0, 1);
  return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
}

/** Douglas?밣eucker ?⑥닚?? ?먯쑝濡?李띾떎 蹂대㈃ ?먯씠 怨쇳븯寃??섏뼱?섎뒗??
 *  紐⑥뼇??嫄곗쓽 ?좎???梨????섎쭔 以꾩뿬 ?몄쭛怨??먯젙??媛蹂띻쾶 留뚮뱺?? */
function simplifyPoints(points, tolerance) {
  if (points.length <= 2) return points.slice();
  const eps = tolerance || CONFIG.simplifyTolerance;
  const keep = new Array(points.length).fill(false);
  keep[0] = keep[points.length - 1] = true;

  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [first, last] = stack.pop();
    let maxDistance = 0, index = -1;
    for (let i = first + 1; i < last; i++) {
      const d = distanceToSegment(points[i], points[first], points[last]);
      if (d > maxDistance) { maxDistance = d; index = i; }
    }
    if (index > 0 && maxDistance > eps) {
      keep[index] = true;
      stack.push([first, index], [index, last]);
    }
  }
  return points.filter((_, i) => keep[i]);
}


'use strict';
/** 援ъ뿭???좏슚??理쒖냼 ???섎? 媛뽰톬?붿?. */
function zoneMinPoints(mode) { return mode === 'polygon' ? 3 : 2; }
function isValidZone(points, mode) { return Array.isArray(points) && points.length >= zoneMinPoints(mode); }

function boxArea(box) { return box.bbox[2] * box.bbox[3]; }

function intersectionArea(a, b) {
  const left = Math.max(a.bbox[0], b.bbox[0]);
  const top = Math.max(a.bbox[1], b.bbox[1]);
  const right = Math.min(a.bbox[0] + a.bbox[2], b.bbox[0] + b.bbox[2]);
  const bottom = Math.min(a.bbox[1] + a.bbox[3], b.bbox[1] + b.bbox[3]);
  return Math.max(0, right - left) * Math.max(0, bottom - top);
}

function intersectionOverUnion(a, b) {
  const inter = intersectionArea(a, b);
  const union = boxArea(a) + boxArea(b) - inter;
  return union > 0 ? inter / union : 0;
}

function intersectionOverSmaller(a, b) {
  const inter = intersectionArea(a, b);
  const smaller = Math.min(boxArea(a), boxArea(b));
  return smaller > 0 ? inter / smaller : 0;
}

function centerDistance(a, b) {
  const ax = a.bbox[0] + a.bbox[2] / 2, ay = a.bbox[1] + a.bbox[3] / 2;
  const bx = b.bbox[0] + b.bbox[2] / 2, by = b.bbox[1] + b.bbox[3] / 2;
  return Math.hypot(ax - bx, ay - by);
}

/** 醫뚯슦 諛섏쟾 ?꾨젅?꾩뿉???섏삩 諛뺤뒪瑜??먮낯 醫뚰몴濡??섎룎由곕떎.
 *  ?뺣? 紐⑤뱶??諛섏쟾 ?ш???TTA)?먯꽌 ?대떎. 諛섏쟾 ?붾㈃??x ???먮낯?먯꽌
 *  ?ㅻⅨ履??앸????몃?濡? ??x = ?꾩껜????(x + ?? ?대떎.
 *  y쨌?믪씠??醫뚯슦 諛섏쟾???곹뼢諛쏆? ?딅뒗?? */
function unflipBox(bbox, sourceWidth) {
  const [x, y, w, h] = bbox;
  return [sourceWidth - (x + w), y, w, h];
}

/** ?좏뒠釉?二쇱냼?먯꽌 ?곸긽 ID(11??瑜?戮묐뒗?? 紐?戮묒쑝硫?null.
 *  watch?v= 쨌 youtu.be/ 쨌 /embed/ 쨌 /live/ 쨌 /shorts/ 瑜?紐⑤몢 諛쏅뒗??
 *  ID 瑜?紐??쎌쑝硫??좏뒠釉??낅젰?쇰줈 痍④툒?섏? ?딅뒗???ㅽ깘 諛⑹?). */
function parseYouTubeId(url) {
  if (typeof url !== 'string') return null;
  let parsed;
  try { parsed = new URL(url.trim()); } catch (e) { return null; }
  const host = parsed.hostname.replace(/^www\./, '').toLowerCase();
  const valid = id => (/^[A-Za-z0-9_-]{11}$/.test(id) ? id : null);

  if (host === 'youtu.be') return valid(parsed.pathname.slice(1).split('/')[0]);
  if (host !== 'youtube.com' && host !== 'm.youtube.com' && host !== 'music.youtube.com') return null;

  const v = parsed.searchParams.get('v');
  if (v) return valid(v);
  const match = parsed.pathname.match(/^\/(embed|live|shorts|v)\/([^/?#]+)/);
  return match ? valid(match[2]) : null;
}

/** ?좏뒠釉??곸긽??????뿉????二쇱냼. ?먮룞?ъ깮??耳??먮㈃ ?붾㈃ 怨듭쑀 吏곹썑
 *  諛붾줈 遺꾩꽍???쒖옉?쒕떎. */
function youTubeWatchUrl(id) {
  return 'https://www.youtube.com/watch?v=' + id + '&autoplay=1';
}

'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   8. 以묐났 蹂묓빀 ?????щ엺????踰덈쭔 ?멸린 ?꾪븳 ?듭떖
   ??????????????????????????????????????????????????????????????????
   [?섏젙 ?대젰] ?댁쟾 踰꾩쟾? ?먯닔 ?대┝李⑥닚?쇰줈 ?묒쑝硫?"?대? ?댁븘?⑥? 諛뺤뒪?
   寃뱀튂硫?踰꾨┛????洹몃━??諛⑹떇?댁뿀?? ?ш린?먮뒗 ??媛吏 寃고븿???덉뿀??

     (1) ?꾩씠?깆씠 ?녿떎. A~B, B~C ?몃뜲 A?갅 ???ъ뒳?먯꽌 B媛 癒쇱? 踰꾨젮吏硫?         A? C媛 紐⑤몢 ?⑥븘 ???щ엺????紐낆쑝濡??몄뼱吏꾨떎. 3횞2 ???+ ?꾩껜
         ?꾨젅??援ъ“?먯꽌 ???щ엺? 理쒕? 5媛??뚯뒪???숈떆???≫엳誘濡???         ?ъ뒳???먯＜ 留뚮뱾?댁죱?? ??1紐낆씠 4紐낆쑝濡??몄뼱吏??吏곸젒 ?먯씤.
     (2) 媛숈? ?뚯뒪??愿痢≪? 臾댁“嫄?蹂묓빀?섏? ?딆븯?? 紐⑤뜽?????щ엺?먭쾶
         ?곸껜 諛뺤뒪? ?꾩떊 諛뺤뒪瑜??④퍡 ?대뒗 寃쎌슦瑜?嫄곕Ⅴ吏 紐삵뻽??

   ?닿껐: 愿痢≪쓣 洹몃옒?꾩쓽 ?뺤젏?쇰줈 蹂닿퀬 ?좊땲???뚯씤?쒕줈 ?곌껐 ?붿냼瑜?援ы빐
   ?꾩씠?깆쓣 蹂댁옣?쒕떎. 媛숈? ?뚯뒪?쇰룄 ?꾩＜ 媛뺥븯寃?寃뱀튂硫?蹂묓빀?쒕떎.
   ?????媛?μ옄由ъ뿉???섎┛ 愿痢≪쓣 ?쒖떆?? ???諛뺤뒪???⑥쟾??履쎌쓣 怨좊Ⅸ??
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */

/** ??愿痢≪씠 媛숈? ?щ엺?몄? ?먯젙?쒕떎. */
function shouldMergeObservations(a, b) {
  const iou = intersectionOverUnion(a, b);
  const ios = intersectionOverSmaller(a, b);

  if (a.source === b.source) {
    /* 媛숈? ?뚯뒪??紐⑤뜽 NMS瑜?嫄곗튇 寃곌낵?대?濡? ???щ엺?????以묐났 寃異쒕줈
       蹂????덉쓣 留뚰겮 媛뺥븯寃?寃뱀튌 ?뚮쭔 蹂묓빀?쒕떎. ?섎????????щ엺??       ?섎굹濡??⑹튂吏 ?딄린 ?꾪븳 蹂댁닔?곸씤 湲곗??대떎. */
    return iou > CONFIG.sameSourceIou || ios > CONFIG.sameSourceIos;
  }

  if (iou > CONFIG.iou) return true;

  /* ????뺣?濡?諛뺤뒪 ?ш린媛 ?ш쾶 ?щ씪吏硫?IoU媛 ??쾶 ?섏삩?? ?대븣???뚮㈃??     湲곗? ?ы븿瑜좎쓣 ?곕릺, ???щ엺 ?욎쓽 ?묒? ?꾩씠瑜??쇳궎吏 ?딅룄濡?硫댁쟻鍮?     ?섑븳???④퍡 ?붽뎄?쒕떎. */
  if (ios > CONFIG.containment) {
    const areaRatio = Math.min(boxArea(a), boxArea(b)) / Math.max(boxArea(a), boxArea(b), 1);
    if (areaRatio >= CONFIG.containmentAreaFloor) return true;
  }

  /* 留덉?留?湲곗?: 以묒떖???꾩＜ 媛源뚯슦硫?媛숈? ?щ엺?쇰줈 蹂몃떎.
     ?? 諛붾떎?먮뒗 ?щ윭 ?щ엺???섎??????덈뒗 寃쎌슦媛 留롫떎. ?쒕줈 議곌툑??寃뱀튂吏
     ?딅뒗 ??諛뺤뒪瑜?嫄곕━留?蹂닿퀬 ?⑹튂硫????щ엺????紐낆쑝濡??몄뼱吏꾨떎.
     洹몃옒??'理쒖냼???대쭔?쇱? 寃뱀튌 寃????④퍡 ?붽뎄?쒕떎. */
  if (ios < CONFIG.crossMinOverlap) return false;

  const distance = centerDistance(a, b);
  const span = Math.min(Math.max(a.bbox[2], a.bbox[3]), Math.max(b.bbox[2], b.bbox[3]));
  const widthRatio = a.bbox[2] / b.bbox[2];
  const heightRatio = a.bbox[3] / b.bbox[3];
  return distance < span * CONFIG.crossCenterFactor &&
         widthRatio > CONFIG.crossRatioMin && widthRatio < CONFIG.crossRatioMax &&
         heightRatio > CONFIG.crossRatioMin && heightRatio < CONFIG.crossRatioMax;
}

/* ?댁쟾 ?대쫫???좎????몃? API ?명솚?깆쓣 吏?⑤떎. */
const isDuplicateObservation = shouldMergeObservations;

/** ???대윭?ㅽ꽣(媛숈? ?щ엺??愿痢〓뱾)瑜????諛뺤뒪 ?섎굹濡??묐뒗?? */
function mergeCluster(members) {
  /* 蹂묓빀? ?щ윭 踰?諛섎났?????덉쑝誘濡?愿痢??섎뒗 ??뼱?곗? ?딄퀬 ?꾩쟻?쒕떎.
     (?꾩쟻?섏? ?딆쑝硫?2?뚯감 ?⑥뒪?먯꽌 5媛?愿痢≪씠 1濡??섎룎?꾧컙?? */
  const observations = members.reduce((sum, m) => sum + (m.observations || 1), 0);
  if (members.length === 1) {
    return Object.assign({}, members[0], { observations, sources: members[0].sources || [members[0].source] });
  }
  const maxScore = members.reduce((m, x) => Math.max(m, x.score), 0);
  /* 理쒓퀬 ?먯닔??85% ?댁긽??愿痢〓쭔 ????꾨낫濡??쇨퀬, 洹몄쨷 ???媛?μ옄由ъ뿉??     ?섎━吏 ?딆? 寃껋쓣 ?곗꽑?쒕떎. ?섎┛ 諛뺤뒪瑜???쒕줈 ?곕㈃ ?щ엺??諛섏そ留?     ?쒖떆?섍퀬 寃쎄퀎???먯젙???닿툔?쒕떎. */
  const strong = members.filter(m => m.score >= maxScore * 0.85);
  const intact = strong.filter(m => !m.clipped);
  const pool = intact.length ? intact : strong;
  const best = pool.reduce((a, b) => (boxArea(b) > boxArea(a) ? b : a));
  return Object.assign({}, best, {
    score: maxScore,
    observations,
    sources: Array.from(new Set(members.flatMap(m => m.sources || [m.source]))),
    clipped: best.clipped === true
  });
}

/** ?좊땲???뚯씤?쒕줈 ?곌껐 ?붿냼瑜?援ы빐 ???щ엺??諛뺤뒪 ?섎굹瑜??④릿?? */
function clusterOnce(boxes) {
  const n = boxes.length;
  if (n < 2) return boxes.map(b => mergeCluster([b]));

  const parent = new Array(n);
  for (let i = 0; i < n; i++) parent[i] = i;
  const find = x => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
  const union = (a, b) => { a = find(a); b = find(b); if (a !== b) parent[b] = a; };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (shouldMergeObservations(boxes[i], boxes[j])) union(i, j);
    }
  }

  const groups = new Map();
  for (let i = 0; i < n; i++) {
    const root = find(i);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(boxes[i]);
  }
  return Array.from(groups.values()).map(mergeCluster);
}

/** 蹂묓빀 寃곌낵?쇰━ ?ㅼ떆 寃뱀튌 ???덉쑝誘濡??덉젙???뚭퉴吏 諛섎났?쒕떎(理쒕? 3??. */
function clusterObservations(boxes) {
  let current = boxes.slice().sort((a, b) => b.score - a.score);
  for (let pass = 0; pass < CONFIG.clusterPasses; pass++) {
    const next = clusterOnce(current);
    if (next.length === current.length) return next;
    current = next;
  }
  return current;
}

/* ?댁쟾 ?대쫫 ?좎? */
const suppressDuplicates = clusterObservations;


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   9. ?뺥깭 ?꾪꽣 쨌 異붿쟻
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */

/** ?щ엺?쇰줈 ?깅┰?????덈뒗 理쒖냼 ?ш린쨌?뺥깭?몄?. ?뚮룄 ?щ쭚? ?媛??⑹옉?섍퀬 ?볥떎.
 *  ?쒕줎泥섎읆 ?곴났?먯꽌 ?대젮?ㅻ낫???ㅼ튂?먯꽌????곸씠 ?묎퀬 媛濡쒖꽭濡쒓? 鍮꾩듂?섎?濡? *  ?ㅼ튂 ?좏삎蹂?湲곗?(shape)???곸슜?쒕떎. */
function isPlausiblePerson(person, shape) {
  const s = shape || activeSite().shape;
  const w = person.bbox[2], h = person.bbox[3];
  if (w < s.minW || h < s.minH || w * h < s.minArea) return false;
  return (w / h) < s.aspectMax;
}

/** ?꾨젅??媛??숈씪 ?몃Ъ ?먯젙. ?꾨젅???ъ씠 ?대룞???덉슜?댁빞 ?섎?濡?愿??섍쾶 蹂몃떎. */
function isSameCandidate(a, b) {
  if (intersectionOverUnion(a, b) > CONFIG.trackIou) return true;
  const distance = centerDistance(a, b);
  const tolerance = Math.max(8, Math.max(a.bbox[2], a.bbox[3], b.bbox[2], b.bbox[3]) * 0.55);
  const widthRatio = a.bbox[2] / b.bbox[2];
  const heightRatio = a.bbox[3] / b.bbox[3];
  return distance < tolerance &&
         widthRatio > 0.4 && widthRatio < 2.5 &&
         heightRatio > 0.4 && heightRatio < 2.5;
}

/* ?? 援ъ뿭 ?뚯쟾 (0??60째) ?????????????????????????????????????????????
   ?ㅼ젣 ?ㅼ튂 ?꾩옣???뚮룄?졖룹닔??寃쎄퀎???섑룊???꾨땲?? 移대찓?쇰? 鍮꾩뒪?ы엳 ?щ㈃
   寃쎄퀎媛 ?몃줈??媛源앷쾶 蹂댁씠湲곕룄 ?쒕떎. 洹몃옒??湲곗슱湲곕? 짹50% 濡??쒗븳?섏? ?딄퀬
   ?꾩쟾??360째 ?뚯쟾??吏?먰븳??

   醫뚰몴媛 0?? 濡??뺢퇋?붾뤌 ?덉쑝誘濡?洹몃?濡??뚯쟾?섎㈃ ?붾㈃ 鍮꾩쑉(16:9) ?뚮Ц??   媛곷룄媛 李뚭렇?ъ쭊?? ?붾㈃ 鍮꾩쑉??怨깊빐 ?쎌? 鍮꾨? 怨듦컙?먯꽌 ?뚮┛ ???섎룎由곕떎. */

function centroidOf(points) {
  if (!points || !points.length) return { x: 0.5, y: 0.5 };
  let sx = 0, sy = 0;
  points.forEach(p => { sx += p.x; sy += p.y; });
  return { x: sx / points.length, y: sy / points.length };
}

/** @param aspect ?붾㈃??媛濡??몃줈 鍮?(?? 16/9). 媛곷룄媛 李뚭렇?ъ?吏 ?딄쾶 ?쒕떎. */
function rotatePoints(points, degrees, aspect) {
  if (!points || points.length < 2) return (points || []).map(p => ({ x: p.x, y: p.y }));
  const ratio = (typeof aspect === 'number' && aspect > 0) ? aspect : 16 / 9;
  const c = centroidOf(points);
  const rad = degrees * Math.PI / 180;
  const cos = Math.cos(rad), sin = Math.sin(rad);
  return points.map(p => {
    const px = (p.x - c.x) * ratio, py = p.y - c.y;
    return { x: c.x + (px * cos - py * sin) / ratio, y: c.y + (px * sin + py * cos) };
  });
}

/** ?뚯쟾??紐⑥뼇???붾㈃ 諛뽰쑝濡??섍?硫? 媛곷룄??洹몃?濡???梨?以묒떖 湲곗??쇰줈
 *  洹좎씪?섍쾶 以꾩뿬 ?덉쑝濡??ｋ뒗?? ?먮쭏???섎씪 ?ｌ쑝硫?媛곷룄媛 留앷?吏꾨떎. */
function fitPointsInView(points) {
  if (!points || !points.length) return [];
  const c = centroidOf(points);
  let scale = 1;
  points.forEach(p => {
    const dx = p.x - c.x, dy = p.y - c.y;
    if (dx < 0 && p.x < 0) scale = Math.min(scale, (0 - c.x) / dx);
    if (dx > 0 && p.x > 1) scale = Math.min(scale, (1 - c.x) / dx);
    if (dy < 0 && p.y < 0) scale = Math.min(scale, (0 - c.y) / dy);
    if (dy > 0 && p.y > 1) scale = Math.min(scale, (1 - c.y) / dy);
  });
  scale = clamp(scale, 0.05, 1);
  return points.map(p => ({
    x: clamp(c.x + (p.x - c.x) * scale, 0, 1),
    y: clamp(c.y + (p.y - c.y) * scale, 0, 1)
  }));
}

/** 援ъ뿭 ?꾩껜瑜??몃줈濡???릿?? 紐⑥뼇? 洹몃?濡??좎??쒕떎. */
function translatePointsToHeight(points, targetY) {
  if (!points || !points.length) return [];
  const c = centroidOf(points);
  const minY = Math.min.apply(null, points.map(p => p.y));
  const maxY = Math.max.apply(null, points.map(p => p.y));
  const delta = clamp(targetY - c.y, -minY, 1 - maxY);
  return points.map(p => ({ x: p.x, y: clamp(p.y + delta, 0, 1) }));
}

/** 媛곷룄瑜?0??59 濡??뺢퇋?뷀븳?? */
function normalizeAngle(degrees) {
  const d = Number(degrees);
  if (!isFinite(d)) return 0;
  return ((d % 360) + 360) % 360;
}

/** ?댁쟾 ?꾨젅??寃곌낵? ??묒떆耳?ID쨌?꾩쟻 愿痢??샕룻룊洹??좊ː?꽷룻겕湲??덉젙?깆쓣 怨꾩궛?쒕떎. */
function trackCandidates(candidates, previous, nextIdRef) {
  const usedPriorIds = new Set();
  return candidates.map(person => {
    const prior = previous
      .filter(old => !usedPriorIds.has(old.id) && isSameCandidate(person, old))
      .sort((x, y) => intersectionOverUnion(person, y) - intersectionOverUnion(person, x))[0];
    if (prior) usedPriorIds.add(prior.id);

    const hits = prior ? prior.hits + 1 : 1;
    const averageScore = prior ? (prior.averageScore * prior.hits + person.score) / hits : person.score;
    const id = prior ? prior.id : nextIdRef.value++;

    let sizeStable = true;
    if (prior) {
      const areaRatio = boxArea(person) / Math.max(1, boxArea(prior));
      sizeStable = areaRatio > CONFIG.trackSizeMin * CONFIG.trackSizeMin &&
                   areaRatio < CONFIG.trackSizeMax * CONFIG.trackSizeMax &&
                   prior.sizeStable !== false;
    }
    return Object.assign({}, person, { id, hits, averageScore, sizeStable, missed: 0 });
  });
}

/** ?ㅼ쓬 ?꾨젅?꾩뿉 ?섍만 異붿쟻 湲곗뼲??留뚮뱺??
 *  ?대쾲 ?꾨젅?꾩뿉 ?≫엺 ???+ '?좉퉸 ?볦튇' ????좎삁 ?잛닔 ?????④퍡 ?④릿??
 *  ?뚮룄???좉꼈???섏삤???щ엺??留ㅻ쾲 ???щ엺???섏뼱 泥대쪟 ?쒓컙??0?쇰줈
 *  ?뚯븘媛硫? ?뺤옉 湲닿툒?쇰줈 ?щ씪媛?????곹솴?먯꽌 ?밴꺽???쇱뼱?섏? ?딅뒗?? */
function carryTracks(tracked, previous, graceFrames) {
  const grace = typeof graceFrames === 'number' ? graceFrames : CONFIG.trackGraceFrames;
  const seen = new Set(tracked.map(p => p.id));
  const kept = tracked.map(p => Object.assign({}, p, { bbox: p.bbox.slice(), missed: 0 }));
  (previous || []).forEach(old => {
    if (seen.has(old.id)) return;
    const missed = (old.missed || 0) + 1;
    if (missed > grace) return;
    kept.push(Object.assign({}, old, { bbox: old.bbox.slice(), missed }));
  });
  return kept;
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   10. ?섍꼍 遺꾩꽍 쨌 ?λ㈃ ?대룞 媛먯?
   0.5珥덉뿉 ??踰?64횞36 異뺤냼 ?꾨젅?꾩쓽 ?듦퀎留?蹂몃떎. 鍮꾩슜? 臾댁떆???섏?.
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const SceneAnalyzer = {
  canvas: null, context: null,

  ensure() {
    if (this.canvas) return;
    this.canvas = document.createElement('canvas');
    this.canvas.width = 64; this.canvas.height = 36;
    this.context = this.canvas.getContext('2d', { alpha: false, willReadFrequently: true });
  },

  /** @returns {{mean:number, contrast:number, blown:number, signature:Float32Array}} 0??55 ?ㅼ???*/
  measure(source) {
    this.ensure();
    const W = this.canvas.width, H = this.canvas.height;
    this.context.drawImage(source, 0, 0, W, H);
    const data = this.context.getImageData(0, 0, W, H).data;

    let sum = 0, sumSquares = 0, blown = 0;
    const pixels = data.length / 4;
    /* 8횞6 = 48移???댁긽??吏臾? 移대찓?쇨? ?吏곸??붿? ?먯젙?섎뒗 ???대떎. */
    const cols = 8, rows = 6;
    const signature = new Float32Array(cols * rows);
    const counts = new Float32Array(cols * rows);

    for (let i = 0, p = 0; i < data.length; i += 4, p++) {
      const luma = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      sum += luma; sumSquares += luma * luma;
      if (luma > 244) blown += 1;
      const x = p % W, y = (p / W) | 0;
      const cell = ((y * rows / H) | 0) * cols + ((x * cols / W) | 0);
      signature[cell] += luma; counts[cell] += 1;
    }
    for (let c = 0; c < signature.length; c++) if (counts[c]) signature[c] /= counts[c];

    const mean = sum / pixels;
    const contrast = Math.sqrt(Math.max(0, sumSquares / pixels - mean * mean));
    return { mean, contrast, blown: blown / pixels, signature };
  },

  /** 痢≪젙媛????꾨━???대쫫. ?쒖닔 ?⑥닔???먭? 吏꾨떒?먯꽌 吏곸젒 寃利앺븳?? */
  classify(stats) {
    if (stats.mean < 62) return 'night';
    if (stats.blown > 0.14) return 'glare';
    if (stats.contrast < 30 && stats.mean > 110) return 'haze';
    return 'clear';
  },

  /** ??吏臾몄쓽 ?됯퇏 ?덈?李? 0?대㈃ ?숈씪 ?λ㈃, ?댁닔濡??ш쾶 諛붾?寃? */
  signatureDelta(a, b) {
    if (!a || !b || a.length !== b.length) return 0;
    let sum = 0;
    for (let i = 0; i < a.length; i++) sum += Math.abs(a[i] - b[i]);
    return sum / a.length;
  },

  /** 移대찓???????????섍꼍 遺꾨쪟? ?대룞 ?щ?瑜?媛깆떊?쒕떎. */
  update(camera, source) {
    const now = nowMs();
    if (now - camera.sceneLastCheck < 500) return;
    camera.sceneLastCheck = now;
    try {
      const stats = this.measure(source);

      const detected = this.classify(stats);
      if (detected !== camera.scene) {
        camera.scene = detected;
        if (camera === focusedCamera()) state.scene = detected;
        if (detected === 'night') Diagnostics.log(camera.name + ' 쨌 ' + tr('nightWarning'), 'warn');
        refreshBadges();
      }

      /* ?쒕줎泥섎읆 移대찓???먯껜媛 ?吏곸씠???ㅼ튂?먯꽌???붾㈃ 醫뚰몴 湲곗? 寃쎄퀎?좎씠
         ?λ㈃??諛붾뚮뒗 ?쒓컙 臾댁쓽誘명빐吏꾨떎. 吏臾몄씠 ?ш쾶 ?щ씪吏硫??먯젙??蹂대쪟?쒕떎. */
      if (activeSite().motionAware) {
        const delta = this.signatureDelta(camera.motion.signature, stats.signature);
        if (camera.motion.signature && delta > CONFIG.motionThreshold) {
          camera.motion.lastChangeAt = now;
          if (!camera.motion.moving) {
            camera.motion.moving = true;
            Diagnostics.log(tr('motionPaused', { name: camera.name }), 'warn');
            updatePanelMotion(camera);
          }
        } else if (camera.motion.moving && now - camera.motion.lastChangeAt > CONFIG.motionSettleMs) {
          camera.motion.moving = false;
          Diagnostics.log(tr('motionResumed', { name: camera.name }), 'ok');
          updatePanelMotion(camera);
        }
      } else if (camera.motion.moving) {
        camera.motion.moving = false;
        updatePanelMotion(camera);
      }
      camera.motion.signature = stats.signature;
    } catch (e) {
      /* CORS ?ㅻ뜑 ?녿뒗 ?ㅽ듃由쇱뿉?쒕뒗 getImageData媛 留됲엺?? 遺꾩꽍留??ш린?섍퀬
         媛먯???怨꾩냽?쒕떎. */
    }
  }
};


'use strict';
/** ?꾩옱 ?좏슚??媛먯? ?뚮씪誘명꽣. 鍮??꾨━??횞 ?ㅼ튂 ?좏삎 횞 ?ъ슜???щ씪?대뜑???⑹꽦. */
function activePreset(camera) {
  const scene = camera ? camera.scene : state.scene;
  const name = state.presetMode === 'auto' ? scene : state.presetMode;
  return PRESETS[name] || PRESETS.clear;
}

function activeSite() {
  return SITE_PRESETS[state.siteType] || SITE_PRESETS.beach;
}

/** ?대┛???곗꽑 紐⑤뱶???뚯쓽 ?뺥깭 ?섑븳.
 *
 *  ???꾩슂?쒓? ???듭닔 ?ш퀬???쇳빐?먮뒗 ?대┛??鍮꾩쨷???믪??? ?대┛?대뒗 ?대Ⅸ蹂대떎
 *  ?붾㈃?먯꽌 ?묎쾶 ?≫엺?? ?뺥깭 ?꾪꽣??理쒖냼 ?ш린媛 ?대Ⅸ 湲곗??대㈃ 硫由??덈뒗 ?꾩씠媛
 *  '?щ엺???꾨떂'?쇰줈 嫄몃윭??寃쎈낫媛 ?꾩삁 ?몃━吏 ?딅뒗?? ?닿쾬?????쒖뒪?쒖뿉?? *  媛??議곗슜?섍퀬 媛???꾪뿕???ㅽ뙣??
 *
 *  ????묒? 寃껋쓣 諛쏆븘?ㅼ씠硫??뚮룄 議곌컖???④퍡 ?ㅼ뼱?⑤떎. 洹몃옒???ш린 ?섑븳????텛?? *  留뚰겮 '?곗냽?쇰줈 紐?踰?蹂댁뿬???щ엺?쇰줈 ?몄젙?섎뒗媛'瑜???踰????붽뎄???곸뇙?쒕떎.
 *  誘쇨컧?꾧? ?꾨땲???쒓컙?쇰줈 ?ㅽ깘??嫄곕Ⅴ?????쒖뒪?쒖쓽 ?먯튃??洹몃?濡??곕Ⅸ 寃껋씠?? */
function childAwareShape(shape) {
  const scale = CONFIG.childShapeScale;
  return {
    minW: Math.max(2, Math.round(shape.minW * scale)),
    minH: Math.max(2, Math.round(shape.minH * scale)),
    minArea: Math.max(6, Math.round(shape.minArea * scale * scale)),
    /* ?꾩씠???대Ⅸ蹂대떎 媛濡쒖꽭濡?鍮꾧? ?묐떎(?ㅺ? ?묎퀬 ?듯넻?섎떎). ?꾩뿉??蹂쇱닔濡???洹몃젃?? */
    aspectMax: shape.aspectMax
  };
}

function childModeOn() {
  const box = $('#childMode');
  return !box || box.checked;      /* 湲곕낯媛믪? 耳쒖쭚 ???덉쟾 履쎌쑝濡?湲곗슫??*/
}

function activeThresholds(camera) {
  const preset = activePreset(camera);
  const site = activeSite();
  const full = clamp(state.userThreshold * preset.scoreScale * site.scoreScale, 0.08, 0.85);
  const child = childModeOn();
  return {
    fullScore: full,
    tileScore: clamp(full * 0.75, 0.06, 0.85),
    minAverageScore: clamp(full * 0.90, 0.06, 0.85),
    confirmFrames: Math.max(state.userFrames, preset.minFrames, site.minFrames) + (child ? 1 : 0),
    filter: preset.filter,
    shape: child ? childAwareShape(site.shape) : site.shape,
    childMode: child
  };
}

'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   24. ?ㅽ봽?쇱씤 ?숈옉
   ?대?쨌媛뺢?쨌??섏??먮뒗 ?덉젙?곸씤 ?명꽣?룹씠 ?녿뒗 怨녹씠 留롫떎. 洹몃윴?????쒖뒪?쒖?
   AI ?쇱씠釉뚮윭由ъ? 紐⑤뜽 媛以묒튂瑜?留ㅻ쾲 ?명꽣?룹뿉??諛쏆븘???숈옉?덈떎. 利?   "?명꽣?룹씠 ?딄린硫?媛먯떆媛 ?꾩삁 ?쒖옉?섏? ?딅뒗" 援ъ“???

   ?닿껐: 泥섏쓬 ??踰?諛쏆? ?뚯씪??釉뚮씪?곗? 罹먯떆(Cache Storage)???ｌ뼱 ?먭퀬,
   ?댄썑?먮뒗 罹먯떆?먯꽌 癒쇱? 爰쇰궦?? 紐⑤뜽 媛以묒튂??coco-ssd ?대??먯꽌 fetch 濡?   諛쏆쑝誘濡? 紐⑤뜽??遺瑜대뒗 ?숈븞留?fetch 瑜?媛먯떥 罹먯떆瑜?癒쇱? ?뺤씤?섍쾶 ?쒕떎.

   ?쒕퉬???뚯빱瑜??곗? ?딆? ?댁쑀: ?쒖텧臾쇱? index.html ?뚯씪 ?섎굹?ъ빞 ?섎뒗??   ?쒕퉬???뚯빱??蹂꾨룄 ?뚯씪???꾩슂?섍퀬, file:// ?먯꽌???깅줉議곗감 ?섏? ?딅뒗??
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const OfflineCache = {
  name: 'beach-watch-v1',
  supported: (typeof caches !== 'undefined'),
  ready: false,
  hits: 0,
  misses: 0,
  patched: false,
  originalFetch: null,

  async open() {
    if (!this.supported) return null;
    try { return await caches.open(this.name); } catch (e) { return null; }
  },

  /** 罹먯떆???덉쑝硫?洹몃?濡? ?놁쑝硫?諛쏆븘???ｊ퀬 ?뚮젮以?? */
  async fetchThrough(request) {
    const cache = await this.open();
    const key = typeof request === 'string' ? request : request.url;
    if (cache) {
      try {
        const hit = await cache.match(key);
        if (hit) { this.hits += 1; return hit.clone(); }
      } catch (e) { /* 罹먯떆 議고쉶 ?ㅽ뙣??洹몃깷 ?ㅽ듃?뚰겕濡?*/ }
    }
    const response = await this.originalFetch.call(window, request);
    this.misses += 1;
    /* 遺遺??묐떟(206)?대굹 ?ㅻ쪟??罹먯떆?섏? ?딅뒗??*/
    if (cache && response && response.ok && response.status === 200) {
      try { await cache.put(key, response.clone()); } catch (e) { /* ?⑸웾 珥덇낵 ??*/ }
    }
    return response;
  },

  /** 紐⑤뜽 濡쒕뱶 援ш컙?먯꽌留?fetch 瑜?媛먯떬?? 媛먯떆 以??뱁썒 ?꾩넚 媛숈? ?ㅻⅨ
   *  ?붿껌源뚯? 罹먯떆??嫄몃━硫????섎?濡?踰붿쐞瑜?醫곴쾶 ?좎??쒕떎. */
  patchFetch() {
    if (this.patched || !this.supported || typeof window.fetch !== 'function') return;
    this.originalFetch = window.fetch;
    const self = this;
    window.fetch = function (input, init) {
      const url = typeof input === 'string' ? input : (input && input.url) || '';
      const cacheable = /tfjs|tensorflow|coco-ssd|tfhub|storage\.googleapis\.com|\.bin(\?|$)|model\.json/i.test(url);
      if (!cacheable || (init && init.method && init.method !== 'GET')) {
        return self.originalFetch.call(window, input, init);
      }
      return self.fetchThrough(url).catch(() => self.originalFetch.call(window, input, init));
    };
    this.patched = true;
  },

  unpatchFetch() {
    if (!this.patched) return;
    window.fetch = this.originalFetch;
    this.patched = false;
  },

  /** ?몃? ?ㅽ겕由쏀듃瑜?罹먯떆?먯꽌 爰쇰궡 ?몃씪?몄쑝濡??ㅽ뻾?쒕떎.
   *  罹먯떆???놁쑝硫?false 瑜??뚮젮二쇨퀬 ?됱냼?濡??ㅽ듃?뚰겕?먯꽌 諛쏄쾶 ?쒕떎. */
  async runCachedScript(url) {
    const cache = await this.open();
    if (!cache) return false;
    try {
      const hit = await cache.match(url);
      if (!hit) return false;
      const code = await hit.text();
      const script = document.createElement('script');
      script.textContent = code;
      document.head.append(script);
      this.hits += 1;
      return true;
    } catch (e) { return false; }
  },

  /** ?ㅽ겕由쏀듃瑜?諛쏆븘 罹먯떆???ｌ뼱 ?붾떎(?ㅼ쓬 ?ㅽ뻾???꾪빐). */
  async storeScript(url) {
    const cache = await this.open();
    if (!cache) return false;
    try {
      const hit = await cache.match(url);
      if (hit) return true;
      const response = await (this.originalFetch || window.fetch).call(window, url, { mode: 'cors' });
      if (!response.ok) return false;
      await cache.put(url, response.clone());
      return true;
    } catch (e) { return false; }
  },

  async status() {
    const cache = await this.open();
    if (!cache) return { supported: false, entries: 0 };
    try {
      const keys = await cache.keys();
      return { supported: true, entries: keys.length };
    } catch (e) { return { supported: true, entries: 0 }; }
  },

  async clear() {
    if (!this.supported) return false;
    try { await caches.delete(this.name); return true; } catch (e) { return false; }
  }
};

/** ?ㅽ봽?쇱씤 以鍮??곹깭瑜?諛곗????쒖떆?쒕떎. */
async function refreshOfflineBadge() {
  const badge = $('#offlineState');
  if (!badge) return;
  if (!OfflineCache.supported) { badge.textContent = tr('offlineUnsupported'); return; }
  const info = await OfflineCache.status();
  badge.textContent = info.entries > 0
    ? tr('offlineReady', { n: info.entries })
    : tr('offlineNotYet');
}

/** ?ъ슜?먭? 吏곸젒 ?꾨Ⅴ??'?ㅽ봽?쇱씤 以鍮? ??吏湲??명꽣?룹씠 ????誘몃━ 諛쏆븘 ?붾떎. */
async function prepareOffline() {
  const button = $('#prepareOffline');
  if (!OfflineCache.supported) { Diagnostics.log(tr('offlineUnsupported'), 'warn'); return false; }
  if (button) { button.disabled = true; button.textContent = tr('offlinePreparing'); }
  OfflineCache.patchFetch();
  let okCount = 0;
  try {
    for (const url of CONFIG.tfCdns.concat(CONFIG.modelCdns)) {
      if (await OfflineCache.storeScript(url)) { okCount += 1; break; }
    }
    /* ?쇱씠釉뚮윭由щ쭔 諛쏆븘 ?먮㈃ 媛以묒튂媛 ?놁뼱 ?ㅽ봽?쇱씤?먯꽌 ?ㅽ뙣?쒕떎.
       紐⑤뜽????踰??ㅼ젣濡?遺덈윭 媛以묒튂源뚯? 罹먯떆??梨꾩슫?? */
    const modelOk = await loadModel();
    if (modelOk) okCount += 1;
  } catch (e) {
    Diagnostics.countError('offline prepare: ' + (e && e.message ? e.message : String(e)));
  }
  const info = await OfflineCache.status();
  Diagnostics.log(info.entries > 0 ? tr('offlineStored', { n: info.entries }) : tr('offlineFailed'),
                  info.entries > 0 ? 'ok' : 'warn');
  if (button) { button.disabled = false; button.textContent = tr('prepareOffline'); }
  await refreshOfflineBadge();
  return info.entries > 0;
}

'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   25. ?뚯꽦 ?덈궡
   愿?쒖슂?먯씠 ?붾㈃??怨꾩냽 蹂????덈떎??蹂댁옣? ?녿떎. ?ㅻⅨ ?쇱쓣 ?섍퀬 ?덇굅??   ?꾩옣??蹂닿퀬 ?덉쓣 ??寃쎈낫?뚮쭔?쇰줈??"?대뒓 移대찓?쇱뿉?? ?쇰쭏??湲됲븳吏"瑜?   ?????녿떎. 洹몃옒??寃쎈낫瑜?留먮줈???쎌뼱 以??
   釉뚮씪?곗? ?댁옣 ?뚯꽦 ?⑹꽦留??ъ슜?섎?濡?異붽? 鍮꾩슜?? ?몃? ?꾩넚???녿떎.
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const Speaker = {
  supported: (typeof speechSynthesis !== 'undefined' && typeof SpeechSynthesisUtterance !== 'undefined'),
  lastSpokenAt: 0,
  lastKey: '',

  enabled() {
    const box = $('#voiceEnabled');
    return this.supported && box && box.checked;
  },

  /** 媛숈? 留먯쓣 紐?珥?媛꾧꺽?쇰줈 諛섎났?섏? ?딅뒗?? ?ㅻ쭔 ?깃툒??諛붾뚮㈃ 利됱떆 留먰븳?? */
  shouldSpeak(key, now) {
    if (key !== this.lastKey) return true;
    return now - this.lastSpokenAt >= CONFIG.voiceRepeatMs;
  },

  speak(text, key) {
    if (!this.enabled() || !text) return false;
    const now = Date.now();
    if (!this.shouldSpeak(key || text, now)) return false;
    try {
      /* ?댁쟾 ?덈궡媛 諛???덉쑝硫?踰꾨━怨?理쒖떊 ?곹솴留??쎈뒗??
         寃쎈낫???볦뿬????쾶 ?섏삤硫??섎?媛 ?녿떎. */
      speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = activeLocale().voice;
      utter.rate = 1.05;
      utter.volume = 1;
      speechSynthesis.speak(utter);
      this.lastSpokenAt = now;
      this.lastKey = key || text;
      return true;
    } catch (e) { return false; }
  },

  stop() { try { speechSynthesis.cancel(); } catch (e) {} }
};

/** 寃쎈낫 ??嫄댁쓣 ?щ엺???ｊ린 醫뗭? ??臾몄옣?쇰줈 留뚮뱺?? */
function buildVoiceMessage(camera, level, count, dwellSeconds) {
  const where = camera && camera.name ? camera.name : tr('voiceHere');
  const levelWord = tr(level === 'critical' ? 'levelCritical' : 'levelAlert');
  return tr('voiceAlert', {
    level: levelWord,
    camera: where,
    count: count,
    seconds: Math.max(0, Math.round(dwellSeconds || 0))
  });
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   26. 寃쎈낫 ?쒓컙 ?ㅻ깄??   "洹몃븣 吏꾩쭨 ?щ엺?댁뿀?? ?뚮룄???瑜??섏쨷???뺤씤??諛⑸쾿???놁뿀??
   寃쎈낫媛 ???쒓컙???붾㈃???묎쾶 ?섎씪 寃쎈낫 湲곕줉??遺숈씤??

   媛쒖씤?뺣낫: ???대?吏??硫붾え由ъ뿉留??덇퀬 ??Β룹쟾?〓릺吏 ?딅뒗?? ?덈줈怨좎묠?섎㈃
   ?щ씪吏硫? ?뱁썒?쇰줈??蹂대궡吏 ?딅뒗???뱁썒 蹂몃Ц? ?ъ쟾???띿뒪?몃퓧?대떎).
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const snapshotCanvas = document.createElement('canvas');

function captureSnapshot(camera) {
  if (!camera) return '';
  const toggle = $('#snapshotEnabled');
  if (toggle && !toggle.checked) return '';
  try {
    const source = sourceOf(camera);
    if (!source.width || !source.height) return '';
    const width = CONFIG.snapshotWidth;
    snapshotCanvas.width = width;
    snapshotCanvas.height = Math.round(width * source.height / source.width);
    const context = snapshotCanvas.getContext('2d', { alpha: false });
    context.drawImage(source.element, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
    return snapshotCanvas.toDataURL('image/jpeg', 0.6);
  } catch (e) {
    /* ?ㅻⅨ 異쒖쿂???곸긽? 罹붾쾭?ㅺ? ?ㅼ뿼??罹≪쿂?????녿떎(釉뚮씪?곗? 蹂댁븞).
       媛먯떆 ?먯껜?먮뒗 ?곹뼢???놁쑝誘濡?議곗슜???섏뼱媛꾨떎. */
    return '';
  }
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   27. 媛먯떆 ?쒓컙?
   ?쇨컙?먮뒗 ?ㅽ깘???섏뼱?쒕떎(AI_STACK.md 6??. ?댁닔?뺤옣? 媛쒖옣 ?쒓컙??   ?뺥빐???덉쑝誘濡? 洹??쒓컙?먮쭔 寃쎈낫瑜??몃━寃??섎㈃ 寃쎈낫 ?쇰줈瑜??ш쾶 以꾩씪 ???덈떎.
   媛먯? ?먯껜??怨꾩냽 ?뚯븘媛怨??붾㈃?먮룄 ?쒖떆?쒕떎 ???ㅻ쭔 ?뚮━? 諛쒖넚留?硫덉텣??
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function parseHhMm(text) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(String(text || '').trim());
  if (!m) return null;
  const h = Number(m[1]), mi = Number(m[2]);
  if (h < 0 || h > 23 || mi < 0 || mi > 59) return null;
  return h * 60 + mi;
}

/** 吏湲덉씠 媛먯떆 ?쒓컙? ?덉씤媛.
 *  22:00~06:00 泥섎읆 ?먯젙???섍린??援ш컙??吏?먰븳?? */
function withinWatchHours(minutesNow, fromText, toText) {
  const from = parseHhMm(fromText), to = parseHhMm(toText);
  if (from === null || to === null || from === to) return true;   /* ?ㅼ젙???놁쑝硫???긽 媛먯떆 */
  return from < to
    ? (minutesNow >= from && minutesNow < to)
    : (minutesNow >= from || minutesNow < to);   /* ?먯젙 ?섍? */
}

function watchHoursActive(date) {
  const toggle = $('#hoursEnabled');
  if (!toggle || !toggle.checked) return true;
  const now = date || new Date();
  return withinWatchHours(now.getHours() * 60 + now.getMinutes(), $('#hoursFrom').value, $('#hoursTo').value);
}

function refreshWatchHours() {
  const on = $('#hoursEnabled') && $('#hoursEnabled').checked;
  const row = $('#hoursRow');
  if (row) row.classList.toggle('on', !!on);
  const note = $('#hoursNote');
  if (note) {
    note.textContent = !on ? tr('hoursAlways')
      : (watchHoursActive() ? tr('hoursInside', { from: $('#hoursFrom').value, to: $('#hoursTo').value })
                            : tr('hoursOutside', { from: $('#hoursFrom').value, to: $('#hoursTo').value }));
    note.classList.toggle('muted-now', on && !watchHoursActive());
  }
  store.set('beachWatchHours', JSON.stringify({
    on: !!on, from: $('#hoursFrom') ? $('#hoursFrom').value : '',
    to: $('#hoursTo') ? $('#hoursTo').value : ''
  }));
}

function restoreWatchHours() {
  try {
    const saved = JSON.parse(store.get('beachWatchHours', 'null'));
    if (!saved) return;
    if ($('#hoursEnabled')) $('#hoursEnabled').checked = !!saved.on;
    if (saved.from && parseHhMm(saved.from) !== null) $('#hoursFrom').value = saved.from;
    if (saved.to && parseHhMm(saved.to) !== null) $('#hoursTo').value = saved.to;
  } catch (e) { /* ?먯긽??媛믪? 臾댁떆 */ }
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   28. ?꾩껜?붾㈃ 愿??紐⑤뱶
   ?ㅼ젣 愿?쒖떎?먯꽌???ㅻ챸 移대뱶媛 ?꾨땲??移대찓???붾㈃??而ㅼ빞 ?쒕떎.
   ?ъ씠?쒕컮? ?ㅻ챸???묎퀬 移대찓??寃⑹옄留??붾㈃ 媛??梨꾩슫??
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function toggleControlRoom(force) {
  const on = typeof force === 'boolean' ? force : !document.body.classList.contains('control-room');
  document.body.classList.toggle('control-room', on);
  const button = $('#controlRoom');
  if (button) {
    button.setAttribute('aria-pressed', String(on));
    button.textContent = tr(on ? 'controlRoomExit' : 'controlRoom');
  }
  try {
    if (on && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {});
    else if (!on && document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {});
  } catch (e) { /* ?꾩껜?붾㈃??留됰뒗 ?섍꼍?먯꽌???덉씠?꾩썐 ?꾪솚? 洹몃?濡??숈옉?쒕떎 */ }
  /* ?⑤꼸 ?ш린媛 諛붾뚯뿀?쇰?濡?醫뚰몴怨꾨? ?ㅼ떆 洹몃┛??*/
  requestAnimationFrame(() => { drawAllBoundaries(); refreshAllPanels(); });
  Diagnostics.log(tr(on ? 'controlRoomOn' : 'controlRoomOff'), 'info');
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   29. ?ㅻ낫???⑥텞??쨌 ?ㅻ낫?쒕줈 援ъ뿭 ?몄쭛
   留덉슦?ㅻ? ?????녿뒗 ?곹솴(?κ컩, ?몃옓?⑤뱶 ?녿뒗 愿??PC)怨??묎렐?깆쓣 ?꾪빐
   ?붿궡?쒗궎濡?寃쎄퀎 援ъ뿭???먯쓣 ??만 ???덇쾶 ?쒕떎.
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
let keyboardPointIndex = 0;

function nudgeZonePoint(dx, dy, big) {
  const camera = focusedCamera();
  if (!camera || !camera.points.length) return false;
  keyboardPointIndex = ((keyboardPointIndex % camera.points.length) + camera.points.length) % camera.points.length;
  const step = (big ? CONFIG.nudgeStepBig : CONFIG.nudgeStep);
  const point = camera.points[keyboardPointIndex];
  point.x = clamp(point.x + dx * step, 0, 1);
  point.y = clamp(point.y + dy * step, 0, 1);
  resetZoneBase(camera);
  drawBoundary(camera);
  syncMobileLineControls();
  persistBoundaries();
  announce(tr('zonePointMoved', {
    n: keyboardPointIndex + 1,
    x: Math.round(point.x * 100),
    y: Math.round(point.y * 100)
  }));
  return true;
}

function selectNextZonePoint(delta) {
  const camera = focusedCamera();
  if (!camera || !camera.points.length) return;
  keyboardPointIndex = ((keyboardPointIndex + delta) % camera.points.length + camera.points.length) % camera.points.length;
  const point = camera.points[keyboardPointIndex];
  Array.from(camera.overlay.querySelectorAll('.handle')).forEach((el, i) =>
    el.classList.toggle('selected', i === keyboardPointIndex));
  announce(tr('zonePointSelected', {
    n: keyboardPointIndex + 1, total: camera.points.length,
    x: Math.round(point.x * 100), y: Math.round(point.y * 100)
  }));
}

/** ?낅젰 以묒씤 移몄뿉?쒕뒗 ?⑥텞?ㅺ? ?숈옉?섎㈃ ???쒕떎. */
function typingInField(target) {
  if (!target) return false;
  const tag = (target.tagName || '').toLowerCase();
  return tag === 'input' || tag === 'select' || tag === 'textarea' || target.isContentEditable;
}

function handleShortcut(event) {
  if (typingInField(event.target) || event.metaKey || event.ctrlKey || event.altKey) return;

  /* ?몄쭛 以묒씪 ?뚮뒗 ?붿궡?쒗궎濡??먯쓣 ??릿??*/
  if (state.editing && event.key.indexOf('Arrow') === 0) {
    const map = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
    const [dx, dy] = map[event.key];
    if (nudgeZonePoint(dx, dy, event.shiftKey)) event.preventDefault();
    return;
  }
  if (state.editing && (event.key === 'Tab')) {
    selectNextZonePoint(event.shiftKey ? -1 : 1);
    event.preventDefault();
    return;
  }

  const key = event.key.toLowerCase();
  if (key >= '1' && key <= '5') {
    const camera = state.cameras[Number(key) - 1];
    if (camera) { focusCamera(camera.id); event.preventDefault(); }
    return;
  }
  if (key === 'e') { $('#editLine').click(); event.preventDefault(); }
  else if (key === 'f') { toggleControlRoom(); event.preventDefault(); }
  else if (key === 'd') { $('#simulate').click(); event.preventDefault(); }
  else if (key === 't') { $('#runSelfTest').click(); event.preventDefault(); }
  else if (key === 'm') { const s = $('#sirenEnabled'); if (s) { s.checked = !s.checked; announce(tr(s.checked ? 'sirenOn' : 'sirenOff')); } event.preventDefault(); }
  else if (key === '?' || (key === '/' && event.shiftKey)) { $('#shortcutDialog').showModal(); event.preventDefault(); }
  else if (key === 'escape' && document.body.classList.contains('control-room')) { toggleControlRoom(false); }
}

/** ?ㅽ겕由곕━?붿뿉 ?곹솴???뚮┛?? ?붾㈃ ?쒖떆? 蹂꾧컻濡??뚮━濡쒕룄 ?꾨떖?섏뼱???쒕떎. */
function announce(text) {
  const region = $('#liveRegion');
  if (region) region.textContent = text;
}

/** 寃쎈낫 ?ㅻ깄?룹쓣 ?ш쾶 蹂몃떎. ?ㅽ깘 ?먮퀎? ?묒? ?몃꽕?쇰줈???대졄?? */
function openSnapshot(entry) {
  const dialog = $('#snapshotDialog');
  if (!dialog || !entry || !entry.snapshot) return;
  $('#snapshotImage').src = entry.snapshot;
  $('#snapshotImage').alt = tr('snapshotAlt', { time: entry.label });
  $('#snapshotCaption').textContent = entry.label + ' 쨌 ' + entry.message;
  const save = $('#snapshotSave');
  if (save) save.onclick = () => {
    const link = document.createElement('a');
    link.href = entry.snapshot;
    link.download = 'beach-watch-' + String(entry.at || '').slice(0, 19).replace(/[:T]/g, '-') + '.jpg';
    document.body.append(link); link.click(); link.remove();
  };
  try { dialog.showModal(); } catch (e) { /* dialog 誘몄???釉뚮씪?곗? */ }
}

'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   30. 遺곴레??吏?????몄?源뚯? 嫄몃┛ ?쒓컙 (Time to Awareness, TTA)

   ?????8二??숈븞 ?섎굹???レ옄濡?異붿쟻?섎뒗 媛믪씠??

     "?щ엺???꾪뿕 援ъ뿭???ㅼ뼱媛??쒓컙遺??      ?대떦?먭? 洹??ъ떎???ㅼ젣濡??뺤씤???뚭퉴吏 嫄몃┛ ?쒓컙(珥???以묒븰媛?

   ?????レ옄?멸?
     - 臾몄젣 ?뺤쓽? ?뺥솗??媛숈? 異뺤씠?? ?덈젴???덉쟾?붿썝議곗감 ??援ъ뿭???ㅼ떆 蹂닿린源뚯?
       ?됯퇏 19.2??4.4珥덇? 嫄몃┛???곌뎄 [3]). ?곕━媛 以꾩씠?ㅻ뒗 寃껋씠 諛붾줈 ??怨듬갚?대떎.
     - 媛먯? ?뺥솗?꽷룰꼍蹂??꾨떖쨌?붾㈃ ?ㅺ퀎媛 紐⑤몢 ???섎굹???レ옄瑜??吏곸씤??
       ?대뒓 ?섎굹留?醫뗭븘?몃룄 ?レ옄媛 醫뗭븘吏吏 ?딅뒗?ㅻ뒗 ?먯씠 以묒슂?섎떎.
     - ?쒗뭹???ㅼ뒪濡?痢≪젙?쒕떎. 諛쒗몴 ?먮즺??二쇱옣???꾨땲??怨꾩륫媛믪씠??

   痢≪젙 諛⑸쾿
     吏꾩엯 ?쒓컖  : riskSince ??洹??щ엺??泥섏쓬 湲곕줉???쒓컙
     ?뺤씤 ?쒓컖  : ?대떦?먭? 寃쎈낫 李쎌쓽 '?뺤씤?덉뒿?덈떎'瑜??꾨Ⅸ ?쒓컙
     TTA        : ?뺤씤 ?쒓컖 ??吏꾩엯 ?쒓컖

   以묒븰媛믪쓣 ?곕뒗 ?댁쑀: ??嫄댁쓽 ?덉쇅?곸쑝濡???? ?뺤씤???됯퇏???듭㎏濡??붾뱾湲??뚮Ц?대떎.
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const NorthStar = {
  /* ?꾩쭅 ?뺤씤?섏? ?딆? 寃쎈낫????移대찓?쇰퀎濡?'吏꾩엯 ?쒓컖'???ㅺ퀬 ?덈뒗??*/
  pending: new Map(),
  /* ?뺤씤源뚯? 嫄몃┛ ?쒓컙(珥? 湲곕줉. 理쒓렐 寃껊????좎??쒕떎. */
  samples: [],

  /** 寃쎈낫媛 ?대떎. ?꾩쭅 ?꾨Т???뺤씤?섏? ?딆븯?? */
  open(camera, enteredAt) {
    if (!camera) return;
    if (!this.pending.has(camera.id)) {
      this.pending.set(camera.id, enteredAt || Date.now());
    }
  },

  /** ?대떦?먭? ?뺤씤?덈떎. 吏꾩엯 ?쒓컖遺??吏湲덇퉴吏媛 ?대쾲 嫄댁쓽 TTA ?? */
  acknowledge(now) {
    const at = now || Date.now();
    if (!this.pending.size) return null;
    let earliest = Infinity;
    this.pending.forEach(enteredAt => { earliest = Math.min(earliest, enteredAt); });
    this.pending.clear();
    if (!isFinite(earliest)) return null;
    const seconds = Math.max(0, (at - earliest) / 1000);
    this.samples.unshift(seconds);
    if (this.samples.length > CONFIG.northStarSamples) this.samples.length = CONFIG.northStarSamples;
    this.save();
    return seconds;
  },

  /** ?곹솴???댁냼?섏뼱 ?꾨Т???꾪뿕 援ъ뿭???녿떎 ???뺤씤 ?湲곕룄 吏?대떎. */
  clear(camera) {
    if (camera) this.pending.delete(camera.id);
    else this.pending.clear();
  },

  median() {
    if (!this.samples.length) return null;
    const sorted = this.samples.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  },

  count() { return this.samples.length; },
  waiting() { return this.pending.size > 0; },

  save() {
    store.set('beachWatchNorthStar', JSON.stringify(this.samples.slice(0, CONFIG.northStarSamples)));
  },

  restore() {
    try {
      const saved = JSON.parse(store.get('beachWatchNorthStar', '[]'));
      if (Array.isArray(saved)) {
        this.samples = saved.filter(n => typeof n === 'number' && isFinite(n) && n >= 0)
                            .slice(0, CONFIG.northStarSamples);
      }
    } catch (e) { /* ?먯긽??媛믪? 踰꾨┛??*/ }
  },

  reset() {
    this.samples = [];
    this.pending.clear();
    this.save();
  }
};

/** ?ъ씠?쒕컮쨌?쒖뒪???곹깭??遺곴레??吏?쒕? ?쒖떆?쒕떎. */
function refreshNorthStar() {
  const value = $('#mNorthStar');
  if (!value) return;
  const median = NorthStar.median();
  value.textContent = median === null ? '?? : median.toFixed(1) + tr('unitSecondsShort');

  const note = $('#northStarNote');
  if (note) {
    note.textContent = median === null
      ? tr('nsNoData')
      : tr('nsSummary', {
          median: median.toFixed(1),
          n: NorthStar.count(),
          baseline: IMPACT.humanScanSeconds.toFixed(1),
          target: CONFIG.northStarTargetSeconds
        });
    note.classList.toggle('good', median !== null && median <= CONFIG.northStarTargetSeconds);
  }

  const ackButton = $('#ackAlert');
  if (ackButton) ackButton.hidden = !NorthStar.waiting();
}

/** 寃쎈낫 李쎌쓽 '?뺤씤?덉뒿?덈떎' ??????踰덉쓽 ?대┃??遺곴레??吏?쒕? 留뚮뱺?? */
function acknowledgeAlert() {
  const seconds = NorthStar.acknowledge();
  if (seconds === null) return;
  Diagnostics.log(tr('nsAcknowledged', { seconds: seconds.toFixed(1) }), 'ok');
  pushEvent(tr('nsEventAck', { seconds: seconds.toFixed(1) }), 'ok', { tta: Number(seconds.toFixed(2)) });
  adminToast.classList.remove('show');
  refreshNorthStar();
  refreshMetrics();
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   31. ???뺣낫 吏?곌린
   ???쒖뒪?쒖? ?쒕쾭???꾨Т寃껊룄 蹂대궡吏 ?딅뒗 ??? ?대떦???곕씫泥섏? ?ㅼ젙??   釉뚮씪?곗? ?덉뿉 ??ν븳?? 怨듭슜 PC쨌?쒖뿰???명듃遺곸뿉??????洹몃?濡??먮㈃
   ?ㅼ쓬 ?щ엺??蹂????덈떎. 吏??諛⑸쾿???ъ슜???먯뿉 伊먯뼱 以??
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function wipeLocalData() {
  if (!confirm(tr('wipeConfirm'))) return;
  const keys = ['beachWatchContacts', 'beachWatchLanguage', 'beachWatchSite',
                'beachWatchPreset', 'beachWatchThreshold', 'beachWatchFrames',
                'beachWatchEscalate', 'beachWatchHours', 'beachWatchHintDismissed',
                'beachWatchNorthStar', 'beachWatchPrecision'];
  try {
    /* ?μ냼蹂??꾪뿕 援ъ뿭 ?ㅻ뒗 ?묐몢?대줈 李얠븘 吏?대떎 */
    Object.keys(localStorage)
      .filter(k => k.indexOf('beachWatchBoundary:') === 0)
      .forEach(k => keys.push(k));
  } catch (e) { /* ??μ냼 ?묎렐??留됲엺 ?섍꼍 */ }
  keys.forEach(k => { try { localStorage.removeItem(k); } catch (e) {} });

  state.contacts = [];
  NorthStar.reset();
  /* reset() ???대? save() 濡?beachWatchNorthStar 瑜??ㅼ떆 ?대떎.
     '紐⑤뱺 ?뺣낫瑜?吏?대떎'???쎌냽怨?留욌룄濡??꾨즺 ????踰???吏?대떎. */
  try { localStorage.removeItem('beachWatchNorthStar'); } catch (e) {}
  renderContacts();
  refreshNorthStar();
  Diagnostics.log(tr('wipeDone'), 'ok');
  /* 寃쎈낫 ?ㅻ깄?룹? 硫붾え由ъ뿉留??덉쑝誘濡??④퍡 鍮꾩슫??*/
  state.events.forEach(e => { if (e.snapshot) e.snapshot = ''; });
  renderEventLog();
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   11. DOM 李몄“
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const stageGrid = $('#stageGrid');
const cameraSelect = $('#cameraSelect');
const statusTitle = $('#status');
const statusText = $('#statusText');
const stateChip = $('#state');
const liveStatus = $('#liveStatus');
const eventText = $('#eventText');
const adminToast = $('#adminToast');
const liveRegion = $('#liveRegion');
const settingsDialog = $('#settingsDialog');
const sourceDialog = $('#sourceDialog');

/** 移대찓?쇱쓽 ?꾩옱 異붾줎 ??? ?쒕??덉씠?섍낵 MJPEG? 罹붾쾭?ㅻ?, ?섎㉧吏??video瑜??대떎. */
function sourceOf(camera) {
  if (camera.simulating || camera.kind === 'mjpeg-canvas' || camera.usesCanvas) {
    return { element: camera.canvas, width: camera.canvas.width, height: camera.canvas.height };
  }
  return { element: camera.video, width: camera.video.videoWidth, height: camera.video.videoHeight };
}

function cameraReady(camera) {
  if (camera.simulating || camera.usesCanvas) return camera.canvas && camera.canvas.width > 0;
  return camera.video && camera.video.readyState >= 2;
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   12. 移대찓???⑤꼸 (洹몃━??酉?
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function buildPanel(camera) {
  const panel = document.createElement('div');
  panel.className = 'stage';
  panel.dataset.cam = camera.id;
  panel.innerHTML =
    '<video autoplay playsinline muted></video>' +
    '<canvas class="sim-canvas" hidden></canvas>' +
    '<canvas class="heat-canvas" aria-hidden="true"></canvas>' +
    '<div class="placeholder"></div>' +
    '<svg class="zone-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' +
      '<path class="zone-fill" d=""></path>' +
      '<path class="zone-line" d=""></path>' +
    '</svg>' +
    '<div class="detection-layer" aria-hidden="true"></div>' +
    '<div class="overlay"><div class="line-label"></div></div>' +
    '<div class="sim-flag"></div>' +
    '<div class="motion-flag"></div>' +
    '<div class="camera-meta"><span class="cam-name"></span><b>REC</b></div>' +
    '<div class="cam-tag"><span class="cam-level"></span></div>' +
    '<button class="cam-close" type="button">??/button>' +
    '<div class="hint"><span class="hint-text"></span>' +
      '<button class="hint-close" type="button" aria-label="close">??/button></div>';

  camera.panel = panel;
  camera.video = $('video', panel);
  camera.canvas = $('.sim-canvas', panel);
  camera.placeholder = $('.placeholder', panel);
  camera.detections = $('.detection-layer', panel);
  camera.overlay = $('.overlay', panel);
  camera.zoneSvg = $('.zone-svg', panel);
  camera.zoneFill = $('.zone-fill', panel);
  camera.zoneLine = $('.zone-line', panel);
  camera.lineLabel = $('.line-label', panel);
  camera.simFlag = $('.sim-flag', panel);
  camera.motionFlag = $('.motion-flag', panel);
  camera.nameEl = $('.cam-name', panel);
  camera.levelEl = $('.cam-level', panel);
  camera.hintEl = $('.hint', panel);
  camera.hintTextEl = $('.hint-text', panel);
  /* ?덈궡臾몄씠 移대찓???붾㈃??媛由곕떎??吏?곸씠 ?덉뿀?? 吏곸젒 ?レ쓣 ???덇쾶 ?섍퀬,
     ??踰??レ쑝硫?洹??ㅻ줈???ㅼ떆 ?⑥? ?딄쾶 湲곗뼲?쒕떎. */
  $('.hint-close', panel).addEventListener('click', event => {
    event.stopPropagation();
    state.hintDismissed = true;
    store.set('beachWatchHintDismissed', '1');
    /* 移대뱶 履?'?ㅼ떆 蹂닿린' 踰꾪듉???④퍡 ?섑??섏빞 ?쒕떎 */
    refreshZoneCard();
    Diagnostics.log(tr('hintDismissed'), 'info');
  });

  panel.addEventListener('click', event => {
    if (event.target.closest('.cam-close')) return;
    if (event.target.closest('.overlay') && camera.id === state.focusedId) return;
    focusCamera(camera.id);
  });
  $('.cam-close', panel).addEventListener('click', event => {
    event.stopPropagation();
    removeCamera(camera.id);
  });

  bindBoundaryPointer(camera);
  stageGrid.append(panel);
  return panel;
}


'use strict';
function focusCamera(id) {
  /* 寃쎈낫媛 ?섎㈃ 珥덉젏???먮룞?쇰줈 ??꺼媛꾨떎. 洹몃븣 ?댁쟾 移대찓?쇰? ?몄쭛 以묒씠?덈떎硫?     state.drag(?꾩뿭 ?몃뜳??媛 ?ㅻⅨ 移대찓?쇱쓽 ??諛곗뿴???곸슜?섏뼱 ?됰슧???먯씠
     ?吏곸씤?? 珥덉젏??諛붾뚮뒗 ?쒓컙 ?몄쭛 ?곹깭瑜??뺣━?쒕떎. */
  if (state.focusedId !== id) { state.drag = -1; state.freehand = null; }
  state.focusedId = id;
  state.cameras.forEach(c => c.panel && c.panel.classList.toggle('focused', c.id === id));
  renderCameraBar();
  refreshAllPanels();
  syncMobileLineControls();
  drawAllBoundaries();
  refreshBadges();
}

function updateGridCount() {
  stageGrid.dataset.count = String(state.cameras.length);
  let empty = $('#gridEmpty');

  if (state.cameras.length === 0) {
    if (!empty) {
      empty = document.createElement('div');
      empty.id = 'gridEmpty';
      empty.className = 'empty-start';
      empty.innerHTML =
        '<h2></h2><p></p>' +
        '<div class="steps">' +
          '<div><b class="s1"></b><span class="s1b"></span></div>' +
          '<div><b class="s2"></b><span class="s2b"></span></div>' +
          '<div><b class="s3"></b><span class="s3b"></span></div>' +
        '</div>' +
        '<div class="go">' +
          '<button class="primary" id="quickSim"></button>' +
          '<button id="quickDevice"></button>' +
          '<button id="quickStream"></button>' +
        '</div>';
      stageGrid.append(empty);
      $('#quickSim', empty).addEventListener('click', () => {
        const camera = addCamera({ kind: 'sim' });
        if (camera) startSimulation(camera);
      });
      $('#quickDevice', empty).addEventListener('click', () => { openSourceDialog(); setSourceTab('device'); });
      $('#quickStream', empty).addEventListener('click', () => { openSourceDialog(); setSourceTab('stream'); });
    }
    $('h2', empty).textContent = tr('emptyTitle');
    $('p', empty).textContent = tr('emptyLede');
    [['s1', 'step1'], ['s1b', 'step1b'], ['s2', 'step2'], ['s2b', 'step2b'], ['s3', 'step3'], ['s3b', 'step3b']]
      .forEach(([cls, key]) => { $('.' + cls, empty).textContent = tr(key); });
    $('#quickSim', empty).textContent = tr('quickSim');
    $('#quickDevice', empty).textContent = tr('quickDevice');
    $('#quickStream', empty).textContent = tr('quickStream');
  } else if (empty) {
    empty.remove();
  }
}


'use strict';
function refreshAllPanels() {
  state.cameras.forEach(camera => {
    if (!camera.panel) return;
    camera.nameEl.textContent = camera.name;
    camera.placeholder.dataset.label = tr('cameraPreview');
    camera.lineLabel.textContent = tr('dangerBoundary');
    camera.simFlag.textContent = tr('simulationFlag');
    camera.motionFlag.textContent = tr('motionFlag');
    setPanelHint(camera);
    $('.cam-close', camera.panel).setAttribute('aria-label', tr('camRemoveLabel'));
    camera.panel.classList.toggle('offline', !(camera.online || camera.simulating));
    camera.panel.classList.toggle('has-video', Boolean(camera.online) && !camera.usesCanvas && !camera.simulating);
    camera.panel.classList.toggle('simulating', Boolean(camera.simulating));
    camera.panel.classList.toggle('focused', camera.id === state.focusedId);
    updatePanelLevel(camera);
    updatePanelMotion(camera);
  });
  updateGridCount();
  updateHeaderStatus();
}

function updatePanelLevel(camera) {
  if (!camera.levelEl) return;
  const level = camera.alertLevel;
  const label = level === 'critical' ? tr('levelCritical')
    : level === 'alert' ? tr('levelAlert')
    : level === 'watch' ? tr('levelWatch')
    : (camera.online || camera.simulating) ? 'LIVE' : tr('camOfflineTag');
  camera.levelEl.textContent = label + (camera.riskCount ? ' 쨌 ' + camera.riskCount : '');
  camera.levelEl.className = 'lv-' + (level === 'none' ? 'idle' : level);
  camera.panel.classList.toggle('critical', level === 'critical' && $('#warningLight').checked);
}

function updatePanelMotion(camera) {
  if (!camera.panel) return;
  camera.panel.classList.toggle('moving', Boolean(camera.motion.moving));
  camera.panel.classList.toggle('paused-boundary', Boolean(camera.motion.moving));
}

function updateHeaderStatus() {
  const active = activeCameras().length;
  liveStatus.textContent = state.cameras.length === 0
    ? tr('cameraNotConnected')
    : tr('cameraCountLabel', { active, max: CONFIG.maxCameras });
}


'use strict';
function renderCameraBar() {
  const bar = $('#cameraBar');
  const countEl = $('#cameraCount');
  Array.from(bar.querySelectorAll('.camera-slot')).forEach(el => el.remove());
  const addButton = $('#addCamera');

  state.cameras.forEach(camera => {
    const slot = document.createElement('button');
    slot.type = 'button';
    slot.className = 'camera-slot' +
      (camera.id === state.focusedId ? ' active' : '') +
      (camera.online || camera.simulating ? ' on' : (camera.error ? ' err' : ''));
    const kindLabel = camera.simulating ? tr('camSlotSim')
      : camera.kind === 'stream' ? tr('camSlotStream')
      : camera.kind === 'file' ? tr('camSlotFile')
      : camera.kind === 'screen' ? tr('camSlotScreen')
      : tr('camSlotDevice');
    slot.innerHTML = '<i></i>';
    slot.append(document.createTextNode(camera.name + ' '));
    const small = document.createElement('small');
    small.textContent = kindLabel;
    slot.append(small);
    slot.addEventListener('click', () => focusCamera(camera.id));
    bar.insertBefore(slot, addButton);
  });

  countEl.textContent = tr('cameraCountLabel', { active: state.cameras.length, max: CONFIG.maxCameras });
  addButton.disabled = state.cameras.length >= CONFIG.maxCameras;
  addButton.textContent = tr('addCamera');
}

function renderSitePicker() {
  const picker = $('#sitePicker');
  if (!picker) return;
  picker.innerHTML = '';
  Object.keys(SITE_PRESETS).forEach(key => {
    const site = SITE_PRESETS[key];
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-pressed', String(key === state.siteType));
    button.innerHTML = '<span aria-hidden="true">' + site.icon + '</span>';
    const label = document.createElement('span');
    label.textContent = tr(site.i18n);
    button.append(label);
    button.addEventListener('click', () => setSiteType(key));
    picker.append(button);
  });
  const note = $('#siteNote');
  if (note) note.textContent = tr(activeSite().note);
}

function setSiteType(key) {
  if (!SITE_PRESETS[key]) return;
  if (key === state.siteType) return;
  /* 援ъ뿭? ?μ냼蹂꾨줈 ?곕줈 ??λ맂?? 諛붽씀湲??꾩뿉 吏湲??μ냼??援ъ뿭????ν븯吏
     ?딆쑝硫? ?대??먯꽌 洹몃┛ 援ъ뿭???ㅼ쓬 ?????媛?援ъ뿭????뼱??踰꾨┛?? */
  persistBoundaries();
  state.siteType = key;
  store.set('beachWatchSite', key);
  const site = activeSite();
  /* ?ㅼ튂 ?좏삎??諛붽씀硫?湲닿툒 ?밴꺽 ?쒓컙??湲곕낯媛믩룄 ?④퍡 ?곕씪媛꾨떎.
     湲됰쪟(4珥?? ?몄닔(7珥????곸젙媛믪씠 ?ㅻⅤ湲??뚮Ц?대떎. */
  state.escalateSeconds = site.escalate;
  $('#tunerEscalate').value = site.escalate;
  store.set('beachWatchEscalate', site.escalate);

  const heading = $('.heading h1');
  if (heading) heading.textContent = tr(site.heading);
  /* ???μ냼????λ뤌 ?덈뜕 援ъ뿭??遺덈윭?⑤떎. ?놁쑝硫?洹??μ냼??湲곕낯 寃쎄퀎?? */
  const site2 = SITE_PRESETS[key];
  state.cameras.concat([state.detached]).forEach(camera => {
    camera.points = site2.line.map(p => ({ x: p.x, y: p.y }));
    camera.zoneMode = 'line';
    restoreBoundaryFor(camera);
  });
  drawAllBoundaries();
  refreshZoneCard();
  renderSitePicker();
  refreshTunerLabels();
  refreshBadges();
  state.cameras.forEach(camera => { camera.motion.moving = false; updatePanelMotion(camera); });
  Diagnostics.log('site ??' + key + ' (escalate ' + site.escalate + 's)', 'info');
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   13. 寃쎄퀎???몄쭛 (珥덉젏 移대찓??湲곗?)
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */

/** ?ㅻ쾭?덉씠???ㅼ젣 ?곸뿭. .stage ??援듭? ?뚮몢由щ? ?쒖쇅?댁빞 諛뺤뒪媛 ?닿툔?섏? ?딅뒗?? */
function viewRect(camera) {
  const cam = camera || focusedCamera();
  return cam.overlay ? cam.overlay.getBoundingClientRect() : { left: 0, top: 0, width: 1, height: 1 };
}

/** ?먮뱾??遺?쒕윭??怨≪꽑?쇰줈 ?뉖뒗??(Catmull-Rom ??3李?踰좎???.
 *  ?먯쑝濡?洹몃┛ ?뚮룄?좎씠 媛곸쭊 爰얠??좎쑝濡?蹂댁씠吏 ?딄쾶 ?섍린 ?꾪븳 寃껋씠??
 *  ?λ젰??1/6濡???쾶 ?≪븘, ?붾㈃??蹂댁씠??怨≪꽑怨??ㅼ젣 ?먯젙???곕뒗
 *  吏곸꽑 蹂닿컙??李⑥씠媛 ?덉뿉 ?꾩? ?딅룄濡??덈떎. */
function smoothPath(points, closed) {
  if (!points || points.length < 2) return '';
  const p = points.map(q => [q.x * 100, q.y * 100]);
  const n = p.length;
  const fmt = v => v.toFixed(2);
  if (n === 2) return 'M ' + fmt(p[0][0]) + ' ' + fmt(p[0][1]) + ' L ' + fmt(p[1][0]) + ' ' + fmt(p[1][1]) + (closed ? ' Z' : '');

  const at = i => (closed ? p[(i + n) % n] : p[Math.max(0, Math.min(n - 1, i))]);
  let d = 'M ' + fmt(p[0][0]) + ' ' + fmt(p[0][1]);
  const segments = closed ? n : n - 1;
  for (let i = 0; i < segments; i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ' C ' + fmt(c1x) + ' ' + fmt(c1y) + ', ' + fmt(c2x) + ' ' + fmt(c2y) + ', ' + fmt(p2[0]) + ' ' + fmt(p2[1]);
  }
  return d + (closed ? ' Z' : '');
}

function drawBoundary(camera) {
  const cam = camera || focusedCamera();
  if (!cam.zoneSvg) return;
  /* ?쒕옒洹몃줈 洹몃━??以묒씠硫?洹?沅ㅼ쟻???ㅼ떆媛꾩쑝濡?蹂댁뿬 以??*/
  const points = (state.freehand && state.freehand.cameraId === cam.id && state.freehand.points.length > 1)
    ? state.freehand.points : cam.points;
  if (!points.length) return;

  const isPolygon = cam.zoneMode === 'polygon';
  cam.zoneSvg.classList.toggle('polygon', isPolygon);

  if (isPolygon) {
    const d = smoothPath(points, true);
    cam.zoneFill.setAttribute('d', d);
    cam.zoneLine.setAttribute('d', d);
  } else {
    /* ?좎? x ?쒖꽌濡?洹몃━怨? ?꾪뿕??履??꾩そ)???낃쾶 移좏빐
       "?대뒓 履쎌씠 ?꾪뿕?멸?"媛 ?쒕늿??蹂댁씠寃??쒕떎. */
    const sorted = points.slice().sort((a, b) => a.x - b.x);
    const line = smoothPath(sorted, false);
    cam.zoneLine.setAttribute('d', line);
    const first = sorted[0], last = sorted[sorted.length - 1];
    cam.zoneFill.setAttribute('d',
      line + ' L ' + (last.x * 100).toFixed(2) + ' 0 L ' + (first.x * 100).toFixed(2) + ' 0 Z');
  }

  renderZoneHandles(cam);

  const anchor = isPolygon ? points[0] : points.slice().sort((a, b) => a.x - b.x)[0];
  cam.lineLabel.style.left = (anchor.x * 100) + '%';
  cam.lineLabel.style.top = (anchor.y * 100) + '%';
  cam.lineLabel.textContent = tr('dangerBoundary');

  if (cam.id === state.focusedId) refreshZoneCard();
}

/** ???섎굹???몃뱾 ?섎굹. 媛쒖닔媛 諛붾뚮?濡?留ㅻ쾲 ?ㅼ떆 留뚮뱺???먯? 留롮븘???섏떗 媛?. */
function renderZoneHandles(camera) {
  /* ?쒕옒洹?以묒뿉???먯옟?대? ?ㅼ떆 留뚮뱾吏 ?딅뒗?? ?↔퀬 ?덈뒗 ?붿냼瑜?吏?곕㈃
     ?ъ씤??罹≪쿂媛 ????⑤꼸 諛뽰뿉???먯쓣 ?먯쓣 ??pointerup ??紐?諛쏄퀬,
     洹??ㅻ줈 踰꾪듉???꾨Ⅴ吏 ?딆븘???먯씠 而ㅼ꽌瑜??곕씪?ㅻ땲寃??쒕떎. */
  if (state.drag >= 0 && camera.id === state.focusedId) {
    const handle = camera.overlay.querySelector('.handle[data-index="' + state.drag + '"]');
    const point = camera.points[state.drag];
    if (handle && point) {
      handle.style.left = (point.x * 100) + '%';
      handle.style.top = (point.y * 100) + '%';
      return;
    }
  }
  Array.from(camera.overlay.querySelectorAll('.handle')).forEach(el => el.remove());
  if (camera.id !== state.focusedId) return;
  if (state.freehand && state.freehand.active) return;   /* 洹몃━??以묒뿉???먯옟?대? ?④릿??*/
  camera.points.forEach((point, index) => {
    const handle = document.createElement('div');
    handle.className = 'handle';
    handle.dataset.index = String(index);
    handle.setAttribute('aria-label', 'zone point ' + (index + 1));
    handle.style.left = (point.x * 100) + '%';
    handle.style.top = (point.y * 100) + '%';
    camera.overlay.append(handle);
  });
}

function drawAllBoundaries() {
  state.cameras.forEach(drawBoundary);
}


'use strict';
function boundaryStorageKey() { return 'beachWatchBoundary:' + state.siteType; }

function persistBoundaries() {
  const payload = {};
  /* ?덈퉬 移대찓???곌껐 ???곹깭)??寃쎄퀎???④퍡 ??ν븳?? 移대찓?쇰? 遺숈씠湲??꾩뿉
     誘몃━ 援ъ뿭???≪븘 ?먮뒗 ?먮쫫??吏?먰븯湲??꾪븳 寃껋씠?? */
  /* ?ㅻ뒗 諛섎뱶??移대찓??id 濡??〓뒗?? ?대쫫?쇰줈 ??ν븯硫?(1) ?몄뼱瑜?諛붽엥????     '?ャ깳??1' ??'Camera 1' ???닿툔??洹몃┛ 援ъ뿭???щ씪吏?寃껋쿂??蹂댁씠怨?
     (2) 移대찓?쇰? 吏?좊떎 ?덈줈 遺숈씠硫??대쫫??寃뱀퀜 ???⑤꼸??媛숈? 援ъ뿭??     ??뼱?대떎. ?대쫫? ?щ엺???쎄린 ?꾪븳 李멸퀬媛믪쑝濡쒕쭔 ?④퍡 ?④릿?? */
  state.cameras.concat([state.detached]).forEach(c => {
    payload[c.id] = { points: c.points, mode: c.zoneMode, name: c.name || '',
                      base: c.zoneBase, angle: c.zoneAngle || 0 };
  });
  store.set(boundaryStorageKey(), JSON.stringify(payload));
}

function restoreBoundaryFor(camera) {
  const raw = store.get(boundaryStorageKey(), '');
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    /* 援щ쾭?꾩? ?대쫫???ㅻ줈 ?쇰떎. 湲곗〈 ?ъ슜?먯쓽 援ъ뿭???껋? ?딅룄濡?????蹂몃떎. */
    const saved = parsed[camera.id] || (camera.name ? parsed[camera.name] : null);
    if (!saved) return;
    /* 援щ쾭?꾩? 諛곗뿴留???ν뻽?? ?뺤떇??諛붾뚯뼱??湲곗〈 ?ㅼ젙???껋? ?딄쾶 ????諛쏅뒗?? */
    const points = Array.isArray(saved) ? saved : saved.points;
    const mode = Array.isArray(saved) ? 'line' : (saved.mode === 'polygon' ? 'polygon' : 'line');
    if (Array.isArray(points) && points.length >= 2 &&
        points.every(p => p && typeof p.x === 'number' && typeof p.y === 'number')) {
      camera.points = points.slice(0, CONFIG.maxZonePoints).map(p => ({ x: clamp(p.x, 0, 1), y: clamp(p.y, 0, 1) }));
      camera.zoneMode = isValidZone(camera.points, mode) ? mode : 'line';
      /* ?뚯쟾 ?곹깭???④퍡 ?섏궡由곕떎. ?놁쑝硫?吏湲?紐⑥뼇??湲곗????쒕떎. */
      camera.zoneAngle = normalizeAngle(saved && saved.angle);
      camera.zoneBase = (saved && Array.isArray(saved.base) && saved.base.length === camera.points.length)
        ? saved.base.map(p => ({ x: clamp(p.x, 0, 1), y: clamp(p.y, 0, 1) }))
        : camera.points.map(p => ({ x: p.x, y: p.y }));
    }
  } catch (e) { /* ?먯긽????κ컪? 臾댁떆?섍퀬 湲곕낯媛믪쓣 ?대떎 */ }
}

/* ?댁쟾 ?먭? 吏꾨떒???곕뜕 ?대쫫???좎??쒕떎 */
function persistBoundary() { persistBoundaries(); }
function restoreBoundary() { state.cameras.forEach(restoreBoundaryFor); }


'use strict';
const touchLayout = () => matchMedia('(pointer:coarse)').matches || innerWidth <= 820;

function pointerPosition(camera, event) {
  const rect = viewRect(camera);
  return {
    x: clamp((event.clientX - rect.left) / rect.width, 0, 1),
    y: clamp((event.clientY - rect.top) / rect.height, 0, 1)
  };
}

function bindBoundaryPointer(camera) {
  const overlay = camera.overlay;

  overlay.addEventListener('pointerdown', event => {
    if (camera.id !== state.focusedId || !state.editing) return;

    /* 湲곗〈 ?먯쓣 ?≪븯?쇰㈃ ?대룞 */
    if (event.target.classList.contains('handle')) {
      state.drag = Number(event.target.dataset.index);
      event.target.classList.add('dragging');
      /* 罹≪쿂???ㅻ쾭?덉씠??嫄대떎. ?먯옟???붿냼???ㅼ떆 洹몃젮吏????덉뼱??         嫄곌린??嫄몃㈃ 罹≪쿂媛 議곗슜???由곕떎. */
      try { overlay.setPointerCapture(event.pointerId); } catch (e) {}
      event.preventDefault();
      return;
    }

    /* 鍮?怨녹쓣 ?뚮??쇰㈃ '?먯쑝濡?洹몃━湲? ?쒖옉.
       ?뚮㈃ 怨≪꽑??洹몃젮吏怨? ?吏곸씠吏 ?딄퀬 ?쇰㈃ ???섎굹留?異붽??쒕떎. */
    const point = pointerPosition(camera, event);
    state.freehand = { cameraId: camera.id, active: true, moved: false, points: [point] };
    overlay.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  overlay.addEventListener('pointermove', event => {
    if (camera.id !== state.focusedId) return;

    /* ????린湲?*/
    if (state.drag >= 0) {
      if (state.drag >= camera.points.length) { state.drag = -1; return; }
      camera.points[state.drag] = pointerPosition(camera, event);
      drawBoundary(camera);
      syncMobileLineControls();
      return;
    }

    /* ?먯쑝濡?洹몃━湲????쇱젙 媛꾧꺽 ?댁긽 ?吏곸????뚮쭔 ?먯쓣 ?볥뒗??
       洹몃젃吏 ?딆쑝硫??먮뼥由쇨퉴吏 ?먯씠 ?섏뼱 ?섎갚 媛쒓? ?볦씤?? */
    const stroke = state.freehand;
    if (!stroke || !stroke.active || stroke.cameraId !== camera.id) return;
    const point = pointerPosition(camera, event);
    const last = stroke.points[stroke.points.length - 1];
    if (Math.hypot(point.x - last.x, point.y - last.y) < CONFIG.freehandMinStep) return;
    stroke.points.push(point);
    stroke.moved = true;
    drawBoundary(camera);
  });

  const finish = event => {
    /* ????린湲?醫낅즺 */
    if (state.drag >= 0) {
      state.drag = -1;
      resetZoneBase(camera);
      Array.from(overlay.querySelectorAll('.handle.dragging')).forEach(el => el.classList.remove('dragging'));
      persistBoundaries();
      return;
    }

    const stroke = state.freehand;
    state.freehand = null;
    if (!stroke || stroke.cameraId !== camera.id) return;

    if (!stroke.moved) {
      /* 洹몃깷 ??踰??뚮????????섎굹 異붽? */
      if (camera.points.length >= CONFIG.maxZonePoints) {
        Diagnostics.log(tr('zoneTooManyPoints', { max: CONFIG.maxZonePoints }), 'warn');
      } else {
        const point = stroke.points[0];
        const index = insertIndexFor(camera.points, point, camera.zoneMode);
        camera.points.splice(index, 0, point);
      }
    } else {
      /* ?뚯뼱??洹몃졇????沅ㅼ쟻??洹몃?濡???援ъ뿭?쇰줈 ?쇰뒗??
         ?먯쑝濡?洹몃┛ ?먯? 珥섏킌?섎?濡??댁쭩 ?ㅻ벉??媛쒖닔瑜?以꾩씤?? */
      let drawn = simplifyPoints(stroke.points, CONFIG.freehandTolerance);
      if (drawn.length > CONFIG.maxZonePoints) {
        drawn = simplifyPoints(drawn, CONFIG.freehandTolerance * 2.5).slice(0, CONFIG.maxZonePoints);
      }
      if (drawn.length >= zoneMinPoints(camera.zoneMode)) {
        camera.points = drawn;
        Diagnostics.log(tr('zoneDrawn', { n: drawn.length }), 'ok');
      } else {
        Diagnostics.log(tr('zoneMinPoints'), 'warn');
      }
    }
    resetZoneBase(camera);
    drawBoundary(camera);
    syncMobileLineControls();
    persistBoundaries();
  };

  overlay.addEventListener('pointerup', finish);
  overlay.addEventListener('pointercancel', () => {
    state.drag = -1;
    state.freehand = null;
    Array.from(overlay.querySelectorAll('.handle.dragging')).forEach(el => el.classList.remove('dragging'));
    drawBoundary(camera);
  });
  /* 罹≪쿂媛 ?대뼡 ?댁쑀濡쒕뱺 ?由щ㈃(?붿냼 ?쒓굅, 李??꾪솚) ?몄쭛 ?곹깭???④퍡 ?쇰떎.
     洹몃젃吏 ?딆쑝硫??먯쓣 ?먮뒗?곕룄 ?먯씠 而ㅼ꽌瑜?怨꾩냽 ?곕씪?ㅻ땶?? */
  overlay.addEventListener('lostpointercapture', () => {
    if (state.drag >= 0) { state.drag = -1; persistBoundaries(); }
    if (state.freehand) { state.freehand = null; }
    Array.from(overlay.querySelectorAll('.handle.dragging')).forEach(el => el.classList.remove('dragging'));
    drawBoundary(camera);
  });

  /* ????젣 ???붾툝?대┃/?붾툝??*/
  overlay.addEventListener('dblclick', event => {
    if (camera.id !== state.focusedId || !state.editing) return;
    if (!event.target.classList.contains('handle')) return;
    removeZonePoint(camera, Number(event.target.dataset.index));
    event.preventDefault();
  });
}

function removeZonePoint(camera, index) {
  if (camera.points.length <= zoneMinPoints(camera.zoneMode)) {
    Diagnostics.log(tr('zoneMinPoints'), 'warn');
    return false;
  }
  camera.points.splice(index, 1);
  resetZoneBase(camera);
  drawBoundary(camera);
  syncMobileLineControls();
  persistBoundaries();
  return true;
}


'use strict';
/* ?? 寃쎄퀎 援ъ뿭 ?몄쭛 移대뱶 ??????????????????????????????????????????? */
function setZoneMode(mode) {
  const cam = focusedCamera();
  if (cam.zoneMode === mode) return;

  if (mode === 'polygon') {
    /* ????援ъ뿭: ?섎?瑜??뉖뒗?? ???꾩そ(?꾪뿕??履????붾㈃ ???앷퉴吏 ?щ젮
       ?ロ엺 ?좊? 留뚮뱺?? ?ъ슜?먭? 泥섏쓬遺???ㅼ떆 洹몃━吏 ?딆븘???쒕떎. */
    const sorted = cam.points.slice().sort((a, b) => a.x - b.x);
    const first = sorted[0], last = sorted[sorted.length - 1];
    cam.points = sorted.concat([{ x: last.x, y: 0.02 }, { x: first.x, y: 0.02 }]);
  } else {
    /* 援ъ뿭 ???? 援ъ뿭???꾨옒履??ㅺ낸留??④릿?? ?꾩뿉???먮룞?쇰줈 遺숈???       '?꾩そ ?쒓퍚'???щ씪???먮옒 洹몃━???뚮룄?좎쑝濡??뚯븘?⑤떎. */
    cam.points = polygonToPolyline(cam.points);
  }
  cam.zoneMode = mode;
  drawBoundary(cam);
  syncMobileLineControls();
  persistBoundaries();
  Diagnostics.log(tr('zoneSwitched', { mode: tr(mode === 'polygon' ? 'zoneModePolygon' : 'zoneModeLine') }), 'info');
}

/** ?ㅺ컖?뺤쓣 ?대━?쇱씤?쇰줈 ?섎룎由곕떎: x媛 媛숈?(?먮뒗 留ㅼ슦 媛源뚯슫) ?먮뱾 以? *  臾쇨???媛源뚯슫 履?y媛 ??履?留??④꺼 ?꾨옒履??ㅺ낸???삳뒗?? */
function polygonToPolyline(points) {
  const buckets = new Map();
  points.forEach(p => {
    const key = Math.round(p.x * 200);          // 0.005 ?⑥쐞濡?臾띕뒗??    const kept = buckets.get(key);
    if (!kept || p.y > kept.y) buckets.set(key, p);
  });
  const line = Array.from(buckets.values()).sort((a, b) => a.x - b.x);
  return line.length >= 2 ? line : points.slice(0, 2);
}

function undoZonePoint() {
  const cam = focusedCamera();
  removeZonePoint(cam, cam.points.length - 1);
}

function simplifyZone() {
  const cam = focusedCamera();
  const before = cam.points.length;
  const simplified = simplifyPoints(cam.points, CONFIG.simplifyTolerance);
  if (simplified.length < zoneMinPoints(cam.zoneMode)) return;
  /* ?꾨Т 蹂?붽? ?놁쑝硫?洹몃젃?ㅺ퀬 留먰빐 以?? ?뚮??붾뜲 ?꾨Т ?쇰룄 ???쇱뼱?섎㈃
     怨좎옣?몄? ?대? ?⑥닚??寃껋씤吏 ?????녿떎. */
  if (simplified.length === before) {
    Diagnostics.log(tr('zoneSimplifyNoChange'), 'info');
    return;
  }
  cam.points = simplified;
  drawBoundary(cam);
  syncMobileLineControls();
  persistBoundaries();
  Diagnostics.log(tr('zoneSimplified', { before, after: simplified.length }), 'ok');
}

function resetZone() {
  const cam = focusedCamera();
  cam.zoneMode = 'line';
  cam.points = activeSite().line.map(p => ({ x: p.x, y: p.y }));
  drawBoundary(cam);
  syncMobileLineControls();
  persistBoundaries();
}

/** 媛숈? 吏?뺤씠 ?щ윭 移대찓?쇱뿉 嫄몄튌 ???섎굹???ㅼ떆 洹몃━吏 ?딆븘???섍쾶 ?쒕떎. */
function applyZoneToAll() {
  const cam = focusedCamera();
  let applied = 0;
  state.cameras.forEach(other => {
    if (other.id === cam.id) return;
    other.points = cam.points.map(p => ({ x: p.x, y: p.y }));
    other.zoneMode = cam.zoneMode;
    drawBoundary(other);
    applied += 1;
  });
  persistBoundaries();
  Diagnostics.log(tr('zoneApplied', { n: applied }), applied ? 'ok' : 'warn');
}


'use strict';
/** ?붾㈃ ??洹몃━湲??덈궡臾? ?ъ슜?먭? ?レ븯?쇰㈃ ?ㅼ떆 ?꾩슦吏 ?딅뒗?? */
function setPanelHint(camera) {
  if (!camera || !camera.hintEl) return;
  const show = camera.id === state.focusedId && state.editing && !state.hintDismissed;
  camera.hintEl.classList.toggle('on', show);
  if (!camera.hintTextEl) return;
  /* ?덈궡臾몄뿉??媛뺤“ ?쒓렇媛 ?ㅼ뼱 ?덈떎. ?ъ쟾 媛믪? ??먭? ?듭젣?섎뒗 ?곸닔?? */
  camera.hintTextEl.innerHTML = show
    ? (touchLayout() ? tr('zoneHintTouch') : tr('zoneHintEdit'))
    : '';
  const close = $('.hint-close', camera.panel);
  if (close) close.setAttribute('aria-label', tr('hintCloseLabel'));
}

function refreshPanelHints() { state.cameras.forEach(setPanelHint); }

function refreshZoneCard() {
  const cam = focusedCamera();
  const isPolygon = cam.zoneMode === 'polygon';
  const modeLine = $('#zoneModeLine'), modePolygon = $('#zoneModePolygon');
  if (modeLine) modeLine.setAttribute('aria-pressed', String(!isPolygon));
  if (modePolygon) modePolygon.setAttribute('aria-pressed', String(isPolygon));

  const pointsTag = $('#zonePoints');
  if (pointsTag) pointsTag.textContent = tr('zonePointCount', { n: cam.points.length });
  /* ?ъ씠?쒕컮 ?듦퀎???④퍡 媛깆떊?쒕떎. ?덉쟾?먮뒗 HTML ??'2'媛 諛뺥엺 梨???踰덈룄
     媛깆떊?섏? ?딆븘, 23?먯쭨由?怨≪꽑??洹몃젮??怨꾩냽 2濡??쒖떆?먮떎. */
  const lineInfo = $('#lineInfo');
  if (lineInfo) lineInfo.textContent = String(cam.points.length);
  const modeTag = $('#zoneModeTag');
  if (modeTag) modeTag.textContent = tr(isPolygon ? 'zoneModePolygon' : 'zoneModeLine');
  const camTag = $('#zoneCameraTag');
  if (camTag) camTag.textContent = state.cameras.length ? cam.name : '??;

  const hint = $('#zoneHint');
  if (hint) hint.innerHTML = !state.editing ? tr('zoneHintView')
    : (touchLayout() ? tr('zoneHintTouch') : tr('zoneHintEdit'));
  /* ?붾㈃ ???덈궡臾몄쓣 ?レ븯?붾씪????移대뱶?먮뒗 媛숈? ?ㅻ챸??洹몃?濡??⑥븘 ?덉쑝誘濡?     ?뺣낫瑜??껋? ?딅뒗?? ?レ? ???ㅼ떆 蹂닿퀬 ?띠쓣 ?뚮? ?꾪븳 踰꾪듉???붾떎. */
  const restore = $('#hintRestore');
  if (restore) {
    restore.hidden = !state.hintDismissed;
    restore.textContent = tr('hintRestore');
  }
  refreshPanelHints();

  /* ?믪씠쨌?뚯쟾? ?좎씠??怨≪꽑?대뱺 ?곸뿭?대뱺 ?묎컳???섎?媛 ?덉쑝誘濡?     ?먯씠 2媛??댁긽?대㈃ ??긽 ?????덇쾶 ?쒕떎. */
  const sliders = $('#zoneSliders');
  if (sliders) sliders.classList.toggle('on', cam.points.length >= 2);

  const undo = $('#zoneUndo');
  if (undo) undo.disabled = cam.points.length <= zoneMinPoints(cam.zoneMode);
  const applyAll = $('#zoneApplyAll');
  if (applyAll) applyAll.disabled = state.cameras.length < 2;

  setLabel('#editLine', state.editing ? 'zoneEditDone' : 'zoneEdit');
  setLabel('#resetLine', 'zoneReset');

  state.cameras.forEach(c => {
    if (c.overlay) c.overlay.classList.toggle('editing', state.editing && c.id === state.focusedId);
  });
}


'use strict';
function syncMobileLineControls() {
  const cam = focusedCamera();
  refreshZoneCard();
  if (!cam || cam.points.length < 2) return;
  const height = Math.round(clamp(centroidOf(cam.points).y, 0, 1) * 100);
  const angle = normalizeAngle(cam.zoneAngle || 0);
  $('#boundaryHeight').value = height;
  $('#boundaryTilt').value = angle;
  $('#boundaryHeightValue').textContent = height + '%';
  $('#boundaryTiltValue').textContent = Math.round(angle) + '째';
}

/** ?⑤꼸???ㅼ젣 媛濡??몃줈 鍮? ?뚯쟾 媛곷룄媛 李뚭렇?ъ?吏 ?딄쾶 ?섎뒗 ???대떎. */
function panelAspect(camera) {
  const cam = camera || focusedCamera();
  if (!cam || !cam.overlay) return 16 / 9;
  const rect = viewRect(cam);
  return (rect.width > 0 && rect.height > 0) ? rect.width / rect.height : 16 / 9;
}

/** ?뚯쟾??湲곗????섎뒗 '?먮옒 紐⑥뼇'???뺣낫?쒕떎.
 *  ?먯쑝濡??먯쓣 ??린嫄곕굹 ?ㅼ떆 洹몃━硫?洹?紐⑥뼇???덈줈??湲곗????쒕떎. */
function ensureZoneBase(camera) {
  if (!camera.zoneBase || camera.zoneBase.length !== camera.points.length) {
    camera.zoneBase = camera.points.map(p => ({ x: p.x, y: p.y }));
    camera.zoneAngle = 0;
  }
  return camera.zoneBase;
}

/** ?ъ슜?먭? 援ъ뿭??吏곸젒 怨좎낀????吏湲?紐⑥뼇????湲곗??쇰줈 ?쇨퀬 媛곷룄瑜?0?쇰줈 ?섎룎由곕떎. */
function resetZoneBase(camera) {
  const cam = camera || focusedCamera();
  if (!cam) return;
  cam.zoneBase = cam.points.map(p => ({ x: p.x, y: p.y }));
  cam.zoneAngle = 0;
}

/** 援ъ뿭 ?꾩껜瑜??몃줈濡???릿?? ?좎씠??怨≪꽑?대뱺 ?곸뿭?대뱺 紐⑥뼇? 洹몃?濡? */
function moveLineToHeight(value) {
  const cam = focusedCamera();
  if (!cam || cam.points.length < 2) return;
  cam.points = translatePointsToHeight(cam.points, value / 100);
  /* ??릿 ?꾩튂媛 ?댄썑 ?뚯쟾??湲곗????섏뼱???쒖옄由ъ뿉???덈떎 */
  cam.zoneBase = rotatePoints(cam.points, -normalizeAngle(cam.zoneAngle), panelAspect(cam));
  drawBoundary(cam); syncMobileLineControls(); persistBoundaries();
}

/** 援ъ뿭??0??60째 濡??뚮┛??
 *  媛곷룄???덈?媛믪씠?? ?щ씪?대뜑瑜?0 ?쇰줈 ?섎룎由щ㈃ ?먮옒 紐⑥뼇 洹몃?濡??뚯븘?⑤떎. */
function setZoneAngle(degrees) {
  const cam = focusedCamera();
  if (!cam || cam.points.length < 2) return;
  const base = ensureZoneBase(cam);
  const angle = normalizeAngle(degrees);
  cam.zoneAngle = angle;
  cam.points = fitPointsInView(rotatePoints(base, angle, panelAspect(cam)));
  drawBoundary(cam); syncMobileLineControls(); persistBoundaries();
}

/* ?댁쟾 ?대쫫???좎??쒕떎(?먭? 吏꾨떒쨌?몃? API ?명솚) */
function setLineTilt(value) { setZoneAngle(value); }


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   14. 媛먯? ?뚯씠?꾨씪??   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const tileCanvas = document.createElement('canvas');
const tileContext = tileCanvas.getContext('2d', { alpha: false });

async function detectPeople(camera) {
  const source = sourceOf(camera);
  if (!source.width || !source.height) return { people: [], raw: 0 };

  const thresholds = activeThresholds(camera);
  SceneAnalyzer.update(camera, source.element);

  /* 1) ?꾩껜 ?꾨젅??1??*/
  const found = (await state.model.detect(source.element, CONFIG.maxDetectionsFull, thresholds.fullScore))
    .filter(p => p.class === 'person')
    .map(p => Object.assign({}, p, { source: 'full', clipped: false }));

  /* 2) 寃뱀묠 ???異붾줎 ???먭굅由???곸쓽 ?좏슚 ?댁긽?꾨? ?뚯뼱?щ┛??*/
  const tilesX = camera.activeTiles.x, tilesY = camera.activeTiles.y;
  if (tilesX * tilesY > 1 || thresholds.filter !== 'none') {
    const tileWidth = source.width / (tilesX - (tilesX - 1) * CONFIG.overlap);
    const tileHeight = source.height / (tilesY - (tilesY - 1) * CONFIG.overlap);
    const stepX = tileWidth * (1 - CONFIG.overlap);
    const stepY = tileHeight * (1 - CONFIG.overlap);

    tileCanvas.width = CONFIG.tileCanvasWidth;
    tileCanvas.height = Math.max(320, Math.round(CONFIG.tileCanvasWidth * tileHeight / tileWidth));
    tileContext.filter = thresholds.filter;

    for (let row = 0; row < tilesY; row++) {
      for (let col = 0; col < tilesX; col++) {
        const sx = Math.min(col * stepX, source.width - tileWidth);
        const sy = Math.min(row * stepY, source.height - tileHeight);
        tileContext.drawImage(source.element, sx, sy, tileWidth, tileHeight, 0, 0, tileCanvas.width, tileCanvas.height);
        const tilePeople = (await state.model.detect(tileCanvas, CONFIG.maxDetectionsTile, thresholds.tileScore))
          .filter(p => p.class === 'person');
        const scaleX = tileWidth / tileCanvas.width;
        const scaleY = tileHeight / tileCanvas.height;
        const slack = CONFIG.tileEdgeSlack;
        tilePeople.forEach(p => {
          /* ???媛?μ옄由ъ뿉 ?우? 愿痢≪? ?щ엺???섎젮 ?섏삩 寃껋씠?? 蹂묓빀 ??             ???諛뺤뒪濡??곗? ?딅룄濡??쒖떆???붾떎. */
          const clipped = p.bbox[0] <= slack || p.bbox[1] <= slack ||
            (p.bbox[0] + p.bbox[2]) >= tileCanvas.width - slack ||
            (p.bbox[1] + p.bbox[3]) >= tileCanvas.height - slack;
          found.push(Object.assign({}, p, {
            bbox: [sx + p.bbox[0] * scaleX, sy + p.bbox[1] * scaleY, p.bbox[2] * scaleX, p.bbox[3] * scaleY],
            source: 'tile-' + row + '-' + col,
            clipped
          }));
        });
      }
    }
    tileContext.filter = 'none';
  }

  /* 2-b) ?뺣? 紐⑤뱶 ??醫뚯슦 諛섏쟾 ?꾨젅?꾩쓣 ??踰???蹂몃떎 (TTA).
     COCO-SSD ??醫뚯슦 鍮꾨?移??ㅼ감媛 ?덉뼱, ?쒖そ 諛⑺뼢?먯꽌留??≫엳????곸씠 ?덈떎.
     諛섏쟾 ?⑥뒪?먯꽌 ?섏삩 諛뺤뒪???먮낯 醫뚰몴濡??섎룎??媛숈? 蹂묓빀 ?④퀎濡??섍릿?? */
  if (state.precision && CONFIG.precisionFlipTta) {
    tileCanvas.width = CONFIG.tileCanvasWidth;
    tileCanvas.height = Math.max(320, Math.round(CONFIG.tileCanvasWidth * source.height / source.width));
    tileContext.filter = thresholds.filter;
    tileContext.save();
    tileContext.translate(tileCanvas.width, 0);
    tileContext.scale(-1, 1);
    tileContext.drawImage(source.element, 0, 0, tileCanvas.width, tileCanvas.height);
    tileContext.restore();
    const flipScore = Math.max(0.05, thresholds.fullScore - CONFIG.precisionScoreRelief);
    const flipped = (await state.model.detect(tileCanvas, CONFIG.maxDetectionsFull, flipScore))
      .filter(p => p.class === 'person');
    const fx = source.width / tileCanvas.width;
    const fy = source.height / tileCanvas.height;
    flipped.forEach(p => {
      const scaled = [p.bbox[0] * fx, p.bbox[1] * fy, p.bbox[2] * fx, p.bbox[3] * fy];
      found.push(Object.assign({}, p, {
        bbox: unflipBox(scaled, source.width),
        source: 'flip',
        clipped: false
      }));
    });
    tileContext.filter = 'none';
  }

  const rawCount = found.length;

  /* 3) 以묐났 蹂묓빀 ???뺥깭 ?꾪꽣 ???쒓컙??寃利?*/
  const candidates = clusterObservations(found).filter(p => isPlausiblePerson(p, thresholds.shape));
  const idRef = { value: camera.nextPersonId };
  const tracked = trackCandidates(candidates, camera.previousPeople, idRef);
  camera.nextPersonId = idRef.value;
  /* ?좉퉸 ?볦튇 ??곷룄 紐??꾨젅?꾩? 湲곗뼲???④릿????洹몃옒???뚮룄???좉꼈???섏삤??     ?щ엺??泥대쪟 ?쒓컙??珥덇린?붾릺吏 ?딄퀬 湲닿툒源뚯? ?щ씪媛????덈떎. */
  camera.previousPeople = carryTracks(tracked, camera.previousPeople);

  const people = tracked.filter(p =>
    p.hits >= thresholds.confirmFrames &&
    p.averageScore >= thresholds.minAverageScore &&
    p.sizeStable !== false
  );
  return { people, raw: rawCount };
}

/** 吏湲??덉슜??理쒕? ????? ?뺣? 紐⑤뱶硫????섍쾶 ?섎늿?? */
function maxTiles() {
  return state.precision
    ? { x: CONFIG.precisionTilesX, y: CONFIG.precisionTilesY }
    : { x: CONFIG.tilesX, y: CONFIG.tilesY };
}

/** 異붾줎 吏?곗뿉 ?곕씪 ????섎? ?먮룞?쇰줈 以꾩씠怨??섎┛?? */
function adaptWorkload(camera, latency) {
  const m = camera.metrics;
  m.latencyAvg = m.latencyAvg ? m.latencyAvg * 0.8 + latency * 0.2 : latency;
  const total = camera.activeTiles.x * camera.activeTiles.y;

  if (m.latencyAvg > CONFIG.latencyDegradeMs && total > 1) {
    camera.activeTiles = total > 2 ? { x: 2, y: 1 } : { x: 1, y: 1 };
    Diagnostics.log(camera.name + ' 쨌 ' + tr('degradedTiles', { tiles: camera.activeTiles.x * camera.activeTiles.y }), 'warn');
  } else if (m.latencyAvg < CONFIG.latencyRestoreMs && total < maxTiles().x * maxTiles().y) {
    camera.activeTiles = total < 2 ? { x: 2, y: 1 } : maxTiles();
    Diagnostics.log(camera.name + ' 쨌 ' + tr('restoredTiles', { tiles: camera.activeTiles.x * camera.activeTiles.y }), 'ok');
  }
}


'use strict';
let consecutiveErrors = 0;
let loopTimer = null;
/** 猷⑦봽媛 ?대? ?뚭퀬 ?덈뒗吏. ??蹂듦? ?뚮쭏??detectLoop() 瑜??덈줈 遺瑜대㈃
 *  異붾줎??吏꾪뻾 以묒씪 ?뚮뒗 痍⑥냼????대㉧媛 ?놁뼱 猷⑦봽媛 ?섎굹???섏뼱?쒕떎. */
let loopRunning = false;

/** 移대찓?쇰뱾??踰덇컝??泥섎━?쒕떎(?쇱슫?쒕줈鍮?.
 *  紐⑤뜽 ?몄뒪?댁뒪???섎굹瑜?怨듭쑀?섎?濡?GPU 硫붾え由щ뒗 移대찓???섏? 臾닿??섎떎.
 *  ???移대찓?쇰떦 媛먯떆 二쇨린????섏뿉 鍮꾨????섏뼱?섎ŉ, 洹?媛믪쓣 吏꾨떒 ?⑤꼸??洹몃?濡??몄텧?쒕떎. */
async function detectLoop() {
  if (!state.detecting) { loopRunning = false; return; }
  loopRunning = true;
  const active = activeCameras().filter(cameraReady);

  if (active.length && (state.model || active.some(c => c.simulating))) {
    const camera = active[state.rrIndex % active.length];
    state.rrIndex = (state.rrIndex + 1) % Math.max(1, active.length);
    const started = nowMs();
    try {
      let result;
      if (camera.simulating) {
        result = { people: camera.sim.syntheticPeople(), raw: camera.sim.rawCount() };
      } else if (state.model) {
        result = await detectPeople(camera);
      } else {
        result = { people: [], raw: 0 };
      }
      const latency = nowMs() - started;
      renderCamera(camera, result.people, sourceOf(camera));
      consecutiveErrors = 0;
      camera.errorStreak = 0;

      camera.metrics.latency = Math.round(latency);
      camera.metrics.raw = result.raw;
      camera.metrics.merged = result.people.length;
      camera.metrics.frames += 1;
      camera.metrics.cycle = (latency + CONFIG.baseInterval) / 1000 * active.length;
      if (!camera.simulating) adaptWorkload(camera, latency);
      updateAggregateMetrics(active, latency);
    } catch (error) {
      /* ?ㅻ쪟??移대찓?쇰퀎濡??쇰떎. ???媛 怨좎옣 ?щ떎怨??섎㉧吏 ?????媛먯떆源뚯?
         硫덉텛硫? ?뺤옉 硫姨≫븳 援ъ뿭??媛먯떆 怨듬갚???쒕떎. */
      camera.errorStreak = (camera.errorStreak || 0) + 1;
      consecutiveErrors += 1;
      Diagnostics.countError(camera.name + ' detect: ' + (error && error.message ? error.message : String(error)));

      if (camera.errorStreak >= CONFIG.maxConsecutiveErrors) {
        /* ??移대찓?쇰쭔 媛먯떆?먯꽌 ?대┛?? 議곗튂瑜??덉쑝誘濡??꾩뿭 移댁슫?곕룄 ?섎룎由곕떎 */
        camera.errorStreak = 0;
        consecutiveErrors = 0;
        camera.error = (error && error.message) ? error.message : String(error);
        handleStreamLoss(camera, 'detect error');
        Diagnostics.log(tr('cameraDropped', { name: camera.name }), 'error');

        /* ?⑥? 移대찓?쇨? ?섎굹???놁쓣 ?뚮쭔 ?꾩껜 ?뺤?濡??뚮┛??*/
        if (!activeCameras().filter(cameraReady).length) {
          state.halted = true;
          setHealth('healthError', 'bad');
          state.lastError = tr('loopHaltedHelp');
          statusTitle.textContent = tr('loopHalted');
          statusText.textContent = tr('loopHaltedHelp');
          Diagnostics.log(tr('loopHalted'), 'error');
        } else {
          state.lastError = tr('cameraDropped', { name: camera.name });
          setHealth('healthRecovering', 'warn');
        }
      }
    }
  }

  if (state.detecting) {
    const interval = document.hidden ? CONFIG.backgroundInterval : CONFIG.baseInterval;
    loopTimer = setTimeout(detectLoop, interval);
  } else {
    loopRunning = false;
  }
}

function updateAggregateMetrics(active, latency) {
  const m = state.metrics;
  m.latency = Math.round(latency);
  m.frames += 1;
  m.cycle = (latency + CONFIG.baseInterval) / 1000 * Math.max(1, active.length);
  m.fps = m.cycle > 0 ? 1 / m.cycle : 0;
  m.tiles = active.reduce((sum, c) => sum + c.activeTiles.x * c.activeTiles.y, 0);
  m.raw = active.reduce((sum, c) => sum + c.metrics.raw, 0);
  m.merged = active.reduce((sum, c) => sum + c.metrics.merged, 0);
  /* ?꾪뙥??吏?쒖뿉???ㅼ젣 紐⑤뜽 異붾줎?쇰줈 痢≪젙??二쇨린留?諛섏쁺?쒕떎. */
  if (active.some(c => !c.simulating)) m.realCycle = m.cycle;
  refreshMetrics();
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   15. ?뚮뜑留?쨌 寃쎈낫 ?밴꺽 (移대찓?쇰퀎)
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function renderCamera(camera, people, source) {
  camera.detections.innerHTML = '';
  /* 援곗쨷 ?λ㈃ ?????媛먯????щ엺??留롮쓣?섎줉 ?쇰꺼???쒕줈 寃뱀퀜 ?곸긽 ?먯껜瑜?     媛由곕떎. ?щ엺 ?섏뿉 ?곕씪 ?쇰꺼 ?쒖떆?됱쓣 ?④퀎?곸쑝濡?以꾩씤??諛뺤뒪???좎?). */
  camera.detections.classList.toggle('crowded', people.length >= CONFIG.crowdedLabelFrom);
  camera.detections.classList.toggle('dense', people.length >= CONFIG.denseLabelFrom);
  const rect = viewRect(camera);
  const width = source.width || 1, height = source.height || 1;
  const scale = Math.max(rect.width / width, rect.height / height);
  const offsetX = (rect.width - width * scale) / 2;
  const offsetY = (rect.height - height * scale) / 2;
  /* 移대찓?쇨? ?吏곸씠???숈븞?먮뒗 ?붾㈃ 醫뚰몴 湲곗? 寃쎄퀎?좎씠 臾댁쓽誘명븯誘濡??먯젙??硫덉텣?? */
  const boundaryOn = $('#boundaryDetection').checked && !camera.motion.moving;
  const riskIds = new Set();
  const now = Date.now();

  people.forEach(person => {
    const [x, y, w, h] = person.bbox;
    const left = x * scale + offsetX, top = y * scale + offsetY;
    const box = {
      left: left / rect.width, right: (left + w * scale) / rect.width,
      top: top / rect.height, bottom: (top + h * scale) / rect.height
    };
    const crossed = boundaryOn && isInDangerZone(box, camera.points, camera.zoneMode);
    const distant = (w * h) / (width * height) < 0.012;
    const since = crossed ? (camera.riskSince.get(person.id) || now) : 0;
    const dwell = crossed ? (now - since) / 1000 : 0;

    const element = document.createElement('div');
    let severity = '';
    if (crossed) severity = dwell >= state.escalateSeconds ? ' critical'
      : (dwell * 1000 >= CONFIG.watchToAlertMs ? ' near' : ' watch');
    element.className = 'detection-box' + (distant ? ' distant' : '') + severity;
    element.style.left = left + 'px';
    element.style.top = top + 'px';
    element.style.width = (w * scale) + 'px';
    element.style.height = (h * scale) + 'px';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = crossed
      ? tr('lineAlert') + ' #' + person.id + ' 쨌 ' + dwell.toFixed(0) + tr('unitSeconds')
      : tr(distant ? 'distantPerson' : 'person') + ' ' + Math.round(person.score * 100) + '%';
    element.append(tag);
    camera.detections.append(element);
    if (crossed) riskIds.add(person.id);
  });

  /* ?꾪뿕 ???泥대쪟 ?쒓컙 媛깆떊.
     ?щ씪議뚮떎怨?利됱떆 吏?곕㈃ ???꾨젅?꾨쭔 ?볦퀜??泥대쪟 ?쒓컙??0?쇰줈 ?뚯븘媛
     湲닿툒 ?밴꺽???곸쁺 ?쇱뼱?섏? ?딅뒗?? 吏㏃? ?좎삁瑜??먭퀬 ?뺣━?쒕떎. */
  riskIds.forEach(id => {
    if (!camera.riskSince.has(id)) camera.riskSince.set(id, now);
    camera.riskSeen.set(id, now);
  });
  Array.from(camera.riskSince.keys()).forEach(id => {
    const lastSeen = camera.riskSeen.get(id) || 0;
    if (now - lastSeen > CONFIG.riskGraceMs) {
      camera.riskSince.delete(id);
      camera.riskSeen.delete(id);
    }
  });

  /* ?꾪뿕 援ъ뿭 ?몄썝 ??= 吏湲??붾㈃??洹몃젮吏?諛뺤뒪 以?援ъ뿭 ?덉뿉 ?덈뒗 寃껋쓽 媛쒖닔.
     諛붾떎?먯꽌??硫由??덈뒗 ?щ윭 ?щ엺??媛곴컖 ?섎굹??諛뺤뒪濡??≫엳誘濡? 諛뺤뒪 媛쒖닔媛
     洹몃?濡??몄썝 ?섍? ?섏뼱??"2紐??덉뒿?덈떎"媛 ?붾㈃怨??쇱튂?쒕떎. */
  camera.riskCount = riskIds.size;
  /* ?좎삁瑜??ы븿???? ???꾨젅???볦낀?????곹솴???앸궃 寃껋쑝濡??ㅽ뙋?섏? ?딄린 ?꾪빐
     '?꾩쭅 吏꾪뻾 以묒씤媛'瑜??먮떒???뚮쭔 ?대떎. */
  camera.riskTracked = camera.riskSince.size;
  let maxDwell = 0;
  camera.riskSince.forEach(since => { maxDwell = Math.max(maxDwell, (now - since) / 1000); });
  updateCameraAlert(camera, camera.riskCount, maxDwell, camera.riskTracked);
  updateAggregateAlert();
}


'use strict';
/** none ??watch ??alert ??critical.
 *  ?⑤컻 ?ㅽ깘??怨㏓컮濡??ъ씠?뚯쑝濡??댁뼱吏吏 ?딄쾶 ?섎뒗 寃껋씠 ???④퀎??紐⑹쟻?대떎. */
function updateCameraAlert(camera, count, dwellSeconds, trackedCount) {
  /* ?깃툒? ?좎삁瑜??ы븿???섎줈 ?먮떒?쒕떎(???꾨젅??源쒕묀??ㅺ퀬 ?곹솴???앸궃 寃껋씠
     ?꾨땲??. 諛섎㈃ ?щ엺 ?섎뒗 ?붾㈃??諛뺤뒪 媛쒖닔瑜?洹몃?濡??대떎. */
  const ongoing = typeof trackedCount === 'number' ? trackedCount : count;
  let level = 'none';
  if (ongoing > 0) {
    if (dwellSeconds >= state.escalateSeconds) level = 'critical';
    else if (dwellSeconds * 1000 >= CONFIG.watchToAlertMs) level = 'alert';
    else level = 'watch';
  }
  const changed = level !== camera.alertLevel;
  const escalated = changed && (level === 'alert' || level === 'critical');
  if (level === 'none' && changed) {
    /* ?곹솴???댁냼?섎㈃ ?섏떊?먮퀎 ?깃툒 湲곗뼲??珥덇린?뷀븳?? ?ㅼ쓬 ?ш굔??泥?寃쎄퀬媛
       吏곸쟾 ?ш굔 ?뚮Ц???듭젣?섏? ?딅룄濡? */
    state.contacts.forEach(c => { c.lastLevelRank = 0; });
    camera.lastAlertCount = 0;
    /* ?곹솴???댁냼?먮떎 ???꾨Т???뺤씤?섏? ?딆븯?ㅻ㈃ ??嫄댁? ?쒕낯???ｌ? ?딅뒗??
       ?뺤씤?섏? ?딆? 寃껋쓣 0珥덈줈 ?몃㈃ 吏?쒓? 醫뗭븘 蹂댁씠??諛⑺뼢?쇰줈 ?쒓끝?쒕떎. */
    NorthStar.clear(camera);
    refreshNorthStar();
  }
  camera.alertLevel = level;
  camera.lastDwell = dwellSeconds;
  updatePanelLevel(camera);

  /* ?щ엺?????섏뼱??寃껋? ?덈줈???ш굔?대떎. ?깃툒??洹몃?濡쒕씪???댁쑀濡??뚮┝??     ?듭젣?섎㈃, ?붾㈃?먮뒗 2紐낆씤???대떦?먮뒗 "1紐??대씪怨좊쭔 ?꾨떖諛쏄쾶 ?쒕떎.
     ?섏뼱?ъ쓣 ?뚮쭔 ?ㅼ떆 蹂대궡怨? 以꾩뼱???뚮뒗 蹂대궡吏 ?딅뒗??寃쎈낫 ?쇰줈 諛⑹?). */
  const grew = count > (camera.lastAlertCount || 0);
  const reported = Math.max(count, 1);

  if (level === 'alert' && (changed || grew || Date.now() - camera.lastAlertAt > CONFIG.alertCooldownMs)) {
    raiseAlert(camera, 'alert', reported, dwellSeconds);
  } else if (level === 'critical' && (changed || grew || Date.now() - camera.lastCriticalAt > CONFIG.criticalRepeatMs)) {
    raiseAlert(camera, 'critical', reported, dwellSeconds);
  }

  /* 寃쎈낫媛 ??移대찓?쇰뒗 ?먮룞?쇰줈 ?ш쾶 ?꾩슫????愿?쒖슂?먯씠 李얠븘 ?ㅻℓ吏 ?딅룄濡? */
  if (escalated && camera.id !== state.focusedId && state.cameras.length > 1) {
    focusCamera(camera.id);
    Diagnostics.log(tr('camAlertFocus', { name: camera.name }), 'warn');
  }
  if (changed) renderCameraBar();
}

const LEVEL_RANK = { none: 0, watch: 1, alert: 2, critical: 3 };


'use strict';
/** ?щ윭 移대찓??以?媛???꾪뿕???곹깭瑜??ъ씠?쒕컮????쒕줈 ?쒖떆?쒕떎. */
function updateAggregateAlert() {
  const cams = activeCameras();
  const worst = cams.reduce((acc, c) => (LEVEL_RANK[c.alertLevel] > LEVEL_RANK[acc.alertLevel] ? c : acc),
    cams[0] || { alertLevel: 'none', riskCount: 0, name: '', lastDwell: 0 });
  const total = cams.reduce((sum, c) => sum + c.riskCount, 0);

  state.alertLevel = worst.alertLevel;
  $('#detectCount').textContent = String(total);
  if (total > state.metrics.peak) state.metrics.peak = total;

  const prefix = state.cameras.length > 1 && worst.name ? worst.name + ' 쨌 ' : '';

  if (worst.alertLevel === 'none') {
    /* 寃쎈낫媛 ?놁쓣 ?뚮뒗 留덉?留??ㅽ뙣 ?ъ쑀瑜?怨꾩냽 蹂댁뿬 以?? ?덉쟾?먮뒗 媛먯?
       猷⑦봽媛 留??꾨젅?????먮━瑜?'媛먯떆 以??쇰줈 ??뼱?⑥꽌, 移대찓??沅뚰븳 嫄곕???       ?섎せ??二쇱냼 媛숈? ?덈궡媛 ???꾨젅??留뚯뿉 ?щ씪議뚮떎. */
    if (state.lastError) {
      stateChip.textContent = tr('levelWatch');
      stateChip.className = 'state watch';
      statusTitle.textContent = tr('needsAttention');
      statusText.textContent = state.lastError;
      return;
    }
    stateChip.textContent = state.detecting ? 'LIVE' : tr('ready');
    stateChip.className = 'state';
    statusTitle.textContent = tr(state.detecting ? 'monitoring' : 'waiting');
    statusText.textContent = state.detecting
      ? (cams.length > 1
          ? tr('cycleShared', { count: cams.length, seconds: state.metrics.cycle.toFixed(2) })
          : tr('monitoringText'))
      : tr('readyText');
    return;
  }
  if (worst.alertLevel === 'watch') {
    stateChip.textContent = tr('levelWatch');
    stateChip.className = 'state watch';
    statusTitle.textContent = prefix + tr('watchTitle');
    statusText.textContent = tr('watchText', { count: total });
    return;
  }
  if (worst.alertLevel === 'alert') {
    stateChip.textContent = 'ALERT';
    stateChip.className = 'state alert';
    statusTitle.textContent = prefix + tr('alertTitle');
    statusText.textContent = tr('alertCount', { count: total });
    return;
  }
  stateChip.textContent = tr('levelCritical');
  stateChip.className = 'state critical';
  statusTitle.textContent = prefix + tr('criticalTitle');
  statusText.textContent = tr('criticalText', { count: total, seconds: Math.round(worst.lastDwell || 0) });
}


'use strict';
function raiseAlert(camera, level, count, dwellSeconds) {
  const now = Date.now();
  camera.lastAlertAt = now;
  camera.lastAlertCount = count;
  if (level === 'critical') camera.lastCriticalAt = now;
  state.metrics.alerts += 1;
  refreshMetrics();

  const levelLabel = tr(level === 'critical' ? 'levelCritical' : 'levelAlert');
  /* 寃쎈낫媛 ???쒓컙???붾㈃???④퍡 ?④릿?????섏쨷???ㅽ깘?댁뿀?붿? ?뺤씤?섍린 ?꾪빐?쒕떎.
     ???대?吏??硫붾え由ъ뿉留??덇퀬 ??Β룹쟾?〓릺吏 ?딅뒗?? */
  const snapshot = captureSnapshot(camera);
  /* 遺곴레??吏???????щ엺???꾪뿕 援ъ뿭??'?ㅼ뼱媛??쒓컙'遺???ш린 ?쒖옉?쒕떎.
     寃쎈낫媛 ???쒓컖???꾨땲??吏꾩엯 ?쒓컖?댁뼱?? 媛먯?媛 ??뼱吏?寃껊룄 ?レ옄???≫엺?? */
  let enteredAt = Date.now();
  camera.riskSince.forEach(since => { enteredAt = Math.min(enteredAt, since); });
  NorthStar.open(camera, enteredAt);
  pushEvent(camera.name + ' 쨌 ' + tr('eventAlert', { level: levelLabel, count }),
    level === 'critical' ? 'error' : 'warn',
    { level, count, dwell: Math.round(dwellSeconds), camera: camera.name, snapshot });
  liveRegion.textContent = camera.name + ' ' + tr('adminAlertBody', { level: levelLabel, count });

  /* 媛먯떆 ?쒓컙? 諛뽰씠硫??붾㈃ ?쒖떆? 湲곕줉? ?④린???뚮━쨌諛쒖넚? ?섏? ?딅뒗??
     ?쇨컙 ?ㅽ깘?쇰줈 寃쎈낫 ?쇰줈媛 ?볦씠硫??뺤옉 ?꾩슂??寃쎈낫源뚯? 臾댁떆?섍쾶 ?쒕떎. */
  if (!watchHoursActive()) {
    Diagnostics.log(tr('hoursMuted', { name: camera.name }), 'info');
    return;
  }

  playSiren(level);
  Speaker.speak(buildVoiceMessage(camera, level, count, dwellSeconds), camera.id + ':' + level);
  notifyRecipients(camera, level, levelLabel, count, dwellSeconds, false);
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   15-b. ?뚮┝ ?섏떊????寃쎈낫瑜??붾㈃ 諛뽰쓽 ?щ엺?먭쾶 ?ㅼ젣濡?蹂대궦??   ??????????????????????????????????????????????????????????????????
   釉뚮씪?곗?留뚯쑝濡쒕뒗 臾몄옄쨌?대찓?쇱쓣 ?먮룞 諛쒖넚?????녿떎. 洹몃옒???듬낫 寃쎈줈瑜?   ?뗭쑝濡??섎댋??
     1) 釉뚮씪?곗? ?뚮┝  ??愿??PC?먯꽌 ??씠 媛?ㅼ졇 ?덉뼱???щ떎
     2) ?뱁썒 POST      ??Slack쨌Discord쨌?щ궡 ?쒕쾭 ???ㅼ젣 ?꾨떖 寃쎈줈
     3) ?먰꽣移??곌껐    ??寃쎈낫 李쎌쓽 ?꾪솕/臾몄옄/硫붿씪 踰꾪듉 (?щ엺???꾨Ⅸ??
   臾댁뾿???먮룞?닿퀬 臾댁뾿???щ엺 ?먯쓣 嫄곗튂?붿? ?붾㈃??洹몃?濡?諛앺엺??
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */

let contactSeq = 0;

function contactStorageKey() { return 'beachWatchContacts'; }

/** ?낅젰媛믪쓣 寃利앺빐 ???媛?ν븳 ?섏떊??媛앹껜濡?留뚮뱺?? ?쒖닔 ?⑥닔???먭? 吏꾨떒??寃利앺븳?? */
function normalizeContact(input) {
  const name = String(input.name || '').trim();
  if (!name) return { error: 'errContactName' };

  const phone = String(input.phone || '').trim();
  const email = String(input.email || '').trim();
  const webhook = String(input.webhook || '').trim();
  if (!phone && !email && !webhook) return { error: 'errContactChannel' };

  if (webhook) {
    let parsed;
    try { parsed = new URL(webhook); } catch (e) { return { error: 'errContactWebhook' }; }
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return { error: 'errContactWebhook' };
  }

  return {
    contact: {
      id: input.id || ('ct' + (++contactSeq)),
      name,
      role: String(input.role || '').trim(),
      phone, email, webhook,
      minLevel: input.minLevel === 'critical' ? 'critical' : 'alert',
      onDuty: input.onDuty !== false,
      lastSentAt: 0
    }
  };
}

function persistContacts() {
  store.set(contactStorageKey(), JSON.stringify(state.contacts.map(c =>
    ({ id: c.id, name: c.name, role: c.role, phone: c.phone, email: c.email,
       webhook: c.webhook, minLevel: c.minLevel, onDuty: c.onDuty }))));
}

function restoreContacts() {
  try {
    const parsed = JSON.parse(store.get(contactStorageKey(), '[]'));
    if (!Array.isArray(parsed)) return;
    parsed.slice(0, CONFIG.maxContacts).forEach(raw => {
      const result = normalizeContact(raw);
      if (result.contact) {
        state.contacts.push(result.contact);
        const n = Number(String(result.contact.id).replace(/\D/g, ''));
        if (n > contactSeq) contactSeq = n;
      }
    });
  } catch (e) { /* ?먯긽????κ컪? 臾댁떆?쒕떎 */ }
}

/** ???깃툒??寃쎈낫瑜?諛쏆븘?????щ엺?? 洹쇰Т 以?+ ?섏떊 ?쒖옉 ?깃툒 ?댁긽. */
function contactsForLevel(level, contacts) {
  const list = contacts || state.contacts;
  const rank = LEVEL_RANK[level] || 0;
  return list.filter(c => c.onDuty && rank >= LEVEL_RANK[c.minLevel]);
}

/** ?뱁썒?쇰줈 蹂대궪 蹂몃Ц. 諛쏅뒗 履쎌씠 ?뚯떛?섍린 ?쎈룄濡??됲룊??援ъ“濡??붾떎. */
function buildAlertPayload(camera, level, count, dwellSeconds, contact, isTest) {
  return {
    type: 'beach-watch-alert',
    test: Boolean(isTest),
    level,
    site: state.siteType,
    camera: camera ? camera.name : '',
    zoneMode: camera ? camera.zoneMode : 'line',
    peopleInZone: count,
    dwellSeconds: Math.round(dwellSeconds || 0),
    recipient: { name: contact.name, role: contact.role },
    message: isTest ? tr('testAlertBody')
      : tr('adminAlertBody', { level: tr(level === 'critical' ? 'levelCritical' : 'levelAlert'), count }),
    timestamp: new Date().toISOString()
  };
}

function sendWebhook(contact, payload) {
  if (!contact.webhook) return Promise.resolve(false);
  /* Content-Type ??application/json ?쇰줈 ?먮㈃ 釉뚮씪?곗?媛 癒쇱? OPTIONS
     ?ъ쟾 ?붿껌??蹂대궡?붾뜲, Slack쨌Discord ?뱁썒? ?ш린???묐떟?섏? ?딆븘 ?ㅼ젣
     寃쎈낫媛 ?꾨? ?ㅽ뙣?쒕떎. text/plain ? ?ъ쟾 ?붿껌???녾퀬 諛쏅뒗 履쎌?
     蹂몃Ц JSON ??洹몃?濡??쎈뒗??
     洹몃━怨??묐떟 ?녿뒗 ?쒕쾭???붿껌??臾댄븳??留ㅻ떖由ъ? ?딅룄濡??쒓컙 ?쒗븳???붾떎. */
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    body: JSON.stringify(payload),
    mode: 'cors',
    keepalive: true
  };
  try {
    if (typeof AbortSignal !== 'undefined' && AbortSignal.timeout) {
      options.signal = AbortSignal.timeout(CONFIG.webhookTimeoutMs);
    }
  } catch (e) { /* 援ы삎 釉뚮씪?곗????쒓컙 ?쒗븳 ?놁씠 吏꾪뻾 */ }
  return fetch(contact.webhook, options).then(response => {
    if (!response.ok) throw new Error('HTTP ' + response.status);
    Diagnostics.log(tr('notifyWebhookOk', { name: contact.name }), 'ok');
    return true;
  }).catch(error => {
    /* ?遺遺꾩? ?섏떊 ?쒕쾭??CORS ?ㅼ젙 ?뚮Ц?대떎. 議곗슜???쇳궎吏 ?딄퀬 ?댁쑀瑜??④릿?? */
    Diagnostics.log(tr('notifyWebhookFail', { name: contact.name, reason: error.message }), 'error');
    return false;
  });
}


'use strict';
/** 吏湲????щ엺?먭쾶 蹂대궡???섎뒗媛.
 *  @param contact ?섏떊??(lastSentAt, lastLevelRank 瑜??곹깭濡?媛뽯뒗??
 *  @param level   'watch' | 'alert' | 'critical'
 *  @param now     ?꾩옱 ?쒓컖(ms) */
function shouldSendNow(contact, level, now) {
  const rank = LEVEL_RANK[level] || 0;
  if (rank > (contact.lastLevelRank || 0)) return true;           // ?깃툒 ?곸듅? ??긽 ?듦낵
  return now - (contact.lastSentAt || 0) > CONFIG.contactThrottleMs;
}

function notifyRecipients(camera, level, levelLabel, count, dwellSeconds, isTest, only) {
  const message = camera
    ? camera.name + ' ??' + tr('adminAlertBody', { level: levelLabel, count })
    : tr('testAlertBody');

  const recipients = only ? [only] : contactsForLevel(level);
  const now = Date.now();
  /* 媛숈? ?щ엺?먭쾶 紐?珥?媛꾧꺽?쇰줈 諛섎났 諛쒖넚?섏? ?딅뒗??寃쎈낫 ?쇰줈 諛⑹?).
     ?? ?깃툒???щ씪媛?寃쎌슦(寃쎄퀬 ??湲닿툒)??諛섎뱶???듦낵?쒗궓?? ?곹솴???섎튌議뚮떎??     ?ъ떎??議곗슜??臾삵엳硫??듭젣 濡쒖쭅???ㅽ엳???꾪뿕?댁쭊?? */
  const targets = isTest ? recipients : recipients.filter(c => shouldSendNow(c, level, now));

  /* ?붾㈃ ?좎뒪?몄뿉??'吏湲?蹂대궦 ?щ엺'???꾨땲??'??寃쎈낫瑜?留≪? ?щ엺'??蹂댁뿬 以??
     諛섎났 寃쎈낫?먯꽌 諛쒖넚???듭젣?섎뜑?쇰룄 ?꾪솕쨌臾몄옄 踰꾪듉? 怨꾩냽 ?⑥븘 ?덉뼱???섍린 ?뚮Ц?대떎. */
  showAlertToast(message, recipients, level);

  if ($('#adminNotification').checked) {
    try {
      if ('Notification' in window && Notification.permission === 'granted') {
        const who = targets.length ? ' 쨌 ' + tr('toastRecipients', { names: targets.map(c => c.name).join(', ') }) : '';
        new Notification(tr('adminAlertTitle'), { body: message + who, tag: 'beach-boundary-alert' });
      }
    } catch (e) { /* ?쇰? 釉뚮씪?곗???臾몄꽌 而⑦뀓?ㅽ듃?먯꽌 Notification ?앹꽦??留됰뒗??*/ }
  }

  if (!state.contacts.length) {
    if (!isTest) Diagnostics.log(tr('notifyNoRecipients'), 'warn');
    return targets;
  }

  targets.forEach(contact => {
    /* ?쒗뿕 諛쒖넚? ?ㅼ젣 寃쎈낫??以묐났 諛⑹? ?쒓퀎瑜?嫄대뱶由щ㈃ ???쒕떎.
       ?뚯뒪??吏곹썑 吏꾩쭨 寃쎄퀬媛 ?⑤㈃ 洹??щ엺留?紐?諛쏄쾶 ?섍린 ?뚮Ц?대떎. */
    if (!isTest) {
      contact.lastSentAt = now;
      contact.lastLevelRank = LEVEL_RANK[level] || 0;
    }
    Diagnostics.log(tr(isTest ? 'notifyTestSent' : 'notifySent', { name: contact.name }), 'info');
    if (contact.webhook) sendWebhook(contact, buildAlertPayload(camera, level, count, dwellSeconds, contact, isTest));
  });
  if (!targets.length && !isTest) Diagnostics.log(tr('notifyNoRecipients'), 'warn');
  return targets;
}

/** 寃쎈낫 ?좎뒪?????섏떊???대쫫怨??먰꽣移??곌껐 踰꾪듉???④퍡 ?꾩슫?? */
function showAlertToast(message, targets, level) {
  $('#adminToastText').textContent = message;
  let actions = $('.toast-actions', adminToast);
  if (!actions) {
    actions = document.createElement('div');
    actions.className = 'toast-actions';
    adminToast.append(actions);
  }
  actions.innerHTML = '';

  if (targets.length) {
    const names = document.createElement('div');
    names.style.cssText = 'width:100%;font-size:11.5px;opacity:.85';
    names.textContent = tr('toastRecipients', { names: targets.map(c => c.name).join(', ') });
    actions.append(names);
  }
  /* ?먮룞 諛쒖넚??留됲엳???섍꼍(臾몄옄쨌?대찓???먯꽌???щ엺????踰??뚮윭 諛붾줈 ?곌껐?쒕떎. */
  targets.slice(0, 3).forEach(contact => {
    if (contact.phone) {
      actions.append(toastLink('tel:' + contact.phone.replace(/[^0-9+]/g, ''), contact.name + ' ' + tr('actionCall')));
      actions.append(toastLink('sms:' + contact.phone.replace(/[^0-9+]/g, ''), tr('actionSms')));
    }
    if (contact.email) {
      actions.append(toastLink('mailto:' + contact.email + '?subject=' + encodeURIComponent('[Beach Watch] ' + message), tr('actionMail')));
    }
  });

  /* 遺곴레??吏?쒕? 留뚮뱶????踰덉쓽 ?대┃.
     ?대떦?먭? ?곹솴???ㅼ젣濡??몄????쒖젏???쒗뭹??吏곸젒 湲곕줉?쒕떎. */
  const ack = document.createElement('button');
  ack.type = 'button';
  ack.id = 'ackAlert';
  ack.className = 'toast-ack';
  ack.textContent = tr('nsAckButton');
  ack.addEventListener('click', acknowledgeAlert);
  actions.append(ack);

  adminToast.classList.add('show');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => adminToast.classList.remove('show'), level === 'critical' ? 12000 : 6000);
}

function toastLink(href, label) {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = label;
  link.rel = 'noopener';
  return link;
}

/** 釉뚮씪?곗? ?뚮┝ ?덉슜 ?곹깭瑜?踰꾪듉??洹몃?濡?鍮꾩텣??
 *  "?뚮┝??????????遺遺꾩? 沅뚰븳??爰쇱졇 ?덉뼱?쒕떎. ?곹깭瑜??④린吏 ?딅뒗?? */
function refreshAlertToggle() {
  const button = $('#enableAlerts');
  if (!button) return;
  const supported = 'Notification' in window;
  const permission = supported ? Notification.permission : 'denied';
  button.classList.toggle('on', permission === 'granted');
  button.classList.toggle('blocked', permission === 'denied');
  button.textContent = tr(permission === 'granted' ? 'alertsEnabled'
    : permission === 'denied' ? 'alertsBlocked' : 'enableAlerts');
  button.disabled = !supported;
}

function enableBrowserAlerts() {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'denied') {
    Diagnostics.log(tr('alertsDenied'), 'warn');
    refreshAlertToggle();
    return;
  }
  Promise.resolve(Notification.requestPermission()).then(result => {
    Diagnostics.log(tr(result === 'granted' ? 'alertsGranted' : 'alertsDenied'), result === 'granted' ? 'ok' : 'warn');
    refreshAlertToggle();
  }).catch(() => refreshAlertToggle());
}


'use strict';
/* ?? ?섏떊??紐⑸줉 UI ??????????????????????????????????????????????? */
function renderContacts() {
  const list = $('#contactList');
  const empty = $('#contactEmpty');
  if (!list) return;
  list.innerHTML = '';
  empty.style.display = state.contacts.length ? 'none' : 'block';

  state.contacts.forEach(contact => {
    const row = document.createElement('div');
    row.className = 'contact-row' + (contact.onDuty ? '' : ' off');

    const head = document.createElement('b');
    head.textContent = contact.name + (contact.role ? ' 쨌 ' + contact.role : '');
    row.append(head);

    const ops = document.createElement('div');
    ops.className = 'ops';
    ops.append(
      opButton(tr(contact.onDuty ? 'contactOnDuty' : 'contactOffDuty'), () => toggleContactDuty(contact.id)),
      opButton(tr('testContact'), () => testContact(contact.id)),
      opButton(tr('editContact'), () => openContactDialog(contact.id)),
      opButton(tr('removeContact'), () => removeContact(contact.id))
    );
    row.append(ops);

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = [contact.phone, contact.email, contact.webhook].filter(Boolean).join(' 쨌 ') || '??;
    row.append(meta);

    const badges = document.createElement('div');
    badges.className = 'badges2';
    const level = document.createElement('span');
    level.textContent = tr(contact.minLevel === 'critical' ? 'levelCriticalOnly' : 'levelAlertOnly');
    if (contact.minLevel === 'critical') level.className = 'crit';
    badges.append(level);
    if (contact.webhook) { const w = document.createElement('span'); w.textContent = 'WEBHOOK'; badges.append(w); }
    if (contact.phone) { const t = document.createElement('span'); t.textContent = 'TEL'; badges.append(t); }
    if (contact.email) { const e = document.createElement('span'); e.textContent = 'MAIL'; badges.append(e); }
    row.append(badges);

    list.append(row);
  });

  const addButton = $('#addContact');
  if (addButton) {
    addButton.textContent = tr('addContact');
    addButton.disabled = state.contacts.length >= CONFIG.maxContacts;
  }
  refreshAlertToggle();
}

function opButton(label, handler) {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = label;
  button.addEventListener('click', handler);
  return button;
}

let editingContactId = null;

function openContactDialog(id) {
  editingContactId = id || null;
  const contact = id ? state.contacts.find(c => c.id === id) : null;
  $('#contactName').value = contact ? contact.name : '';
  $('#contactRole').value = contact ? contact.role : '';
  $('#contactPhone').value = contact ? contact.phone : '';
  $('#contactEmail').value = contact ? contact.email : '';
  $('#contactWebhook').value = contact ? contact.webhook : '';
  $('#contactMinLevel').value = contact ? contact.minLevel : 'alert';
  $('#contactTitle').textContent = tr(contact ? 'contactDialogEditTitle' : 'contactDialogTitle');
  $('#contactError').classList.remove('on');
  const dialog = $('#contactDialog');
  if (dialog.showModal) dialog.showModal(); else dialog.setAttribute('open', '');
}

function saveContact(event) {
  const result = normalizeContact({
    id: editingContactId,
    name: $('#contactName').value,
    role: $('#contactRole').value,
    phone: $('#contactPhone').value,
    email: $('#contactEmail').value,
    webhook: $('#contactWebhook').value,
    minLevel: $('#contactMinLevel').value,
    onDuty: editingContactId ? (state.contacts.find(c => c.id === editingContactId) || {}).onDuty !== false : true
  });
  if (result.error) {
    event.preventDefault();
    const box = $('#contactError');
    box.textContent = tr(result.error);
    box.classList.add('on');
    return;
  }
  event.preventDefault();
  $('#contactDialog').close();

  if (editingContactId) {
    const index = state.contacts.findIndex(c => c.id === editingContactId);
    if (index >= 0) state.contacts[index] = result.contact;
    Diagnostics.log(tr('contactUpdated', { name: result.contact.name }), 'ok');
  } else {
    if (state.contacts.length >= CONFIG.maxContacts) return;
    state.contacts.push(result.contact);
    Diagnostics.log(tr('contactAdded', { name: result.contact.name }), 'ok');
    requestNotificationPermission();
  }
  editingContactId = null;
  persistContacts();
  renderContacts();
}

function removeContact(id) {
  const index = state.contacts.findIndex(c => c.id === id);
  if (index < 0) return;
  const [removed] = state.contacts.splice(index, 1);
  Diagnostics.log(tr('contactRemoved', { name: removed.name }), 'info');
  persistContacts();
  renderContacts();
}

function toggleContactDuty(id) {
  const contact = state.contacts.find(c => c.id === id);
  if (!contact) return;
  contact.onDuty = !contact.onDuty;
  Diagnostics.log(tr(contact.onDuty ? 'contactDutyOn' : 'contactDutyOff', { name: contact.name }), 'info');
  persistContacts();
  renderContacts();
}

function testContact(id) {
  const contact = state.contacts.find(c => c.id === id);
  if (!contact) return;
  requestNotificationPermission();
  notifyRecipients(focusedCamera(), 'alert', tr('levelAlert'), 0, 0, true, contact);
  pushEvent(tr('notifyTestSent', { name: contact.name }), 'info', { camera: focusedCamera().name });
}


'use strict';
/** 寃쎄퀬???⑤컻 鍮꾪봽, 湲닿툒? ?곹븯 ?ㅼ쐲 ?ъ씠?? AudioContext????踰덈쭔 留뚮뱾???ъ궗?⑺븳?? */
function playSiren(level) {
  if (!$('#sirenEnabled').checked) return;
  try {
    if (!state.audioContext) state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const context = state.audioContext;
    if (context.state === 'suspended') context.resume();
    const start = context.currentTime;
    const beeps = level === 'critical' ? 3 : 1;
    for (let i = 0; i < beeps; i++) {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.connect(gain); gain.connect(context.destination);
      const at = start + i * 0.32;
      oscillator.type = level === 'critical' ? 'sawtooth' : 'sine';
      oscillator.frequency.setValueAtTime(level === 'critical' ? 660 : 880, at);
      if (level === 'critical') oscillator.frequency.linearRampToValueAtTime(1180, at + 0.26);
      gain.gain.setValueAtTime(level === 'critical' ? 0.08 : 0.05, at);
      gain.gain.exponentialRampToValueAtTime(0.001, at + 0.28);
      oscillator.start(at); oscillator.stop(at + 0.3);
    }
  } catch (e) {
    Diagnostics.log('audio: ' + e.message, 'warn');
  }
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   16. ?대깽??濡쒓렇
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function pushEvent(message, kind, extra) {
  const at = new Date();
  state.events.unshift(Object.assign({
    at: at.toISOString(),
    label: at.toLocaleTimeString(activeLocale().locale, { hour12: false }),
    message, kind: kind || 'info'
  }, extra || {}));
  if (state.events.length > CONFIG.maxEvents) state.events.length = CONFIG.maxEvents;
  /* ?ㅻ깄?룹? ?⑸웾???щ떎. 理쒓렐 寃껊쭔 ?대?吏瑜??ㅺ퀬 ?섎㉧吏???띿뒪?몃쭔 ?④릿?? */
  state.events.forEach((e, i) => { if (i >= CONFIG.maxSnapshots && e.snapshot) e.snapshot = ''; });
  eventText.textContent = state.events[0].label + ' 쨌 ' + message;
  renderEventLog();
}

function renderEventLog() {
  const box = $('#eventLog');
  if (!box) return;
  box.innerHTML = '';
  state.events.slice(0, 20).forEach(entry => {
    const p = document.createElement('p');
    p.className = entry.kind + (entry.snapshot ? ' has-shot' : '');
    p.textContent = entry.label + '  ' + entry.message;
    if (entry.snapshot) {
      /* 寃쎈낫 ?쒓컙???붾㈃. ?꾨Ⅴ硫??ш쾶 蹂????덈떎. */
      const shot = document.createElement('img');
      shot.className = 'event-shot';
      shot.src = entry.snapshot;
      shot.alt = tr('snapshotAlt', { time: entry.label });
      shot.loading = 'lazy';
      shot.addEventListener('click', () => openSnapshot(entry));
      p.append(shot);
    }
    box.append(p);
  });
  if (!state.events.length) eventText.textContent = tr('noEvents');
}

function exportEvents() {
  if (!state.events.length) { Diagnostics.log(tr('noEventsToExport'), 'warn'); return; }
  const header = 'timestamp,camera,level,count,dwell_seconds,message\n';
  const rows = state.events.map(e => [
    e.at, '"' + String(e.camera || '').replace(/"/g, '""') + '"',
    e.level || '', e.count == null ? '' : e.count, e.dwell == null ? '' : e.dwell,
    '"' + String(e.message).replace(/"/g, '""') + '"'
  ].join(',')).join('\n');
  const blob = new Blob(['癤? + header + rows], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'beach-watch-events-' + new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-') + '.csv';
  document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   17. UI 媛깆떊
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function setHealth(key, tone) {
  const badge = $('#badgeHealth');
  $('#healthName').textContent = tr(key);
  badge.className = 'badge' + (tone ? ' ' + tone : '');
}

function refreshBadges() {
  $('#backendName').textContent = state.backend || tr('backendUnloaded');
  const camera = focusedCamera();
  const preset = activePreset(camera);
  $('#envName').textContent = activeCameras().length ? tr(preset.i18n) : tr('envUnknown');
  $('#badgeEnv').className = 'badge' + (camera.scene === 'night' ? ' warn' : '');
}

function refreshMetrics() {
  const m = state.metrics;
  $('#mFps').textContent = m.fps.toFixed(1);
  $('#mLatency').textContent = String(m.latency);
  $('#mCycle').textContent = m.cycle.toFixed(2);
  $('#mTiles').textContent = String(m.tiles);
  $('#mUptime').textContent = m.startedAt ? formatDuration(Date.now() - m.startedAt) : '00:00';
  $('#mErrors').textContent = String(m.errors);
  $('#mAlerts').textContent = String(m.alerts);
  $('#mPeak').textContent = String(m.peak);
  $('#mMerge').textContent = m.raw + ' ??' + m.merged;
  $('#mCams').textContent = String(activeCameras().length);
  const impactCycle = $('#impactCycle');
  if (impactCycle) {
    impactCycle.innerHTML = m.realCycle > 0
      ? m.realCycle.toFixed(2) + '<span class="unit">' + tr('unitSecondsShort') + '</span>'
      : '??;
  }
  refreshImpact();
}

function refreshStatusPanel() {
  if (state.halted) { statusTitle.textContent = tr('loopHalted'); return; }
  updateAggregateAlert();
}

function refreshTunerLabels() {
  $('#outConfidence').textContent = Math.round(state.userThreshold * 100) + '%';
  $('#outFrames').textContent = String(state.userFrames);
  $('#outEscalate').textContent = state.escalateSeconds + tr('unitSeconds');
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   18. ?꾪뙥??怨꾩궛湲?(?쒖닔 ?⑥닔 + ?쒖떆)
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function computeImpact(beaches, recovery, coverage) {
  const adoption = clamp(beaches / IMPACT.totalBeaches, 0, 1);
  const deaths = IMPACT.seaDeathsPerYear * IMPACT.earlyDetectableShare * recovery * coverage * adoption;
  return { deaths, cost: deaths * IMPACT.socialCostPerDeath, adoption };
}

function refreshImpact() {
  const beachesInput = $('#calcBeaches');
  if (!beachesInput) return;
  const beaches = Number(beachesInput.value);
  const recovery = Number($('#calcRecovery').value) / 100;
  const coverage = Number($('#calcCoverage').value) / 100;

  $('#outBeaches').textContent = String(beaches);
  $('#outRecovery').textContent = Math.round(recovery * 100) + '%';
  $('#outCoverage').textContent = Math.round(coverage * 100) + '%';

  const result = computeImpact(beaches, recovery, coverage);
  $('#outDeaths').textContent = result.deaths.toFixed(2);
  $('#outCost').textContent = formatWon(result.cost);
  $('#outHardware').textContent = activeLocale().currencyZero;

  const gap = state.metrics.realCycle > 0 ? Math.max(0, IMPACT.humanScanSeconds - state.metrics.realCycle) : 0;
  $('#outGap').textContent = gap > 0 ? gap.toFixed(1) + tr('unitSecondsShort') : '??;
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   19. 移대찓??異붽? 쨌 ?곌껐 쨌 ?쒓굅
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
async function listCameras() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const previous = cameraSelect.value;
    cameraSelect.innerHTML = '';
    const first = document.createElement('option');
    first.value = ''; first.textContent = tr('cameraSelect');
    cameraSelect.append(first);
    devices.filter(d => d.kind === 'videoinput').forEach((device, index) => {
      const option = document.createElement('option');
      option.value = device.deviceId;
      option.textContent = device.label || 'Camera ' + (index + 1);
      cameraSelect.append(option);
    });
    if (previous) cameraSelect.value = previous;
  } catch (e) {
    Diagnostics.log('enumerateDevices: ' + e.message, 'warn');
  }
}

function addCamera(options) {
  if (state.cameras.length >= CONFIG.maxCameras) {
    Diagnostics.log(tr('camLimitReached', { max: CONFIG.maxCameras }), 'warn');
    return null;
  }
  const camera = createCamera(options);
  if (!camera.name) camera.name = tr('camDefaultName', { n: state.cameras.length + 1 });
  state.cameras.push(camera);
  buildPanel(camera);
  restoreBoundaryFor(camera);
  if (!state.focusedId) state.focusedId = camera.id;
  updateGridCount();
  renderCameraBar();
  refreshAllPanels();
  drawBoundary(camera);
  syncMobileLineControls();
  Diagnostics.log(tr('camAdded', { name: camera.name }), 'ok');
  return camera;
}

function removeCamera(id) {
  const index = state.cameras.findIndex(c => c.id === id);
  if (index < 0) return;
  const camera = state.cameras[index];
  teardownSource(camera);
  if (camera.panel) camera.panel.remove();
  state.cameras.splice(index, 1);
  if (state.focusedId === id) state.focusedId = state.cameras.length ? state.cameras[0].id : null;
  Diagnostics.log(tr('camRemoved', { name: camera.name }), 'info');
  updateGridCount();
  renderCameraBar();
  refreshAllPanels();
  drawAllBoundaries();
  if (!activeCameras().length) stopDetection(true);
  refreshMetrics();
}

function teardownSource(camera) {
  clearTimeout(camera.reconnectTimer);
  if (camera.stallTimer) { clearInterval(camera.stallTimer); camera.stallTimer = null; }
  /* ?곌껐 以?痍⑥냼??寃쎌슦瑜??鍮꾪빐 ?몃? 踰덊샇瑜??щ┛?? ?ㅻ뒭寃??꾩갑??     getUserMedia 寃곌낵媛 ?대? 吏??移대찓?쇱뿉 遺숈뼱 ?뱀틺 LED 媛 怨꾩냽 耳쒖졇
     ?덈뒗 臾몄젣瑜?留됰뒗?? */
  camera.connectSeq = (camera.connectSeq || 0) + 1;
  if (camera.stream) { camera.stream.getTracks().forEach(t => t.stop()); camera.stream = null; }
  /* 濡쒖뺄 ?곸긽 ?뚯씪? objectURL ??留뚮뱾???ъ깮?쒕떎. 移대찓?쇰? 吏?곌굅??     ???뚯씪濡?諛붽? ???댁젣?섏? ?딆쑝硫?釉뚮씪?곗???怨꾩냽 硫붾え由щ줈 ?⑤뒗?? */
  if (camera.fileUrl) { try { URL.revokeObjectURL(camera.fileUrl); } catch (e) {} camera.fileUrl = ''; }
  if (camera.hls) { try { camera.hls.destroy(); } catch (e) {} camera.hls = null; }
  if (camera.mjpeg) { camera.mjpeg.raf && cancelAnimationFrame(camera.mjpeg.raf); camera.mjpeg.img.src = ''; camera.mjpeg = null; }
  if (camera.sim) { camera.sim.end(); camera.sim = null; }
  camera.simulating = false;
  camera.usesCanvas = false;
  camera.online = false;
  if (camera.video) { camera.video.srcObject = null; camera.video.removeAttribute('src'); camera.video.load && camera.video.load(); }
}


'use strict';
/* ?? 湲곌린 移대찓??????????????????????????????????????????????????? */
function attachStreamWatchdog(camera) {
  camera.stream.getVideoTracks().forEach(track => {
    track.addEventListener('ended', () => handleStreamLoss(camera, 'track ended'));
    track.addEventListener('mute', () => handleStreamLoss(camera, 'track muted'));
  });
}

/** ?ㅽ듃?뚰겕 ?곸긽(HLS 쨌 MJPEG 쨌 ?쇰컲 ?곸긽)??'議곗슜??硫덉텛?? 寃껋쓣 媛먯떆?쒕떎.
 *  以묎퀎 ?쒕쾭媛 二쎌뼱??留덉?留??꾨젅?꾩씠 ?붾㈃??洹몃?濡??⑥쑝硫?愿???붾㈃?
 *  ?뺤긽?쇰줈 蹂댁씠怨?AI ???뺤? ?붾㈃??怨꾩냽 遺꾩꽍?쒕떎. ?몃챸 ?덉쟾 ?쒖뒪?쒖뿉?? *  媛???꾪뿕???ㅽ뙣?대?濡? ???꾨젅?꾩씠 ?쇱젙 ?쒓컙 ?ㅼ? ?딆쑝硫??딄??쇰줈 蹂몃떎. */
function attachStallWatchdog(camera) {
  if (camera.stallTimer) { clearInterval(camera.stallTimer); camera.stallTimer = null; }
  const video = camera.video;
  if (video && !video.dataset.stallBound) {
    video.dataset.stallBound = '1';
    video.addEventListener('timeupdate', () => { camera.lastFrameAt = Date.now(); });
    ['error', 'stalled', 'ended', 'emptied'].forEach(type => {
      video.addEventListener(type, () => {
        if (camera.kind === 'stream' && camera.online) handleStreamLoss(camera, 'video ' + type);
      });
    });
  }
  camera.stallTimer = setInterval(() => {
    if (!camera.online || camera.kind !== 'stream') return;
    if (Date.now() - (camera.lastFrameAt || 0) > CONFIG.streamStallMs) {
      handleStreamLoss(camera, 'stream stalled');
    }
  }, 2000);
}

function handleStreamLoss(camera, reason) {
  if (camera.stallTimer) { clearInterval(camera.stallTimer); camera.stallTimer = null; }
  if (!camera.online) return;
  camera.online = false;
  Diagnostics.log(camera.name + ' stream lost (' + reason + ')', 'warn');
  pushEvent(camera.name + ' 쨌 ' + tr('eventCameraLost'), 'warn', { camera: camera.name });
  setHealth('healthRecovering', 'warn');
  refreshAllPanels(); renderCameraBar();
  scheduleReconnect(camera);
}

function scheduleReconnect(camera) {
  clearTimeout(camera.reconnectTimer);
  const delays = CONFIG.reconnectBackoff;
  if (camera.reconnectAttempt >= delays.length) {
    setHealth('healthError', 'bad');
    Diagnostics.log(camera.name + ' reconnect gave up after ' + delays.length + ' attempts', 'error');
    return;
  }
  const delay = delays[camera.reconnectAttempt++];
  Diagnostics.log(camera.name + ' reconnect in ' + delay + 'ms (attempt ' + camera.reconnectAttempt + ')', 'warn');
  camera.reconnectTimer = setTimeout(() => connectCamera(camera, true), delay);
}

async function connectCamera(camera, isRetry) {
  if (camera.kind === 'sim') { startSimulation(camera); return true; }
  if (camera.kind === 'screen') return connectScreen(camera);
  if (camera.kind === 'stream') return connectStream(camera, isRetry);
  if (camera.kind === 'file') return connectFile(camera);

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    statusTitle.textContent = tr('cameraUnsupported');
    setHealth('healthError', 'bad');
    return false;
  }
  requestNotificationPermission();
  Diagnostics.log(tr('camConnecting', { name: camera.name }), 'info');

  /* 沅뚰븳 李쎌씠 ???덈뒗 ?숈븞 ?ъ슜?먭? ??移대찓?쇰? 吏?????덈떎. 洹??ㅼ뿉
     '?덉슜'???꾨Ⅴ硫??ㅽ듃由쇱씠 ?щ씪吏?移대찓?쇱뿉 遺숈뼱 ?뱀틺 ?쒖떆?깆씠 怨꾩냽 耳쒖졇
     ?덇쾶 ?쒕떎. ?몃? 踰덊샇濡?洹몃윴 寃곌낵瑜?利됱떆 ?먭린?쒕떎. */
  const seq = (camera.connectSeq = (camera.connectSeq || 0) + 1);
  const stale = () => camera.connectSeq !== seq || !state.cameras.includes(camera);

  try {
    if (camera.stream) camera.stream.getTracks().forEach(t => t.stop());
    const constraints = { width: { ideal: 1920 }, height: { ideal: 1080 }, frameRate: { ideal: 24, max: 30 } };
    if (camera.deviceId) constraints.deviceId = { exact: camera.deviceId };

    const stream = await navigator.mediaDevices.getUserMedia({ video: constraints, audio: false });
    if (stale()) { stream.getTracks().forEach(t => t.stop()); return false; }
    camera.stream = stream;
    attachStreamWatchdog(camera);
    camera.video.srcObject = camera.stream;
    await camera.video.play();

    camera.online = true;
    camera.error = null;
    camera.reconnectAttempt = 0;
    state.halted = false;
    state.lastError = '';
    Diagnostics.log(tr('camConnected', { name: camera.name, resolution: camera.video.videoWidth + 'x' + camera.video.videoHeight }), 'ok');
    if (isRetry) pushEvent(camera.name + ' 쨌 ' + tr('eventCameraBack'), 'ok', { camera: camera.name });

    setHealth('healthGood', 'good');
    refreshAllPanels(); renderCameraBar(); drawBoundary(camera);
    await listCameras();
    await ensureDetectionRunning();
    return true;
  } catch (error) {
    camera.online = false;
    camera.error = error && error.message ? error.message : String(error);
    Diagnostics.countError(tr('camFailed', { name: camera.name, reason: camera.error }));
    state.lastError = tr('cameraPermissionHelp');
    statusTitle.textContent = tr('needsAttention');
    statusText.textContent = state.lastError;
    setHealth('healthError', 'bad');
    refreshAllPanels(); renderCameraBar();
    if (isRetry) scheduleReconnect(camera);
    return false;
  }
}


'use strict';
/* ?? ?ㅽ듃由?URL (?쒕줎 쨌 IP 移대찓??寃뚯씠?몄썾?? ??????????????????????? */
/* ?? ?붾㈃ 怨듭쑀 (?좏뒠釉??ы븿) ????????????????????????????????????????
   ?좏뒠釉?iframe ? 援먯감 異쒖쿂??canvas 濡??쎌????쎌쓣 ???녿떎(?ㅼ뿼??罹붾쾭??.
   洹몃옒??留곹겕留뚯쑝濡쒕뒗 AI 遺꾩꽍??遺덇??ν븯?? ????ъ슜?먭? 洹???쓣 ?붾㈃
   怨듭쑀?섎㈃ 吏꾩쭨 MediaStream ???ㅼ뼱?ㅺ퀬, 洹몃븣遺?곕뒗 湲곌린 移대찓?쇱? ?꾩쟾??   媛숈? 寃쎈줈瑜??꾨떎 ??湲곗???洹몃━湲걔룰컧吏쨌寃쎈낫媛 紐⑤몢 洹몃?濡??숈옉?쒕떎. */
async function connectScreen(camera) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
    camera.error = tr('errScreenUnsupported');
    state.lastError = camera.error;
    statusTitle.textContent = tr('needsAttention');
    statusText.textContent = camera.error;
    setHealth('healthError', 'bad');
    refreshAllPanels(); renderCameraBar();
    return false;
  }
  requestNotificationPermission();
  Diagnostics.log(tr('camConnecting', { name: camera.name }) + ' [screen]', 'info');

  const seq = (camera.connectSeq = (camera.connectSeq || 0) + 1);
  const stale = () => camera.connectSeq !== seq || !state.cameras.includes(camera);

  try {
    if (camera.stream) camera.stream.getTracks().forEach(t => t.stop());
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { frameRate: { ideal: 24, max: 30 } },
      audio: false
    });
    if (stale()) { stream.getTracks().forEach(t => t.stop()); return false; }
    camera.stream = stream;
    /* ?ъ슜?먭? 釉뚮씪?곗???'怨듭쑀 以묒?' 踰꾪듉???꾨Ⅴ硫?track ???앸궃??
       洹몃븣 ?붾㈃??留덉?留??꾨젅?꾩쑝濡??쇱뼱遺숈? 梨?'LIVE' 濡??⑥? ?딅룄濡?       湲곌린 移대찓?쇱? ?숈씪??媛먯떆瑜?遺숈씤?? */
    attachStreamWatchdog(camera);
    camera.video.srcObject = camera.stream;
    await camera.video.play();

    camera.online = true;
    camera.error = null;
    camera.reconnectAttempt = 0;
    state.halted = false;
    state.lastError = '';
    Diagnostics.log(tr('camConnected', {
      name: camera.name,
      resolution: camera.video.videoWidth + 'x' + camera.video.videoHeight
    }), 'ok');
    setHealth('healthGood', 'good');
    refreshAllPanels(); renderCameraBar(); drawBoundary(camera);
    await ensureDetectionRunning();
    return true;
  } catch (error) {
    camera.online = false;
    camera.error = error && error.message ? error.message : String(error);
    /* ?ъ슜?먭? 怨듭쑀 李쎌뿉??'痍⑥냼'瑜??꾨Ⅸ 寃껋? ?ㅻ쪟媛 ?꾨땲?? 議곗슜???섎룎由곕떎. */
    const cancelled = error && (error.name === 'NotAllowedError' || error.name === 'AbortError');
    if (cancelled) {
      Diagnostics.log(tr('screenShareCancelled'), 'info');
      state.lastError = tr('screenShareCancelled');
    } else {
      Diagnostics.countError(tr('camFailed', { name: camera.name, reason: camera.error }));
      state.lastError = tr('camFailed', { name: camera.name, reason: camera.error });
      setHealth('healthError', 'bad');
    }
    statusTitle.textContent = tr('needsAttention');
    statusText.textContent = state.lastError;
    teardownSource(camera);
    refreshAllPanels(); renderCameraBar();
    return false;
  }
}


'use strict';
/* ?? ?곸긽 ?뚯씪 (湲곌린????λ맂 MP4 쨌 WebM ?? ?????????????????????????
   URL.createObjectURL 濡?濡쒖뺄 ?뚯씪??媛由ы궎??blob: 二쇱냼瑜?留뚮뱾??   <video> ??洹몃?濡?臾쇰┛?? ?ㅽ듃?뚰겕濡??섍?吏 ?딄퀬 釉뚮씪?곗? 硫붾え由??덉뿉?쒕쭔
   ?대━誘濡??ㅽ듃由?URL 怨??щ━ CORS쨌HTTPS 臾몄젣媛 ?녿떎. ?ъ깮???앸굹硫?ended)
   湲곌린 移대찓?쇱쿂???먯뿰??硫덉텛誘濡? ?쒖뿰 ?몄쓽瑜??꾪빐 ?먮룞?쇰줈 泥섏쓬遺??   諛섎났 ?ъ깮?쒕떎. */
async function connectFile(camera) {
  requestNotificationPermission();
  Diagnostics.log(tr('camConnecting', { name: camera.name }) + ' [file]', 'info');
  try {
    camera.video.crossOrigin = null;
    camera.video.loop = true;
    camera.video.muted = true;
    camera.video.src = camera.fileUrl;
    await camera.video.play();

    camera.online = true;
    camera.error = null;
    camera.reconnectAttempt = 0;
    camera.lastFrameAt = Date.now();
    state.halted = false;
    state.lastError = '';
    Diagnostics.log(tr('camConnected', {
      name: camera.name,
      resolution: camera.video.videoWidth + 'x' + camera.video.videoHeight
    }), 'ok');
    setHealth('healthGood', 'good');
    refreshAllPanels(); renderCameraBar(); drawBoundary(camera);
    await ensureDetectionRunning();
    return true;
  } catch (error) {
    camera.online = false;
    camera.error = error && error.message ? error.message : String(error);
    Diagnostics.countError(tr('camFailed', { name: camera.name, reason: camera.error }));
    state.lastError = tr('errFilePlayback');
    statusTitle.textContent = tr('needsAttention');
    statusText.textContent = state.lastError;
    setHealth('healthError', 'bad');
    teardownSource(camera);
    refreshAllPanels(); renderCameraBar();
    return false;
  }
}


'use strict';
function resolveStreamKind(url, declared) {
  if (declared && declared !== 'auto') return declared;
  const lower = url.split('?')[0].toLowerCase();
  if (lower.endsWith('.m3u8')) return 'hls';
  if (/\.(mjpg|mjpeg)$/.test(lower)) return 'mjpeg';
  if (/\.(mp4|webm|ogg|ogv|mov)$/.test(lower)) return 'video';
  return 'video';
}

function validateStreamUrl(url) {
  let parsed;
  try { parsed = new URL(url); } catch (e) { return 'errBadUrl'; }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return 'errBadUrl';
  /* HTTPS ?섏씠吏?먯꽌 http 由ъ냼?ㅻ뒗 ?쇳빀 肄섑뀗痢좊줈 李⑤떒?쒕떎. 誘몃━ ?뚮젮以?? */
  if (location.protocol === 'https:' && parsed.protocol === 'http:') return 'errInsecure';
  return null;
}

async function ensureHls() {
  if (window.Hls) return true;
  for (let i = 0; i < CONFIG.hlsCdns.length; i++) {
    try {
      await loadScript(CONFIG.hlsCdns[i]);
      if (window.Hls) return true;
    } catch (e) { /* ?ㅼ쓬 CDN */ }
  }
  return false;
}

async function connectStream(camera, isRetry) {
  const kind = resolveStreamKind(camera.url, camera.streamKind);
  Diagnostics.log(tr('camConnecting', { name: camera.name }) + ' [' + kind + ']', 'info');
  try {
    if (kind === 'mjpeg') {
      await connectMjpeg(camera);
    } else if (kind === 'hls') {
      await connectHls(camera);
    } else {
      camera.video.crossOrigin = 'anonymous';
      camera.video.src = camera.url;
      await camera.video.play();
    }
    camera.online = true;
    camera.error = null;
    camera.reconnectAttempt = 0;
    camera.lastFrameAt = Date.now();
    state.lastError = '';
    attachStallWatchdog(camera);
    Diagnostics.log(tr('camConnected', {
      name: camera.name,
      resolution: (camera.usesCanvas ? camera.canvas.width + 'x' + camera.canvas.height
                                     : camera.video.videoWidth + 'x' + camera.video.videoHeight)
    }), 'ok');
    if (isRetry) pushEvent(camera.name + ' 쨌 ' + tr('eventCameraBack'), 'ok', { camera: camera.name });
    setHealth('healthGood', 'good');
    refreshAllPanels(); renderCameraBar(); drawBoundary(camera);
    await ensureDetectionRunning();
    return true;
  } catch (error) {
    camera.online = false;
    camera.error = error && error.message ? error.message : String(error);
    Diagnostics.countError(tr('camFailed', { name: camera.name, reason: camera.error }));
    /* 二쇱냼瑜??섎せ ?ｌ뿀?????꾨Т ?덈궡???놁씠 ?⑤꼸留?爰쇱???臾몄젣瑜?留됰뒗??*/
    state.lastError = tr('streamFailedHelp', { name: camera.name, reason: camera.error });
    statusTitle.textContent = tr('needsAttention');
    statusText.textContent = state.lastError;
    setHealth('healthError', 'bad');
    teardownSource(camera);
    refreshAllPanels(); renderCameraBar();
    if (isRetry) scheduleReconnect(camera);
    return false;
  }
}

function connectHls(camera) {
  return new Promise(async (resolve, reject) => {
    const native = camera.video.canPlayType('application/vnd.apple.mpegurl');
    if (native) {
      camera.video.crossOrigin = 'anonymous';
      camera.video.src = camera.url;
      camera.video.play().then(resolve, reject);
      return;
    }
    const ready = await ensureHls();
    if (!ready) { reject(new Error(tr('errHlsUnsupported'))); return; }
    const hls = new window.Hls({ lowLatencyMode: true, enableWorker: true });
    camera.hls = hls;
    let settled = false;
    hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
      camera.video.play().then(() => { settled = true; resolve(); }, reject);
    });
    hls.on(window.Hls.Events.ERROR, (_event, data) => {
      if (!data.fatal) return;
      if (!settled) { reject(new Error(tr('errStreamLoad'))); settled = true; return; }
      /* ?ъ깮 以?移섎챸???ㅻ쪟??移대찓???딄?怨??숈씪?섍쾶 ?ㅻ，??*/
      handleStreamLoss(camera, 'hls fatal: ' + data.type);
    });
    hls.loadSource(camera.url);
    hls.attachMedia(camera.video);
    setTimeout(() => { if (!settled) reject(new Error(tr('errStreamLoad'))); }, 12000);
  });
}

/** MJPEG??<video>濡??ъ깮?섏? ?딅뒗?? <img>媛 怨꾩냽 媛깆떊?섎뒗 ?깆쭏???댁슜?? *  留??꾨젅??罹붾쾭?ㅻ줈 ??린怨? 洹?罹붾쾭?ㅻ? 異붾줎 ?낅젰?쇰줈 ?대떎. */
function connectMjpeg(camera) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    const context = camera.canvas.getContext('2d', { alpha: false });
    let settled = false;

    /* 寃뚯씠?몄썾?닿? 二쎌쑝硫?img ??留덉?留??꾨젅?꾩쓣 洹몃?濡??ㅺ퀬 ?덈뒗??
       洹몃━湲곕쭔 怨꾩냽?섎㈃ ?붾㈃? 硫姨≫빐 蹂댁씠吏留??ㅼ젣濡쒕뒗 ?뺤? ?붾㈃??媛먯떆?섍쾶
       ?쒕떎. decode ?꾨즺 ?쒓컖???④꺼 ?먯뼱 ?뺤? 媛먯떆媛 ?대? ?뚯븘梨꾧쾶 ?쒕떎. */
    const pump = () => {
      if (!camera.mjpeg) return;
      if (img.naturalWidth) {
        if (camera.canvas.width !== img.naturalWidth) {
          camera.canvas.width = img.naturalWidth;
          camera.canvas.height = img.naturalHeight;
        }
        try { context.drawImage(img, 0, 0); } catch (e) { /* ?꾨젅???섎굹 嫄대꼫?대떎 */ }
      }
      camera.mjpeg.raf = requestAnimationFrame(pump);
    };
    /* multipart ?ㅽ듃由쇱? ???뚰듃媛 ?꾩갑???뚮쭏??load 媛 ?ㅼ떆 諛쒖깮?쒕떎 */
    img.addEventListener('load', () => { camera.lastFrameAt = Date.now(); });

    img.onload = () => {
      if (settled) return;
      settled = true;
      camera.usesCanvas = true;
      camera.canvas.hidden = false;
      camera.panel.classList.add('simulating'); /* 罹붾쾭?ㅻ? 蹂댁씠寃??섎뒗 ?대옒?ㅻ? ?ъ궗??*/
      camera.panel.classList.remove('has-video');
      camera.simFlag.textContent = '';
      camera.mjpeg = { img, raf: 0 };
      pump();
      resolve();
    };
    img.onerror = () => { if (!settled) { settled = true; reject(new Error(tr('errStreamLoad'))); } };
    img.src = camera.url;
    setTimeout(() => { if (!settled) { settled = true; reject(new Error(tr('errStreamLoad'))); } }, 12000);
  });
}

function requestNotificationPermission() {
  try {
    if ($('#adminNotification').checked && 'Notification' in window && Notification.permission === 'default') {
      Promise.resolve(Notification.requestPermission()).catch(() => {});
    }
  } catch (e) { /* 援ы삎 釉뚮씪?곗? */ }
}

function disconnectAll() {
  state.cameras.forEach(teardownSource);
  stopDetection(true);
  setHealth('healthIdle', '');
  refreshAllPanels(); renderCameraBar();
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   20. 紐⑤뜽 濡쒕뱶 (CDN ?대갚 + ?ъ떆??
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = () => reject(new Error('script load failed: ' + url));
    document.head.append(script);
  });
}

/** coco-ssd ??tf ?꾩뿭 ?놁씠???숈옉?섏? ?딅뒗?? ?섏씠吏 ?곷떒??script ?쒓렇媛
 *  留됲엺 留??щ궡留씲룻븰援먮쭩)?먯꽌 ?ㅽ뙣?덈떎硫??ш린???泥?CDN ?쇰줈 tfjs 遺???ㅼ떆
 *  諛쏆븘???쒕떎. ?닿쾬???놁쑝硫?紐⑤뜽 ?ъ떆??3?뚭? ?꾨? 媛숈? ?댁쑀濡??ㅽ뙣?쒕떎. */
async function ensureTf() {
  if (typeof tf !== 'undefined') return;
  /* ?명꽣?룹씠 ?놁뼱??吏?쒕쾲??諛쏆븘 ??寃껋씠 ?덉쑝硫?洹멸쾬?쇰줈 ?쒖옉?쒕떎 */
  for (const url of CONFIG.tfCdns) {
    if (await OfflineCache.runCachedScript(url)) {
      Diagnostics.log(tr('offlineUsedCache', { what: 'tensorflow.js' }), 'ok');
      if (typeof tf !== 'undefined') return;
    }
  }
  for (let i = 0; i < CONFIG.tfCdns.length; i++) {
    try {
      Diagnostics.log('tfjs fallback CDN #' + (i + 1), 'warn');
      await loadScript(CONFIG.tfCdns[i]);
      if (typeof tf !== 'undefined') { OfflineCache.storeScript(CONFIG.tfCdns[i]); return; }
    } catch (e) { /* ?ㅼ쓬 CDN ?쒕룄 */ }
  }
  throw new Error('tensorflow.js unavailable');
}

async function ensureCocoSsd() {
  if (window.cocoSsd) return;
  for (const url of CONFIG.modelCdns) {
    if (await OfflineCache.runCachedScript(url)) {
      Diagnostics.log(tr('offlineUsedCache', { what: 'coco-ssd' }), 'ok');
      if (window.cocoSsd) return;
    }
  }
  for (let i = 0; i < CONFIG.modelCdns.length; i++) {
    try {
      if (i > 0) Diagnostics.log('coco-ssd fallback CDN #' + i, 'warn');
      await loadScript(CONFIG.modelCdns[i]);
      if (window.cocoSsd) { OfflineCache.storeScript(CONFIG.modelCdns[i]); return; }
    } catch (e) { /* ?ㅼ쓬 CDN ?쒕룄 */ }
  }
  throw new Error('coco-ssd unavailable');
}


'use strict';
/** 紐⑤뜽? 移대찓???섏? 臾닿??섍쾶 ?섎굹留?濡쒕뱶??怨듭쑀?쒕떎. */
async function loadModel() {
  if (state.model) return true;
  statusTitle.textContent = tr('modelPreparing');
  for (let attempt = 1; attempt <= CONFIG.modelRetries; attempt++) {
    try {
      /* 紐⑤뜽 媛以묒튂??罹먯떆?먯꽌 癒쇱? 李얜룄濡???援ш컙留?fetch 瑜?媛먯떬??*/
      OfflineCache.patchFetch();
      await ensureTf();
      await ensureCocoSsd();
      await tf.ready();
      state.model = await cocoSsd.load({ base: 'mobilenet_v2' });
      state.backend = (tf.getBackend && tf.getBackend()) || 'unknown';
      Diagnostics.log(tr('modelReady', { backend: state.backend }), 'ok');
      if (OfflineCache.hits > 0) Diagnostics.log(tr('offlineUsedCache', { what: tr('offlineModel') }), 'ok');
      refreshBadges();
      refreshOfflineBadge();
      return true;
    } catch (error) {
      Diagnostics.countError('model load #' + attempt + ': ' + (error && error.message ? error.message : String(error)));
      if (attempt < CONFIG.modelRetries) {
        statusTitle.textContent = tr('modelRetry', { attempt, max: CONFIG.modelRetries });
        await new Promise(r => setTimeout(r, 600 * attempt));
      }
    }
  }
  state.backend = tr('backendUnavailable');
  refreshBadges();
  statusTitle.textContent = tr('modelLoadFailed');
  stateChip.textContent = 'ERROR';
  stateChip.className = 'state alert';
  setHealth('healthError', 'bad');
  return false;
}


'use strict';
/** ?ㅼ젣 移대찓?쇨? ?섎굹?쇰룄 遺숈쑝硫?紐⑤뜽??以鍮꾪븯怨?猷⑦봽瑜??뚮┛??
 *  ?쒕??덉씠?섎쭔 ?덉쓣 ?뚮뒗 紐⑤뜽 ?놁씠???숈옉?쒕떎. */
async function ensureDetectionRunning() {
  const needsModel = activeCameras().some(c => !c.simulating);
  if (needsModel) {
    const ready = await loadModel();
    /* 紐⑤뜽??紐?諛쏆븯?붾뜲 猷⑦봽留??뚮━硫??붾㈃? 'LIVE 쨌 媛먯떆 以??몃뜲 ?ㅼ젣濡쒕뒗
       ?꾨Т寃껊룄 媛먯??섏? ?딅뒗 ?곹깭媛 ?쒕떎. ???쒖뒪?쒖뿉??媛???꾪뿕???ㅽ뙣?대?濡?       ?ш린??硫덉텛怨??ㅽ뙣 ?곹깭瑜?洹몃?濡??④릿?? */
    if (!ready) {
      state.lastError = tr('modelLoadFailed');
      stopDetection(false);
      setHealth('healthError', 'bad');
      statusTitle.textContent = tr('modelLoadFailed');
      statusText.textContent = tr('modelLoadFailedHelp');
      stateChip.textContent = 'ERROR';
      stateChip.className = 'state alert';
      return false;
    }
    state.lastError = '';
  }
  if (!state.detecting) resumeDetection();
  return true;
}

function resumeDetection() {
  state.detecting = true;
  state.halted = false;
  consecutiveErrors = 0;
  state.metrics.startedAt = state.metrics.startedAt || Date.now();
  state.cameras.forEach(c => {
    c.previousPeople = [];
    c.riskSince.clear();
    c.riskSeen.clear();
    c.activeTiles = maxTiles();
    c.metrics.latencyAvg = 0;
  });
  setHealth('healthGood', 'good');
  refreshStatusPanel();
  refreshBadges();
  clearTimeout(loopTimer);
  detectLoop();
}

function stopDetection(resetUi) {
  state.detecting = false;
  clearTimeout(loopTimer);
  state.cameras.forEach(c => {
    c.previousPeople = [];
    c.riskSince.clear();
    c.riskSeen.clear();
    c.riskCount = 0;
    c.alertLevel = 'none';
    if (c.detections) c.detections.innerHTML = '';
    if (c.panel) c.panel.classList.remove('critical');
    updatePanelLevel(c);
  });
  state.alertLevel = 'none';
  $('#detectCount').textContent = '0';
  if (resetUi) {
    stateChip.textContent = tr('ready');
    stateChip.className = 'state';
    statusTitle.textContent = tr('waiting');
    statusText.textContent = tr('readyText');
  }
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   21. ?쒕??덉씠??(移대찓?쇰퀎 ?몄뒪?댁뒪)
   移대찓???놁씠 諛쒗몴쨌?ъ궗?먯꽌 ?숈옉???ы쁽?섍린 ?꾪븳 紐⑤뱶.
   ?⑹꽦 ?λ㈃??洹몃━怨??⑹꽦 媛먯? 寃곌낵瑜??뚯씠?꾨씪?몄뿉 二쇱엯?쒕떎.
   ?ㅼ젣 ?곸긽???꾨떂???붾㈃????긽 紐낆떆?쒕떎.
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function createSimulation(camera, seed) {
  const phase = (seed || 0) * 1.7;
  return {
    raf: 0, started: 0, elapsed: 0, width: 960, height: 540,

    /* ?쒓컙???⑥닔濡??뺤쓽?쒕떎. requestAnimationFrame 二쇨린??湲곌린쨌?꾩썝 ?곹깭???곕씪
       ?ш쾶 ?щ씪吏誘濡? ?꾨젅???꾩쟻 諛⑹떇? ?곕え留덈떎 ?ㅻⅨ ?띾룄瑜?留뚮뱺?? */
    swimmers: [
      { size: 0.052, score: 0.71, at: t => ({ x: 0.30 + Math.sin(t * 0.4 + phase) * 0.02, y: Math.max(0.46, 0.84 - 0.055 * t) }) },
      { size: 0.046, score: 0.66, at: t => ({ x: 0.62 + Math.sin(t * 0.6 + phase) * 0.03, y: 0.78 + Math.sin(t * 1.1) * 0.006 }) },
      { size: 0.058, score: 0.78, at: t => ({ x: 0.47 - Math.sin(t * 0.3 + phase) * 0.04, y: 0.89 + Math.sin(t * 0.9) * 0.008 }) }
    ],

    begin() {
      camera.canvas.width = this.width; camera.canvas.height = this.height;
      camera.canvas.hidden = false;
      this.started = nowMs(); this.elapsed = 0;
      camera.panel.classList.add('simulating');
      this.tick();
    },

    end() {
      cancelAnimationFrame(this.raf);
      if (camera.canvas) camera.canvas.hidden = true;
      if (camera.panel) camera.panel.classList.remove('simulating');
    },

    positions() {
      const t = this.elapsed;
      return this.swimmers.map(s => {
        const p = s.at(t);
        return { x: clamp(p.x, 0.04, 0.96), y: clamp(p.y, 0.44, 0.94), size: s.size, score: s.score };
      });
    },

    tick() {
      if (!camera.simulating) return;
      this.elapsed = (nowMs() - this.started) / 1000;
      const t = this.elapsed;
      const ctx = camera.canvas.getContext('2d');
      const W = this.width, H = this.height;

      const sky = ctx.createLinearGradient(0, 0, 0, H * 0.42);
      sky.addColorStop(0, '#8ed3e6'); sky.addColorStop(1, '#cfeef2');
      ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H * 0.42);
      const sea = ctx.createLinearGradient(0, H * 0.42, 0, H * 0.86);
      sea.addColorStop(0, '#1c7f9c'); sea.addColorStop(1, '#3aa8b8');
      ctx.fillStyle = sea; ctx.fillRect(0, H * 0.42, W, H * 0.44);
      ctx.fillStyle = '#e8d4a8'; ctx.fillRect(0, H * 0.86, W, H * 0.14);

      /* ?뚮룄 ???ㅽ깘???먯씤???섎뒗 ?붿냼瑜??덉쑝濡??뺤씤?????덇쾶 洹몃┛??*/
      ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 2;
      for (let row = 0; row < 7; row++) {
        const baseY = H * (0.46 + row * 0.055);
        ctx.beginPath();
        for (let px = 0; px <= W; px += 12) {
          const y = baseY + Math.sin((px / 70) + t * (1.1 + row * 0.2) + row) * (3 + row * 0.8);
          px === 0 ? ctx.moveTo(px, y) : ctx.lineTo(px, y);
        }
        ctx.stroke();
      }

      this.positions().forEach(s => {
        const px = s.x * W, py = s.y * H, r = s.size * H * 0.42;
        ctx.fillStyle = '#2b1b12';
        ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill();
        ctx.fillRect(px - r * 2.1, py + r * 0.4, r * 4.2, r * 0.7);
      });

      this.raf = requestAnimationFrame(() => this.tick());
    },

    /** ?⑹꽦 媛먯? 寃곌낵. 紐⑤뜽??嫄곗튂吏 ?딆쑝誘濡??ㅼ젣 異붾줎 ?깅뒫??洹쇨굅媛 ?섏? ?딅뒗?? */
    syntheticPeople() {
      this.elapsed = (nowMs() - this.started) / 1000;
      const W = this.width, H = this.height;
      return this.positions().map((s, index) => {
        const w = s.size * H * 1.5, h = s.size * H * 1.2;
        return {
          id: 900 + index, class: 'person', score: s.score,
          bbox: [s.x * W - w / 2, s.y * H - h / 2, w, h],
          source: 'sim', hits: 99, averageScore: s.score, sizeStable: true, observations: 1
        };
      });
    },

    rawCount() { return this.swimmers.length; }
  };
}

function startSimulation(camera) {
  camera.simulating = true;
  camera.online = false;
  camera.sim = createSimulation(camera, camera.index);
  camera.sim.begin();
  state.metrics.startedAt = state.metrics.startedAt || Date.now();
  camera.riskSince.clear();
  camera.riskSeen.clear();
  setHealth('healthGood', 'good');
  pushEvent(camera.name + ' 쨌 ' + tr('eventSimStart'), 'info', { camera: camera.name });
  refreshAllPanels(); renderCameraBar(); drawBoundary(camera); refreshBadges();
  ensureDetectionRunning();
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   22. ?먭? 吏꾨떒 ?ㅼ쐞??   ?ъ궗?꾩썝쨌?ъ슜?먭? 釉뚮씪?곗??먯꽌 諛붾줈 ?ы쁽?????덈뒗 ?뚭? ?뚯뒪??
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const SelfTest = {
  cases: [],
  add(name, fn) { this.cases.push({ name, fn }); },
  run() {
    Diagnostics.log(tr('selfTestRunning'), 'info');
    let passed = 0; const failures = [];
    this.cases.forEach(testCase => {
      try {
        const result = testCase.fn();
        if (result === true) passed += 1;
        else failures.push(testCase.name + ' ??' + result);
      } catch (error) {
        failures.push(testCase.name + ' ??threw ' + error.message);
      }
    });
    const total = this.cases.length;
    failures.forEach(f => Diagnostics.log('FAIL ' + f, 'error'));
    const summary = failures.length
      ? tr('selfTestFail', { failed: failures.length, passed, total })
      : tr('selfTestPass', { passed, total });
    Diagnostics.log(summary, failures.length ? 'error' : 'ok');
    return { passed, total, failures };
  }
};

const box = (x, y, w, h, extra) => Object.assign({ bbox: [x, y, w, h], score: 0.6, source: 'full' }, extra || {});


'use strict';
/* ??湲고븯 ??*/
SelfTest.add('crossesAboveLine: ??????곸? 移⑤쾾', () => {
  const line = [{ x: 0, y: 0.5 }, { x: 1, y: 0.5 }];
  return crossesAboveLine({ left: 0.4, right: 0.6, top: 0.2, bottom: 0.3 }, line) === true || 'expected true';
});
SelfTest.add('crossesAboveLine: ???꾨옒 ??곸? ?덉쟾', () => {
  const line = [{ x: 0, y: 0.5 }, { x: 1, y: 0.5 }];
  return crossesAboveLine({ left: 0.4, right: 0.6, top: 0.7, bottom: 0.8 }, line) === false || 'expected false';
});
SelfTest.add('crossesAboveLine: ?좊텇 x踰붿쐞 諛뽰? ?먯젙?섏? ?딆쓬', () => {
  const line = [{ x: 0.3, y: 0.5 }, { x: 0.6, y: 0.5 }];
  return crossesAboveLine({ left: 0.85, right: 0.95, top: 0.1, bottom: 0.2 }, line) === false || 'expected false';
});
SelfTest.add('crossesAboveLine: 湲곗슱?댁쭊 ?좊룄 蹂닿컙 ?먯젙', () => {
  const line = [{ x: 0, y: 0.4 }, { x: 1, y: 0.8 }];
  const right = crossesAboveLine({ left: 0.78, right: 0.82, top: 0.60, bottom: 0.66 }, line);
  const left = crossesAboveLine({ left: 0.18, right: 0.22, top: 0.60, bottom: 0.66 }, line);
  return (right === true && left === false) || 'right=' + right + ' left=' + left;
});

/* ??IoU / IoS ??*/
SelfTest.add('IoU: ?숈씪 諛뺤뒪??1', () => {
  const v = intersectionOverUnion(box(0, 0, 10, 10), box(0, 0, 10, 10));
  return Math.abs(v - 1) < 1e-9 || 'got ' + v;
});
SelfTest.add('IoU: ?⑥뼱吏?諛뺤뒪??0', () => {
  const v = intersectionOverUnion(box(0, 0, 10, 10), box(100, 100, 10, 10));
  return v === 0 || 'got ' + v;
});
SelfTest.add('IoS: ?묒? 諛뺤뒪媛 ??諛뺤뒪???ы븿?섎㈃ 1', () => {
  const v = intersectionOverSmaller(box(0, 0, 100, 100), box(20, 20, 10, 10));
  return Math.abs(v - 1) < 1e-9 || 'got ' + v;
});


'use strict';
/* ??以묐났 蹂묓빀 (1紐낆씠 ?щ윭 紐낆쑝濡??몄뼱吏??臾몄젣???뚭? ?뚯뒪?? ??*/
SelfTest.add('蹂묓빀: ?ㅻⅨ ?뚯뒪??寃뱀튇 愿痢≪? 1紐?, () => {
  const kept = clusterObservations([
    box(10, 10, 20, 40, { score: 0.8, source: 'full' }),
    box(12, 11, 21, 39, { score: 0.7, source: 'tile-0-0' })
  ]);
  return kept.length === 1 || 'kept ' + kept.length;
});
SelfTest.add('蹂묓빀: ???щ엺???꾩껜+4??쇱뿉 ?≫???1紐?(?듭떖 ?뚭?)', () => {
  /* 3횞2 ???援ъ“?먯꽌 ???寃쎄퀎?????щ엺? 理쒕? 5媛??뚯뒪???숈떆???≫엺??
     ?덉쟾 洹몃━??諛⑹떇? ???ъ뒳???딆? 紐삵빐 4紐낆쑝濡??몄뿀?? */
  const observations = [
    box(100, 100, 24, 52, { score: 0.82, source: 'full' }),
    box(102,  99, 22, 50, { score: 0.74, source: 'tile-0-0', clipped: true }),
    box( 98, 103, 25, 49, { score: 0.69, source: 'tile-0-1', clipped: true }),
    box(101, 101, 23, 53, { score: 0.66, source: 'tile-1-0', clipped: true }),
    box( 99, 100, 26, 51, { score: 0.61, source: 'tile-1-1', clipped: true })
  ];
  const kept = clusterObservations(observations);
  return (kept.length === 1 && kept[0].observations === 5) ||
    'kept ' + kept.length + ' obs ' + (kept[0] && kept[0].observations);
});
SelfTest.add('蹂묓빀: ?꾩씠????A~B, B~C ?몃뜲 A?갅 ???ъ뒳??1紐?, () => {
  /* A? C??吏곸젒 寃뱀튂吏 ?딆?留?B瑜??듯빐 ?댁뼱吏꾨떎. 洹몃━??諛⑹떇??寃고븿??洹몃?濡??ы쁽??耳?댁뒪. */
  const a = box(0, 0, 40, 40, { score: 0.9, source: 'full' });
  const b = box(22, 0, 40, 40, { score: 0.8, source: 'tile-0-0' });
  const c = box(44, 0, 40, 40, { score: 0.7, source: 'tile-0-1' });
  const directAC = shouldMergeObservations(a, c);
  const kept = clusterObservations([a, b, c]);
  return (directAC === false && kept.length === 1) || 'directAC=' + directAC + ' kept=' + kept.length;
});
SelfTest.add('蹂묓빀: ???諛뺤뒪???섎━吏 ?딆? 愿痢≪쓣 怨좊Ⅸ??, () => {
  const kept = clusterObservations([
    box(100, 100, 12, 50, { score: 0.80, source: 'tile-0-0', clipped: true }),
    box(100, 100, 24, 52, { score: 0.78, source: 'full', clipped: false })
  ]);
  return (kept.length === 1 && kept[0].bbox[2] === 24) || 'w=' + (kept[0] && kept[0].bbox[2]);
});
SelfTest.add('蹂묓빀: 媛숈? ?뚯뒪??媛뺥븳 寃뱀묠(紐⑤뜽 以묐났 寃異?? 1紐?, () => {
  const kept = clusterObservations([
    box(10, 10, 20, 40, { score: 0.8, source: 'full' }),
    box(12, 11, 21, 39, { score: 0.7, source: 'full' })
  ]);
  return kept.length === 1 || 'kept ' + kept.length;
});
SelfTest.add('蹂묓빀: ?섎????????щ엺? 2紐낆쑝濡??좎?', () => {
  const kept = clusterObservations([
    box(10, 10, 20, 40, { score: 0.8, source: 'full' }),
    box(26, 10, 20, 40, { score: 0.7, source: 'full' })
  ]);
  return kept.length === 2 || 'kept ' + kept.length;
});
SelfTest.add('蹂묓빀: 硫由??⑥뼱吏????щ엺? ?????좎?', () => {
  const kept = clusterObservations([
    box(10, 10, 20, 40, { score: 0.8, source: 'full' }),
    box(400, 300, 20, 40, { score: 0.7, source: 'tile-1-2' })
  ]);
  return kept.length === 2 || 'kept ' + kept.length;
});
SelfTest.add('蹂묓빀: ???щ엺 ?욎쓽 ?묒? ?꾩씠???쇳궎吏 ?딅뒗??, () => {
  /* ?ы븿瑜좊쭔?쇰줈 蹂묓빀?섎㈃ ?대┛?닿? ?щ씪吏꾨떎. 硫댁쟻鍮??섑븳???대? 留됰뒗?? */
  const kept = clusterObservations([
    box(100, 100, 60, 140, { score: 0.85, source: 'full' }),
    box(118, 190, 16, 34, { score: 0.62, source: 'tile-1-1' })
  ]);
  return kept.length === 2 || 'kept ' + kept.length;
});
SelfTest.add('蹂묓빀: 寃곌낵 ?몄썝?섎뒗 愿痢??섎낫??留롮쓣 ???녿떎', () => {
  const observations = [];
  for (let i = 0; i < 40; i++) {
    observations.push(box(i * 7, (i % 5) * 9, 20, 40, { score: 0.5 + (i % 9) / 100, source: i % 2 ? 'full' : 'tile-0-0' }));
  }
  const kept = clusterObservations(observations);
  return kept.length <= observations.length || 'grew to ' + kept.length;
});
SelfTest.add('蹂묓빀: 理쒓퀬 ?먯닔媛 ?대윭?ㅽ꽣 ?먯닔濡??⑤뒗??, () => {
  const kept = clusterObservations([
    box(10, 10, 20, 40, { score: 0.42, source: 'tile-0-0' }),
    box(11, 10, 20, 40, { score: 0.91, source: 'full' })
  ]);
  return (kept.length === 1 && Math.abs(kept[0].score - 0.91) < 1e-9) || 'score ' + (kept[0] && kept[0].score);
});



'use strict';
/* ???щ윭 紐낆쓣 ?щ윭 紐낆쑝濡??멸린 (諛붾떎 ?먭굅由??곹솴) ??*/
SelfTest.add('?щ윭 紐? 寃뱀튂吏 ?딅뒗 ???щ엺? 嫄곕━留뚯쑝濡??⑹튂吏 ?딅뒗??, () => {
  /* ?쒕줈 ?ㅻⅨ ??쇱뿉???섏삩, 諛붿쭩 遺숈뿀吏留?寃뱀튂吏???딅뒗 ???щ엺 */
  const a = box(100, 100, 16, 22, { source: 'tile-0-0' });
  const b = box(117, 100, 16, 22, { source: 'tile-0-1' });
  return shouldMergeObservations(a, b) === false || 'two swimmers merged into one';
});

SelfTest.add('?щ윭 紐? 媛숈? ?щ엺??????쇱뿉 嫄몄튂硫??ъ쟾???섎굹濡??⑹튇??, () => {
  const a = box(100, 100, 16, 22, { source: 'tile-0-0' });
  const b = box(103, 101, 15, 23, { source: 'tile-0-1' });
  return shouldMergeObservations(a, b) === true || 'same person left split';
});

SelfTest.add('?щ윭 紐? ?섎??????덈뒗 8紐낆씠 8紐낆쑝濡??⑤뒗??, () => {
  const crowd = [];
  for (let i = 0; i < 8; i++) crowd.push(box(60 + i * 26, 140, 18, 24, { source: 'full' }));
  const merged = clusterObservations(crowd).length;
  return merged === 8 || ('8 people collapsed into ' + merged);
});

SelfTest.add('?щ윭 紐? ?ш린媛 ?쒓컖媛곸씤 ?먭굅由?臾대━??媛쒖닔媛 蹂댁〈?쒕떎', () => {
  const crowd = [
    box(40, 150, 10, 14, { source: 'full' }),
    box(70, 148, 14, 19, { source: 'full' }),
    box(105, 152, 9, 13, { source: 'full' }),
    box(132, 145, 16, 22, { source: 'full' }),
    box(170, 150, 11, 15, { source: 'full' })
  ];
  const merged = clusterObservations(crowd).length;
  return merged === 5 || ('5 people collapsed into ' + merged);
});

SelfTest.add('?щ윭 紐? 寃異??곹븳???쇱옟 ?λ㈃??媛먮떦??留뚰겮 ?щ떎', () =>
  (CONFIG.maxDetectionsFull >= 100 && CONFIG.maxDetectionsTile >= 50) ||
  ('caps too low: ' + CONFIG.maxDetectionsFull + '/' + CONFIG.maxDetectionsTile));

SelfTest.add('?щ윭 紐? 寃뱀묠 ?섑븳???ㅼ젙?섏뼱 ?덈떎', () =>
  (CONFIG.crossMinOverlap > 0 && CONFIG.crossMinOverlap < 0.4) || 'crossMinOverlap missing');
/* ???뺥깭 ?꾪꽣 ??*/
SelfTest.add('?뺥깭 ?꾪꽣: 吏?섏튂寃??⑹옉??諛뺤뒪???щ엺???꾨떂(?뚮룄)', () =>
  isPlausiblePerson(box(0, 0, 90, 10)) === false || 'expected false');
SelfTest.add('?뺥깭 ?꾪꽣: ?덈Т ?묒? 諛뺤뒪???쒖쇅', () =>
  isPlausiblePerson(box(0, 0, 3, 4)) === false || 'expected false');
SelfTest.add('?뺥깭 ?꾪꽣: ?뺤긽 ?몄껜 鍮꾩쑉? ?듦낵', () =>
  isPlausiblePerson(box(0, 0, 18, 42)) === true || 'expected true');
SelfTest.add('?뺥깭 ?꾪꽣: ?쒕줎 ?꾨━?뗭? ???묒? ??곷룄 ?щ엺?쇰줈 ?몄젙', () => {
  const droneOk = isPlausiblePerson(box(0, 0, 5, 6), SITE_PRESETS.drone.shape);
  const beachNo = isPlausiblePerson(box(0, 0, 5, 6), SITE_PRESETS.beach.shape);
  return (droneOk === true && beachNo === false) || 'drone=' + droneOk + ' beach=' + beachNo;
});


'use strict';
/* ??異붿쟻 ??*/
SelfTest.add('異붿쟻: ???꾨젅???곗냽 愿痢???hits媛 2', () => {
  const ref = { value: 1 };
  const first = trackCandidates([box(50, 50, 20, 40)], [], ref);
  const second = trackCandidates([box(52, 51, 20, 40)], first, ref);
  return (second[0].hits === 2 && second[0].id === first[0].id) || 'hits=' + second[0].hits;
});
SelfTest.add('異붿쟻: 硫由??⑥뼱吏?????곸? ??ID', () => {
  const ref = { value: 1 };
  const first = trackCandidates([box(50, 50, 20, 40)], [], ref);
  const second = trackCandidates([box(600, 400, 20, 40)], first, ref);
  return second[0].id !== first[0].id || 'reused id';
});
SelfTest.add('異붿쟻: ?ш린媛 湲됰??섎㈃ sizeStable=false (?뚮룄 ?뱀꽦)', () => {
  const ref = { value: 1 };
  const first = trackCandidates([box(50, 50, 20, 40)], [], ref);
  const second = trackCandidates([box(50, 50, 20, 8)], first, ref);
  return second[0].sizeStable === false || 'sizeStable=' + second[0].sizeStable;
});
SelfTest.add('異붿쟻: ?됯퇏 ?좊ː?꾧? ?꾩쟻 媛깆떊??, () => {
  const ref = { value: 1 };
  const first = trackCandidates([box(50, 50, 20, 40, { score: 0.4 })], [], ref);
  const second = trackCandidates([box(50, 50, 20, 40, { score: 0.8 })], first, ref);
  return Math.abs(second[0].averageScore - 0.6) < 1e-9 || 'avg=' + second[0].averageScore;
});
SelfTest.add('異붿쟻: ???щ엺????ID濡?媛덈씪吏吏 ?딅뒗??, () => {
  const ref = { value: 1 };
  let prev = [];
  for (let f = 0; f < 6; f++) prev = trackCandidates([box(50 + f * 2, 50, 20, 40)], prev, ref);
  return (prev.length === 1 && prev[0].hits === 6) || 'n=' + prev.length + ' hits=' + prev[0].hits;
});

/* ???섍꼍 遺꾨쪟 쨌 ?대룞 媛먯? ??*/
SelfTest.add('?섍꼍 遺꾨쪟: ?대몢???꾨젅????night', () =>
  SceneAnalyzer.classify({ mean: 30, contrast: 20, blown: 0 }) === 'night' || 'misclassified');
SelfTest.add('?섍꼍 遺꾨쪟: 怨쇰끂異??붿냼 ?ㅼ닔 ??glare', () =>
  SceneAnalyzer.classify({ mean: 180, contrast: 60, blown: 0.30 }) === 'glare' || 'misclassified');
SelfTest.add('?섍꼍 遺꾨쪟: 諛앷퀬 ??鍮???haze', () =>
  SceneAnalyzer.classify({ mean: 150, contrast: 18, blown: 0.01 }) === 'haze' || 'misclassified');
SelfTest.add('?섍꼍 遺꾨쪟: ?쇰컲 二쇨컙 ??clear', () =>
  SceneAnalyzer.classify({ mean: 140, contrast: 55, blown: 0.02 }) === 'clear' || 'misclassified');
SelfTest.add('?대룞 媛먯?: 媛숈? ?λ㈃??吏臾?李⑥씠??0', () => {
  const a = new Float32Array([10, 20, 30, 40]);
  return SceneAnalyzer.signatureDelta(a, new Float32Array([10, 20, 30, 40])) === 0 || 'nonzero';
});
SelfTest.add('?대룞 媛먯?: ?λ㈃???ш쾶 諛붾뚮㈃ ?꾧퀎媛믪쓣 ?섎뒗??, () => {
  const a = new Float32Array([10, 20, 30, 40]);
  const b = new Float32Array([200, 210, 220, 230]);
  return SceneAnalyzer.signatureDelta(a, b) > CONFIG.motionThreshold || 'below threshold';
});


'use strict';
/* ???ㅼ튂 ?좏삎 ?꾨━????*/
SelfTest.add('?ㅼ튂 ?좏삎: 5醫?紐⑤몢 ?꾩닔 ?꾨뱶瑜?媛뽰텣??, () => {
  const missing = Object.keys(SITE_PRESETS).filter(k => {
    const s = SITE_PRESETS[k];
    return !s.shape || !s.line || !s.i18n || !s.note || !s.heading || !(s.escalate > 0);
  });
  return missing.length === 0 || 'incomplete: ' + missing.join(', ');
});
SelfTest.add('?ㅼ튂 ?좏삎: 湲됰쪟(媛????대?蹂대떎 鍮⑤━ 湲닿툒 ?밴꺽', () =>
  SITE_PRESETS.river.escalate < SITE_PRESETS.beach.escalate || 'river not faster');
SelfTest.add('?ㅼ튂 ?좏삎: 紐⑤뱺 湲곕낯 寃쎄퀎?좎씠 ?붾㈃ ?덉뿉 ?덈떎', () => {
  const bad = Object.keys(SITE_PRESETS).filter(k =>
    SITE_PRESETS[k].line.some(p => p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1));
  return bad.length === 0 || 'out of range: ' + bad.join(', ');
});

/* ???ㅼ쨷 移대찓????*/
SelfTest.add('?ㅼ쨷 移대찓?? ?곹븳? 5?', () => CONFIG.maxCameras === 5 || 'max=' + CONFIG.maxCameras);
SelfTest.add('?ㅼ쨷 移대찓?? 移대찓?쇰쭏??寃쎄퀎?좎씠 ?낅┰?대떎', () => {
  const a = createCamera({ name: 'A' }), b = createCamera({ name: 'B' });
  a.points[0].y = 0.11;
  return b.points[0].y !== 0.11 || 'boundaries are shared';
});
SelfTest.add('?ㅼ쨷 移대찓?? 移대찓?쇰쭏??異붿쟻 ?곹깭媛 ?낅┰?대떎', () => {
  const a = createCamera({ name: 'A' }), b = createCamera({ name: 'B' });
  a.riskSince.set(1, Date.now());
  return (b.riskSince.size === 0 && a.riskSince.size === 1) || 'tracking state shared';
});
SelfTest.add('?ㅼ쨷 移대찓?? 吏묎퀎??媛???꾪뿕???깃툒????쒕줈 ?대떎', () => {
  const ranks = ['none', 'watch', 'alert', 'critical'];
  const ordered = ranks.every((r, i) => i === 0 || LEVEL_RANK[r] > LEVEL_RANK[ranks[i - 1]]);
  return ordered || 'rank order broken';
});
SelfTest.add('?ㅼ쨷 移대찓?? 珥덉젏 移대찓?쇨? ?놁쑝硫??덈퉬 媛앹껜濡??泥대맂??, () => {
  const focused = focusedCamera();
  return (focused && Array.isArray(focused.points) && focused.points.length >= 2) || 'no fallback camera';
});


'use strict';
/* ???ㅽ듃由??뚯뒪 ??*/
SelfTest.add('?ㅽ듃由? ?뺤옣?먮줈 ?뺤떇???먮퀎?쒕떎', () => {
  const cases = [['https://a/b/live.m3u8', 'hls'], ['https://a/b/c.mp4', 'video'],
                 ['https://a/cam.mjpg', 'mjpeg'], ['https://a/stream?x=1', 'video']];
  const bad = cases.filter(([url, want]) => resolveStreamKind(url, 'auto') !== want);
  return bad.length === 0 || 'misdetected: ' + bad.map(c => c[0]).join(', ');
});
SelfTest.add('?ㅽ듃由? 紐낆떆???뺤떇???먮룞 ?먮퀎蹂대떎 ?곗꽑?쒕떎', () =>
  resolveStreamKind('https://a/b.mp4', 'mjpeg') === 'mjpeg' || 'declared kind ignored');
SelfTest.add('?ㅽ듃由? ?섎せ??URL??嫄곕Ⅸ??, () => {
  const bad = validateStreamUrl('rtsp://cam/live');
  const ok = validateStreamUrl('https://cam/live.m3u8');
  return (bad === 'errBadUrl' && ok === null) || 'bad=' + bad + ' ok=' + ok;
});

/* ???좏뒠釉?쨌 ?붾㈃ 怨듭쑀 ??*/
SelfTest.add('?좏뒠釉? 二쇱냼 ?뺥깭蹂꾨줈 ?곸긽 ID瑜?戮묐뒗??, () => {
  const cases = [
    ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'dQw4w9WgXcQ'],
    ['https://youtu.be/dQw4w9WgXcQ?t=30', 'dQw4w9WgXcQ'],
    ['https://www.youtube.com/embed/dQw4w9WgXcQ', 'dQw4w9WgXcQ'],
    ['https://www.youtube.com/live/dQw4w9WgXcQ', 'dQw4w9WgXcQ'],
    ['https://m.youtube.com/watch?v=dQw4w9WgXcQ&feature=share', 'dQw4w9WgXcQ']
  ];
  const bad = cases.filter(([url, want]) => parseYouTubeId(url) !== want);
  return bad.length === 0 || 'failed: ' + bad.map(c => c[0]).join(', ');
});
SelfTest.add('?좏뒠釉? ?좏뒠釉뚭? ?꾨땶 二쇱냼쨌?섎せ??ID??嫄곕Ⅸ??, () => {
  const rejects = ['https://example.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=short',
                   'not a url', 'https://www.youtube.com/'];
  const leaked = rejects.filter(url => parseYouTubeId(url) !== null);
  return leaked.length === 0 || 'accepted: ' + leaked.join(', ');
});
SelfTest.add('?곸긽 ?뚯씪: ??룹엯?Β룻솗???⑥닔媛 紐⑤몢 ?곌껐???덈떎', () => {
  const tabExists = !!$('#tabFile');
  const paneExists = !!$('#paneFile');
  const inputIsFile = $('#fileInput') && $('#fileInput').type === 'file';
  const hasHandler = typeof connectFile === 'function';
  const ok = tabExists && paneExists && inputIsFile && hasHandler;
  return ok || 'tab=' + tabExists + ' pane=' + paneExists + ' input=' + inputIsFile + ' handler=' + hasHandler;
});
SelfTest.add('?뺣? 紐⑤뱶: 醫뚯슦 諛섏쟾 諛뺤뒪瑜??먮낯 醫뚰몴濡??섎룎由곕떎', () => {
  const back = unflipBox([10, 20, 30, 40], 100);
  const twice = unflipBox(back, 100);
  const same = twice.every((v, i) => Math.abs(v - [10, 20, 30, 40][i]) < 1e-9);
  return (back[0] === 60 && back[1] === 20 && back[2] === 30 && back[3] === 40 && same)
    || 'got ' + JSON.stringify(back) + ' roundtrip ' + JSON.stringify(twice);
});
SelfTest.add('?뺣? 紐⑤뱶: 耳쒕㈃ ????곹븳???섏뼱?쒕떎', () => {
  const before = state.precision;
  state.precision = false; const std = maxTiles();
  state.precision = true;  const hi = maxTiles();
  state.precision = before;
  return (hi.x * hi.y > std.x * std.y) || 'precision did not raise tile ceiling';
});

'use strict';
/* ???먯쑀 寃쎄퀎 援ъ뿭 (?대━?쇱씤 / ?대━怨? ??*/
SelfTest.add('援ъ뿭: ??2媛??대━?쇱씤? ?덉쟾 吏곸꽑 ?먯젙怨??숈씪', () => {
  const line = [{ x: 0, y: 0.5 }, { x: 1, y: 0.5 }];
  const above = isInDangerZone({ left: 0.4, right: 0.6, top: 0.2, bottom: 0.3 }, line, 'line');
  const below = isInDangerZone({ left: 0.4, right: 0.6, top: 0.7, bottom: 0.8 }, line, 'line');
  return (above === true && below === false) || 'above=' + above + ' below=' + below;
});
SelfTest.add('援ъ뿭: 爰얠씤 ?대━?쇱씤? 援ш컙蹂꾨줈 ?ㅻⅤ寃??먯젙', () => {
  /* ?쇱そ? ??퀬(0.3) ?ㅻⅨ履쎌? ?믪?(0.8) 援쎌? ?뚮룄??*/
  const zone = [{ x: 0, y: 0.3 }, { x: 0.5, y: 0.3 }, { x: 1, y: 0.8 }];
  const left = isInDangerZone({ left: 0.18, right: 0.22, top: 0.50, bottom: 0.56 }, zone, 'line');
  const right = isInDangerZone({ left: 0.88, right: 0.92, top: 0.50, bottom: 0.56 }, zone, 'line');
  return (left === false && right === true) || 'left=' + left + ' right=' + right;
});
SelfTest.add('援ъ뿭: ?대━?쇱씤 蹂닿컙媛믪씠 ?뺥솗?섎떎', () => {
  const zone = [{ x: 0, y: 0.2 }, { x: 1, y: 0.6 }];
  const mid = polylineYAt(0.5, zone);
  const outside = polylineYAt(1.5, zone);
  return (Math.abs(mid - 0.4) < 1e-9 && outside === null) || 'mid=' + mid + ' outside=' + outside;
});
SelfTest.add('援ъ뿭: 蹂쇰줉 ?ㅺ컖???대?/?몃? ?먯젙', () => {
  const square = [{ x: 0.2, y: 0.2 }, { x: 0.8, y: 0.2 }, { x: 0.8, y: 0.8 }, { x: 0.2, y: 0.8 }];
  const inside = pointInPolygon(0.5, 0.5, square);
  const outside = pointInPolygon(0.05, 0.5, square);
  return (inside === true && outside === false) || 'in=' + inside + ' out=' + outside;
});
SelfTest.add('援ъ뿭: ?ㅻぉ???룹옄) ?ㅺ컖?뺣룄 ?뺥솗???먯젙', () => {
  /* 媛?대뜲媛 ?뚯씤 ?룹옄 ??留뚯엯遺??諛붽묑?댁뼱???쒕떎 */
  const c = [{ x: 0.1, y: 0.1 }, { x: 0.9, y: 0.1 }, { x: 0.9, y: 0.9 }, { x: 0.7, y: 0.9 },
             { x: 0.7, y: 0.4 }, { x: 0.3, y: 0.4 }, { x: 0.3, y: 0.9 }, { x: 0.1, y: 0.9 }];
  const inNotch = pointInPolygon(0.5, 0.7, c);
  const inBody = pointInPolygon(0.5, 0.2, c);
  return (inNotch === false && inBody === true) || 'notch=' + inNotch + ' body=' + inBody;
});
SelfTest.add('援ъ뿭: ?대━怨?紐⑤뱶?먯꽌??援ъ뿭 ?덉씠 ?꾪뿕', () => {
  const square = [{ x: 0.2, y: 0.2 }, { x: 0.8, y: 0.2 }, { x: 0.8, y: 0.8 }, { x: 0.2, y: 0.8 }];
  const inside = isInDangerZone({ left: 0.48, right: 0.52, top: 0.5, bottom: 0.56 }, square, 'polygon');
  const outside = isInDangerZone({ left: 0.01, right: 0.05, top: 0.5, bottom: 0.56 }, square, 'polygon');
  return (inside === true && outside === false) || 'in=' + inside + ' out=' + outside;
});
SelfTest.add('援ъ뿭: ??2媛쒖쭨由??대━怨ㅼ? ?꾪뿕 ?먯젙???섏? ?딅뒗??, () => {
  const two = [{ x: 0.2, y: 0.2 }, { x: 0.8, y: 0.8 }];
  return isInDangerZone({ left: 0.4, right: 0.6, top: 0.4, bottom: 0.5 }, two, 'polygon') === false || 'expected false';
});
SelfTest.add('援ъ뿭: ???먯? ?대━?쇱씤??x ?쒖꽌瑜??좎??섎ŉ ?쎌엯?쒕떎', () => {
  const points = [{ x: 0.1, y: 0.5 }, { x: 0.9, y: 0.5 }];
  const index = insertIndexFor(points, { x: 0.5, y: 0.3 }, 'line');
  return index === 1 || 'index=' + index;
});
SelfTest.add('援ъ뿭: ???먯? ?대━怨ㅼ쓽 媛??媛源뚯슫 蹂???쎌엯?쒕떎', () => {
  const square = [{ x: 0.2, y: 0.2 }, { x: 0.8, y: 0.2 }, { x: 0.8, y: 0.8 }, { x: 0.2, y: 0.8 }];
  const index = insertIndexFor(square, { x: 0.5, y: 0.19 }, 'polygon');
  return index === 1 || 'index=' + index;
});
SelfTest.add('援ъ뿭: ??以꾩씠湲곕뒗 紐⑥뼇???좎???梨?媛쒖닔留?以꾩씤??, () => {
  const dense = [];
  for (let i = 0; i <= 20; i++) dense.push({ x: i / 20, y: 0.5 });
  dense[10] = { x: 0.5, y: 0.2 };
  const simplified = simplifyPoints(dense, 0.01);
  const keepsPeak = simplified.some(p => Math.abs(p.y - 0.2) < 1e-9);
  return (simplified.length < dense.length && simplified.length >= 3 && keepsPeak) ||
    'n=' + simplified.length + ' peak=' + keepsPeak;
});
SelfTest.add('援ъ뿭: 理쒖냼 ????洹쒖튃 (??2, 援ъ뿭 3)', () =>
  (zoneMinPoints('line') === 2 && zoneMinPoints('polygon') === 3 &&
   isValidZone([{ x: 0, y: 0 }, { x: 1, y: 1 }], 'polygon') === false) || 'rule broken');
SelfTest.add('援ъ뿭: 移대찓?쇰쭏??紐⑤뱶媛 ?낅┰?대떎', () => {
  const a = createCamera({ name: 'A' }), b = createCamera({ name: 'B' });
  a.zoneMode = 'polygon';
  return b.zoneMode === 'line' || 'mode shared';
});

SelfTest.add('援ъ뿭: 援ъ뿭?믪꽑 ?꾪솚? ?꾨옒履??ㅺ낸留??④릿??, () => {
  /* ????援ъ뿭?쇰줈 ?먮룞 ?앹꽦???좊? ?섎룎由щ㈃ ?먮옒 ?좎쑝濡?蹂듦??댁빞 ?쒕떎 */
  const band = [{ x: 0.12, y: 0.66 }, { x: 0.88, y: 0.66 }, { x: 0.88, y: 0.02 }, { x: 0.12, y: 0.02 }];
  const line = polygonToPolyline(band);
  return (line.length === 2 && Math.abs(line[0].y - 0.66) < 1e-9 && Math.abs(line[1].y - 0.66) < 1e-9) ||
    'got ' + JSON.stringify(line);
});

SelfTest.add('援ъ뿭: ??2媛쒕뒗 吏곸꽑 寃쎈줈濡?洹몃젮吏꾨떎', () => {
  const d = smoothPath([{ x: 0.1, y: 0.5 }, { x: 0.9, y: 0.5 }], false);
  return (d.indexOf('M') === 0 && d.indexOf('L') > 0 && d.indexOf('C') < 0) || 'got ' + d;
});
SelfTest.add('援ъ뿭: ??3媛??댁긽? 遺?쒕윭??怨≪꽑(踰좎????쇰줈 洹몃젮吏꾨떎', () => {
  const d = smoothPath([{ x: 0.1, y: 0.5 }, { x: 0.5, y: 0.3 }, { x: 0.9, y: 0.6 }], false);
  return d.indexOf('C') > 0 || 'no curve: ' + d;
});
SelfTest.add('援ъ뿭: ?ロ엺 ?곸뿭 寃쎈줈??Z濡??앸궃??, () => {
  const d = smoothPath([{ x: 0.2, y: 0.2 }, { x: 0.8, y: 0.2 }, { x: 0.8, y: 0.8 }], true);
  return d.trim().slice(-1) === 'Z' || 'not closed: ' + d;
});
SelfTest.add('援ъ뿭: 怨≪꽑 寃쎈줈??泥??먯뿉???쒖옉?쒕떎', () => {
  const d = smoothPath([{ x: 0.25, y: 0.4 }, { x: 0.5, y: 0.3 }, { x: 0.75, y: 0.5 }], false);
  return d.indexOf('M 25.00 40.00') === 0 || 'starts wrong: ' + d.slice(0, 20);
});
SelfTest.add('洹몃━湲? ?쒕옒洹?沅ㅼ쟻? 紐⑥뼇???좎???梨??먯씠 以꾩뼱?좊떎', () => {
  /* ?먯쑝濡?洹몃┛ 寃껋쿂??珥섏킌??怨≪꽑 沅ㅼ쟻 */
  const stroke = [];
  for (let i = 0; i <= 60; i++) {
    const x = i / 60;
    stroke.push({ x, y: 0.5 + Math.sin(x * Math.PI) * 0.15 });
  }
  const drawn = simplifyPoints(stroke, CONFIG.freehandTolerance);
  const peak = drawn.some(p => p.y > 0.6);
  return (drawn.length < stroke.length && drawn.length >= 4 && peak) ||
    'n=' + drawn.length + ' peak=' + peak;
});
SelfTest.add('洹몃━湲? ?먮뼥由??듭젣 媛꾧꺽???ㅼ젙?섏뼱 ?덈떎', () =>
  (CONFIG.freehandMinStep > 0 && CONFIG.freehandMinStep < 0.05) || 'step=' + CONFIG.freehandMinStep);


'use strict';
/* ???뚮┝ ?섏떊????*/
SelfTest.add('?섏떊?? ?대쫫???놁쑝硫??깅줉 嫄곕?', () =>
  normalizeContact({ name: '', phone: '01000000000' }).error === 'errContactName' || 'accepted empty name');
SelfTest.add('?섏떊?? ?곕씫 ?섎떒???섎굹???놁쑝硫?嫄곕?', () =>
  normalizeContact({ name: '?띻만?? }).error === 'errContactChannel' || 'accepted no channel');
SelfTest.add('?섏떊?? ?섎せ???뱁썒 二쇱냼 嫄곕?', () =>
  normalizeContact({ name: '?띻만??, webhook: 'ftp://x/y' }).error === 'errContactWebhook' || 'accepted bad webhook');
SelfTest.add('?섏떊?? ?뺤긽 ?낅젰? ?깅줉?쒕떎', () => {
  const r = normalizeContact({ name: '?띻만??, role: '1援ъ뿭', phone: '010-1234-5678', minLevel: 'critical' });
  return (r.contact && r.contact.minLevel === 'critical' && r.contact.onDuty === true) || 'normalize failed';
});
SelfTest.add('?섏떊?? 湲닿툒留?諛쏅뒗 ?щ엺? 寃쎄퀬?먯꽌 ?쒖쇅?쒕떎', () => {
  const list = [
    { name: 'A', onDuty: true, minLevel: 'alert' },
    { name: 'B', onDuty: true, minLevel: 'critical' }
  ];
  const onAlert = contactsForLevel('alert', list).map(c => c.name);
  const onCritical = contactsForLevel('critical', list).map(c => c.name);
  return (onAlert.join() === 'A' && onCritical.join() === 'A,B') ||
    'alert=' + onAlert.join() + ' critical=' + onCritical.join();
});
SelfTest.add('?섏떊?? ?湲?以묒씤 ?щ엺?먭쾶??蹂대궡吏 ?딅뒗??, () => {
  const list = [{ name: 'A', onDuty: false, minLevel: 'alert' }];
  return contactsForLevel('critical', list).length === 0 || 'sent to off-duty';
});
SelfTest.add('?섏떊?? ?뱁썒 蹂몃Ц???꾩닔 ??ぉ??紐⑤몢 ?ㅼ뼱媛꾨떎', () => {
  const payload = buildAlertPayload({ name: 'CAM1', zoneMode: 'polygon' }, 'critical', 2, 7,
    { name: '?띻만??, role: '1援ъ뿭' }, false);
  const required = ['type', 'level', 'site', 'camera', 'peopleInZone', 'dwellSeconds', 'recipient', 'message', 'timestamp'];
  const missing = required.filter(k => payload[k] === undefined);
  return (missing.length === 0 && payload.peopleInZone === 2 && payload.level === 'critical') ||
    'missing: ' + missing.join(', ');
});
SelfTest.add('?섏떊?? ?뚯뒪??諛쒖넚? test ?뚮옒洹멸? 遺숇뒗??, () => {
  const payload = buildAlertPayload({ name: 'CAM1' }, 'alert', 0, 0, { name: 'A', role: '' }, true);
  return payload.test === true || 'test flag missing';
});

SelfTest.add('?섏떊?? ?깃툒???щ씪媛硫?諛쒖넚 ?듭젣瑜??듦낵?쒕떎', () => {
  const now = Date.now();
  const contact = { lastSentAt: now - 1000, lastLevelRank: LEVEL_RANK.alert };
  const sameLevel = shouldSendNow(contact, 'alert', now);
  const escalated = shouldSendNow(contact, 'critical', now);
  return (sameLevel === false && escalated === true) || 'same=' + sameLevel + ' up=' + escalated;
});
SelfTest.add('?섏떊?? ?듭젣 ?쒓컙??吏?섎㈃ 媛숈? ?깃툒???ㅼ떆 蹂대궦??, () => {
  const now = Date.now();
  const contact = { lastSentAt: now - CONFIG.contactThrottleMs - 1, lastLevelRank: LEVEL_RANK.alert };
  return shouldSendNow(contact, 'alert', now) === true || 'still throttled';
});

/* ??寃쎄퀎??議곗옉 ??*/
SelfTest.add('寃쎄퀎?? ?믪씠 ?대룞 ?꾩뿉??0?? 踰붿쐞 ?좎?', () => {
  const cam = focusedCamera();
  const backup = cam.points.map(p => ({ x: p.x, y: p.y }));
  moveLineToHeight(100); const high = cam.points.every(p => p.y >= 0 && p.y <= 1);
  moveLineToHeight(0);   const low = cam.points.every(p => p.y >= 0 && p.y <= 1);
  cam.points = backup; drawBoundary(cam); syncMobileLineControls();
  return (high && low) || 'out of range';
});
SelfTest.add('寃쎄퀎?? 理쒕? 湲곗슱湲곗뿉?쒕룄 0?? 踰붿쐞 ?좎?', () => {
  const cam = focusedCamera();
  const backup = cam.points.map(p => ({ x: p.x, y: p.y }));
  setLineTilt(50); const a = cam.points.every(p => p.y >= 0 && p.y <= 1);
  setLineTilt(-50); const b = cam.points.every(p => p.y >= 0 && p.y <= 1);
  cam.points = backup; drawBoundary(cam); syncMobileLineControls();
  return (a && b) || 'out of range';
});


'use strict';
/* ???꾪뙥??怨꾩궛 ??*/
SelfTest.add('?꾪뙥?? ?뚮났瑜?0?대㈃ 寃곌낵??0', () =>
  computeImpact(254, 0, 0.7).deaths === 0 || 'expected 0');
SelfTest.add('?꾪뙥?? ?꾩엯瑜좎뿉 ?좏삎 鍮꾨?', () => {
  const full = computeImpact(254, 0.2, 0.7).deaths;
  const half = computeImpact(127, 0.2, 0.7).deaths;
  return Math.abs(full / 2 - half) < 1e-9 || 'not linear';
});
SelfTest.add('?꾪뙥?? 理쒕? ?쒕굹由ъ삤媛 ?고룊洹??щ쭩?먮? ?섏? ?딆쓬', () => {
  const max = computeImpact(254, 1, 1).deaths;
  return max <= IMPACT.seaDeathsPerYear || 'exceeds baseline: ' + max;
});
SelfTest.add('?꾪뙥?? 鍮꾩슜? ?щ쭩??횞 ?④?', () => {
  const r = computeImpact(254, 0.2, 0.7);
  return Math.abs(r.cost - r.deaths * IMPACT.socialCostPerDeath) < 1e-6 || 'mismatch';
});

/* ???꾧퀎媛??⑹꽦 ??*/
SelfTest.add('?꾧퀎媛? ?쇨컙 ?꾨━?뗭? ?꾧퀎媛믪쓣 ??텛怨??뺤씤 ?꾨젅?꾩쓣 ?섎┝', () => {
  const mode = state.presetMode, scene = state.scene;
  state.presetMode = 'auto'; state.scene = 'clear';
  const clearT = activeThresholds();
  state.scene = 'night';
  const nightT = activeThresholds();
  state.presetMode = mode; state.scene = scene;
  return (nightT.fullScore < clearT.fullScore && nightT.confirmFrames > clearT.confirmFrames) || 'preset has no effect';
});
SelfTest.add('?꾧퀎媛? ????꾧퀎媛믪? ??긽 ?꾩껜 ?꾧퀎媛??댄븯', () => {
  const t = activeThresholds();
  return t.tileScore <= t.fullScore || 'tile > full';
});


'use strict';
/* ???ㅺ뎅????*/

/** 吏?먰븯??紐⑤뱺 ?몄뼱. ?몄뼱瑜?異붽??섎㈃ ?ш린?먮쭔 ?ｌ쑝硫??꾨옒 寃?ш? ?꾨? ?곕씪媛꾨떎. */
const SUPPORTED_LANGUAGES = ['ko', 'en', 'zh'];

SelfTest.add('?ㅺ뎅?? 吏???몄뼱 3媛쒓? 紐⑤몢 ?ъ쟾???덈떎', () => {
  const missing = SUPPORTED_LANGUAGES.filter(lang => !I18N[lang]);
  return missing.length === 0 || 'no dictionary for: ' + missing.join(', ');
});

SelfTest.add('?ㅺ뎅?? 紐⑤뱺 ?몄뼱媛 媛숈? ?ㅻ? 媛吏꾨떎', () => {
  const base = Object.keys(I18N.ko);
  const problems = [];
  SUPPORTED_LANGUAGES.forEach(lang => {
    const missing = base.filter(k => !(k in I18N[lang]));
    const extra = Object.keys(I18N[lang]).filter(k => !(k in I18N.ko));
    if (missing.length) problems.push(lang + ' ?꾨씫: ' + missing.slice(0, 6).join(','));
    if (extra.length) problems.push(lang + ' ?됱뿬: ' + extra.slice(0, 6).join(','));
  });
  return problems.length === 0 || problems.join(' | ');
});

SelfTest.add('?ㅺ뎅?? 鍮?臾멸뎄媛 ?녿떎', () => {
  const empty = [];
  SUPPORTED_LANGUAGES.forEach(lang => {
    Object.keys(I18N[lang]).forEach(key => {
      if (!String(I18N[lang][key]).trim()) empty.push(lang + '.' + key);
    });
  });
  return empty.length === 0 || 'empty: ' + empty.slice(0, 8).join(', ');
});

SelfTest.add('?ㅺ뎅?? 踰덉뿭??鍮좊쑉???쒓뎅?닿? 洹몃?濡??⑥? 怨녹씠 ?녿떎', () => {
  /* ?곸뼱쨌以묎뎅???ъ쟾???쒓????⑥븘 ?덉쑝硫?踰덉뿭??嫄대꼫??寃껋씠?? */
  const hangul = /[媛-??/;
  const leftover = [];
  ['en', 'zh'].forEach(lang => {
    Object.keys(I18N[lang]).forEach(key => {
      if (hangul.test(String(I18N[lang][key]))) leftover.push(lang + '.' + key);
    });
  });
  return leftover.length === 0 || 'untranslated: ' + leftover.slice(0, 8).join(', ');
});

SelfTest.add('?ㅺ뎅?? DOM??data-i18n ?ㅺ? 紐⑤몢 ?ъ쟾??議댁옱', () => {
  const keys = Array.from(document.querySelectorAll('[data-i18n]')).map(el => el.dataset.i18n);
  const missing = keys.filter(key => !(key in I18N.ko));
  return missing.length === 0 || 'unknown keys: ' + Array.from(new Set(missing)).slice(0, 8).join(', ');
});

SelfTest.add('?ㅺ뎅?? ?ㅼ튂 ?좏삎 臾몄옄?댁씠 紐⑤뱺 ?몄뼱???덈떎', () => {
  const keys = Object.keys(SITE_PRESETS).flatMap(k => [SITE_PRESETS[k].i18n, SITE_PRESETS[k].note, SITE_PRESETS[k].heading]);
  const missing = [];
  SUPPORTED_LANGUAGES.forEach(lang => keys.forEach(k => { if (!(k in I18N[lang])) missing.push(lang + '.' + k); }));
  return missing.length === 0 || 'missing: ' + missing.join(', ');
});

SelfTest.add('?ㅺ뎅?? 移섑솚 蹂?섍? 紐⑤뱺 ?몄뼱?먯꽌 吏앹씠 留욌뒗??, () => {
  /* {count} ?섎굹留?蹂대뒗 寃껋쑝濡쒕뒗 遺議깊븯?? 踰덉뿭?섎떎 蹂?섎? 鍮좊쑉由щ㈃
     寃쎈낫 臾멸뎄?먯꽌 ?몄썝 ?섍? ?щ씪吏?梨?諛쒖넚?쒕떎. ??臾멸뎄瑜??議고븳?? */
  const vars = text => (String(text).match(/\{\w+\}/g) || []).sort().join(',');
  const bad = [];
  Object.keys(I18N.ko).forEach(key => {
    const expected = vars(I18N.ko[key]);
    SUPPORTED_LANGUAGES.forEach(lang => {
      if (vars(I18N[lang][key]) !== expected) bad.push(lang + '.' + key);
    });
  });
  return bad.length === 0 || 'variable mismatch: ' + bad.slice(0, 8).join(', ');
});

SelfTest.add('?ㅺ뎅?? ?몄뼱蹂?濡쒖??셋룹쓬???ㅼ젙??媛뽰떠???덈떎', () => {
  const bad = SUPPORTED_LANGUAGES.filter(lang => {
    const L = LOCALES[lang];
    return !L || !L.locale || !L.voice || !L.title || !L.currencyZero;
  });
  return bad.length === 0 || 'incomplete locale: ' + bad.join(', ');
});

SelfTest.add('?ㅺ뎅?? ?몄뼱 ?좏깮 紐⑸줉??吏???몄뼱? ?쇱튂?쒕떎', () => {
  const select = $('#languageSelect');
  if (!select) return true;
  const options = Array.from(select.options).map(o => o.value).sort();
  const expected = SUPPORTED_LANGUAGES.slice().sort();
  return options.join(',') === expected.join(',') ||
    ('options [' + options.join(',') + '] vs supported [' + expected.join(',') + ']');
});


'use strict';
/* ???묎렐????*/
SelfTest.add('?묎렐?? 紐⑤뱺 range ?낅젰???묎렐 媛?ν븳 ?대쫫???덉쓬', () => {
  const bad = Array.from(document.querySelectorAll('input[type=range]')).filter(input =>
    !input.closest('label') && !input.getAttribute('aria-label'));
  return bad.length === 0 || bad.length + ' unlabelled range inputs';
});
SelfTest.add('?묎렐?? 寃쎈낫 ?곸뿭??aria-live濡??좎뼵??, () =>
  (adminToast.getAttribute('aria-live') === 'assertive' && liveRegion.getAttribute('aria-live') === 'polite') || 'aria-live missing');

/* ???????*/
SelfTest.add('??? 寃쎄퀎??吏곷젹??蹂듭썝 ?뺣났', () => {
  const cam = focusedCamera();
  const backup = cam.points.map(p => ({ x: p.x, y: p.y }));
  cam.points = [{ x: 0.21, y: 0.43 }, { x: 0.79, y: 0.57 }];
  persistBoundaries();
  cam.points = [{ x: 0, y: 0 }, { x: 1, y: 1 }];
  restoreBoundaryFor(cam);
  const ok = Math.abs(cam.points[0].x - 0.21) < 1e-9 && Math.abs(cam.points[1].y - 0.57) < 1e-9;
  cam.points = backup; persistBoundaries(); drawBoundary(cam); syncMobileLineControls();
  return ok || 'round-trip failed';
});

/* ???ㅼ젙??異붽??섎㈃??'???뺣낫 吏?곌린' 紐⑸줉???ｋ뒗 寃껋쓣 ?딄린 ?쎈떎.
   README 21?μ씠 "?ㅼ젙????踰덉뿉 吏?곷땲?? ?쇨퀬 ?쎌냽?섎?濡? ??ν븯???ㅺ?
   吏?곌린 紐⑸줉?먯꽌 鍮좎?硫??쎌냽??源⑥쭊?? ?뚯뒪?먯꽌 吏곸젒 ?議고븳?? */
SelfTest.add('媛쒖씤?뺣낫: ??ν븯??紐⑤뱺 ?ㅺ? 吏?곌린 紐⑸줉???ㅼ뼱 ?덈떎', () => {
  const source = String(wipeLocalData);
  const saved = ['beachWatchContacts', 'beachWatchLanguage', 'beachWatchSite',
                 'beachWatchPreset', 'beachWatchThreshold', 'beachWatchFrames',
                 'beachWatchEscalate', 'beachWatchHours', 'beachWatchHintDismissed',
                 'beachWatchNorthStar', 'beachWatchPrecision', 'beachWatchBoundary:'];
  const missing = saved.filter(k => source.indexOf(k) < 0);
  return missing.length === 0 || 'wipe list missing: ' + missing.join(', ');
});

'use strict';
/* ??v6: ?덉젙???뚭? ??*/
SelfTest.add('異붿쟻 ?좎삁: ???꾨젅???볦퀜??媛숈? ?щ엺?쇰줈 ?⑤뒗??, () => {
  const prev = [{ id: 7, bbox: [10, 10, 20, 40], score: .8, hits: 5, averageScore: .8, sizeStable: true, missed: 0 }];
  const kept = carryTracks([], prev);
  return (kept.length === 1 && kept[0].id === 7 && kept[0].missed === 1) || 'lost track after one miss';
});

SelfTest.add('異붿쟻 ?좎삁: ?좎삁 ?잛닔瑜??섍린硫?踰꾨┛??, () => {
  let prev = [{ id: 7, bbox: [10, 10, 20, 40], score: .8, hits: 5, averageScore: .8, sizeStable: true, missed: 0 }];
  for (let i = 0; i <= CONFIG.trackGraceFrames; i++) prev = carryTracks([], prev);
  return prev.length === 0 || 'ghost track never expires';
});

SelfTest.add('異붿쟻 ?좎삁: ?ㅼ떆 ?≫엳硫??꾩쟻 愿痢??섍? ?댁뼱吏꾨떎', () => {
  const prev = carryTracks([], [{ id: 3, bbox: [10, 10, 20, 40], score: .8, hits: 4, averageScore: .8, sizeStable: true, missed: 0 }]);
  const idRef = { value: 99 };
  const again = trackCandidates([{ bbox: [11, 11, 20, 40], score: .8, class: 'person' }], prev, idRef);
  return (again[0].id === 3 && again[0].hits === 5 && again[0].missed === 0) || 'hits reset after brief miss';
});

SelfTest.add('??? 寃쎄퀎?좎? ?대쫫???꾨땲??移대찓??id濡???λ맂??, () => {
  const cam = focusedCamera();
  const backup = cam.points.map(p => ({ x: p.x, y: p.y })), name = cam.name;
  cam.points = [{ x: 0.3, y: 0.4 }, { x: 0.7, y: 0.6 }];
  persistBoundaries();
  const saved = JSON.parse(store.get(boundaryStorageKey(), '{}'));
  const byId = !!saved[cam.id];
  /* ?대쫫??諛붾뚯뼱??=?몄뼱 ?꾪솚) 蹂듭썝?쒕떎 */
  cam.name = name + ' renamed';
  cam.points = [{ x: 0, y: 0 }, { x: 1, y: 1 }];
  restoreBoundaryFor(cam);
  const restored = Math.abs(cam.points[0].x - 0.3) < 1e-9;
  cam.name = name; cam.points = backup; persistBoundaries(); drawBoundary(cam);
  return (byId && restored) || ('id key ' + byId + ', restore ' + restored);
});

SelfTest.add('?뚮┝: ?쒗뿕 諛쒖넚? ?ㅼ젣 寃쎈낫??以묐났 諛⑹? ?쒓퀎瑜?嫄대뱶由ъ? ?딅뒗??, () => {
  const backup = state.contacts;
  const c = normalizeContact({ name: '?먭???, phone: '01000000000', minLevel: 'alert', onDuty: true });
  state.contacts = [c];
  notifyRecipients(null, 'alert', 'ALERT', 1, 2, true, c);
  const ok = !c.lastSentAt && shouldSendNow(c, 'alert', Date.now());
  state.contacts = backup;
  return ok || 'test send consumed the real throttle';
});

SelfTest.add('?ㅼ젙: tfjs ?泥?CDN??以鍮꾨릺???덈떎', () =>
  (Array.isArray(CONFIG.tfCdns) && CONFIG.tfCdns.length >= 2) || 'no tfjs fallback');

SelfTest.add('?ㅼ젙: ?뱁썒???쒓컙 ?쒗븳???ㅼ젙?섏뼱 ?덈떎', () =>
  (CONFIG.webhookTimeoutMs > 0 && CONFIG.webhookTimeoutMs <= 15000) || 'webhook has no timeout');

SelfTest.add('?ㅼ젙: ?곸긽 ?뺤? 媛먯떆 ?쒓컙???⑸━??踰붿쐞', () =>
  (CONFIG.streamStallMs >= 3000 && CONFIG.streamStallMs <= 30000) || 'bad stall window');


'use strict';
/* ??v7: 媛먯떆 ?쒓컙? 쨌 ?뚯꽦 쨌 ?ㅻ깄??쨌 ?ㅽ봽?쇱씤 ??*/
SelfTest.add('?쒓컙?: 09:00??9:00 ?덊뙉???뺥솗??媛瑜몃떎', () => {
  const at = (h, m) => h * 60 + (m || 0);
  return (withinWatchHours(at(12), '09:00', '19:00') &&
          !withinWatchHours(at(8, 59), '09:00', '19:00') &&
          withinWatchHours(at(9), '09:00', '19:00') &&
          !withinWatchHours(at(19), '09:00', '19:00')) || 'daytime window wrong';
});

SelfTest.add('?쒓컙?: ?먯젙???섍린??援ш컙(22:00??6:00)??留욌떎', () => {
  const at = h => h * 60;
  return (withinWatchHours(at(23), '22:00', '06:00') &&
          withinWatchHours(at(2), '22:00', '06:00') &&
          !withinWatchHours(at(12), '22:00', '06:00')) || 'overnight window wrong';
});

SelfTest.add('?쒓컙?: ?ㅼ젙???녾굅???섎せ?섎㈃ ??긽 媛먯떆', () =>
  (withinWatchHours(600, '', '') && withinWatchHours(600, '25:00', '19:00') &&
   withinWatchHours(600, '09:00', '09:00')) || 'should default to always-on');

SelfTest.add('?쒓컙?: ?쒓컖 臾몄옄???뚯떛', () =>
  (parseHhMm('09:30') === 570 && parseHhMm('00:00') === 0 && parseHhMm('23:59') === 1439 &&
   parseHhMm('24:00') === null && parseHhMm('9:5') === null && parseHhMm('') === null) || 'parse failed');

SelfTest.add('?뚯꽦: ?덈궡 臾몄옣???깃툒쨌移대찓?셋룹씤?먯씠 紐⑤몢 ?ㅼ뼱媛꾨떎', () => {
  const text = buildVoiceMessage({ name: '遺곸륫 1援ъ뿭' }, 'critical', 2, 7.4);
  return (text.indexOf('遺곸륫 1援ъ뿭') >= 0 && text.indexOf('2') >= 0 && text.indexOf('7') >= 0)
    || ('voice text incomplete: ' + text);
});

SelfTest.add('?뚯꽦: 媛숈? ?곹솴? 諛섎났?댁꽌 ?쎌? ?딅뒗??, () => {
  const now = Date.now();
  Speaker.lastKey = 'cam1:alert'; Speaker.lastSpokenAt = now;
  const same = Speaker.shouldSpeak('cam1:alert', now + 1000);
  const escalated = Speaker.shouldSpeak('cam1:critical', now + 1000);
  const later = Speaker.shouldSpeak('cam1:alert', now + CONFIG.voiceRepeatMs + 10);
  Speaker.lastKey = ''; Speaker.lastSpokenAt = 0;
  return (!same && escalated && later) || 'repeat rule wrong';
});

SelfTest.add('?ㅻ깄?? ?꾨㈃ 罹≪쿂?섏? ?딅뒗??, () => {
  const box = $('#snapshotEnabled');
  const was = box.checked;
  box.checked = false;
  const off = captureSnapshot(focusedCamera());
  box.checked = was;
  return off === '' || 'captured while disabled';
});

SelfTest.add('?ㅻ깄?? ?ㅻ옒??湲곕줉???대?吏??硫붾え由ъ뿉??鍮꾩슫??, () => {
  const backup = state.events.slice();
  state.events = [];
  for (let i = 0; i < CONFIG.maxSnapshots + 5; i++) {
    pushEvent('test ' + i, 'info', { snapshot: 'data:image/jpeg;base64,AAAA' });
  }
  const withShots = state.events.filter(e => e.snapshot).length;
  state.events = backup; renderEventLog();
  return withShots <= CONFIG.maxSnapshots || ('kept ' + withShots + ' snapshots');
});

SelfTest.add('?ㅽ봽?쇱씤: 罹먯떆 紐⑤뱢??以鍮꾨릺???덈떎', () =>
  (typeof OfflineCache === 'object' && typeof OfflineCache.runCachedScript === 'function' &&
   typeof OfflineCache.fetchThrough === 'function') || 'offline cache missing');

SelfTest.add('?ㅻ낫?? ?붿궡?쒕줈 ?먯쓣 ??린硫?0?? 踰붿쐞瑜?踰쀬뼱?섏? ?딅뒗??, () => {
  const cam = focusedCamera();
  const backup = cam.points.map(p => ({ x: p.x, y: p.y }));
  cam.points[0] = { x: 0.001, y: 0.001 };
  for (let i = 0; i < 20; i++) nudgeZonePoint(-1, -1, true);
  const p = cam.points[0];
  const ok = p.x >= 0 && p.x <= 1 && p.y >= 0 && p.y <= 1;
  cam.points = backup; drawBoundary(cam); persistBoundaries();
  return ok || ('out of range: ' + JSON.stringify(p));
});

SelfTest.add('?⑥텞?? ?낅젰 移몄뿉 ??댄븨 以묒씪 ?뚮뒗 ?숈옉?섏? ?딅뒗??, () =>
  (typingInField({ tagName: 'INPUT' }) && typingInField({ tagName: 'TEXTAREA' }) &&
   !typingInField({ tagName: 'BUTTON' })) || 'shortcut guard wrong');

SelfTest.add('?묎렐?? ?⑥텞???덈궡??紐⑤뱺 ???ㅻ챸???덈떎', () => {
  const items = document.querySelectorAll('#shortcutDialog .shortcut-list li');
  return items.length >= 8 || ('only ' + items.length + ' shortcuts documented');
});



'use strict';
/* ??v9: 遺곴레??吏??쨌 ?대┛???덉쟾 쨌 媛쒖씤?뺣낫 ??*/
SelfTest.add('遺곴레?? 以묒븰媛믪쓣 ?뺥솗??怨꾩궛?쒕떎', () => {
  const backup = NorthStar.samples.slice();
  NorthStar.samples = [3, 9, 5];
  const odd = NorthStar.median();
  NorthStar.samples = [2, 4, 6, 8];
  const even = NorthStar.median();
  NorthStar.samples = [];
  const none = NorthStar.median();
  NorthStar.samples = backup;
  return (odd === 5 && even === 5 && none === null) || ('odd ' + odd + ', even ' + even + ', none ' + none);
});

SelfTest.add('遺곴레?? ?뺤씤?섏? ?딆? 寃쎈낫???쒕낯???ｌ? ?딅뒗??, () => {
  const backup = NorthStar.samples.slice();
  NorthStar.samples = []; NorthStar.pending.clear();
  const before = NorthStar.count();
  NorthStar.open({ id: 'testcam' }, Date.now() - 4000);
  NorthStar.clear({ id: 'testcam' });          /* ?꾨Т???뺤씤?섏? ?딄퀬 ?곹솴 醫낅즺 */
  const after = NorthStar.count();
  NorthStar.samples = backup; NorthStar.pending.clear();
  return (before === 0 && after === 0) || 'unacknowledged alert leaked into samples';
});

SelfTest.add('遺곴레?? 吏꾩엯 ?쒓컖遺???щ?濡?媛먯? 吏?곕룄 ?レ옄???≫엺??, () => {
  const backup = NorthStar.samples.slice();
  NorthStar.samples = []; NorthStar.pending.clear();
  const enteredAt = Date.now() - 7000;
  NorthStar.open({ id: 'testcam' }, enteredAt);
  const seconds = NorthStar.acknowledge();
  NorthStar.samples = backup; NorthStar.pending.clear();
  return (seconds >= 6.8 && seconds <= 7.5) || ('measured ' + seconds);
});

SelfTest.add('遺곴레?? ?쒕낯 ?곹븳???섍린吏 ?딅뒗??, () => {
  const backup = NorthStar.samples.slice();
  NorthStar.samples = [];
  for (let i = 0; i < CONFIG.northStarSamples + 20; i++) {
    NorthStar.pending.clear();
    NorthStar.open({ id: 'c' }, Date.now() - 1000);
    NorthStar.acknowledge();
  }
  const n = NorthStar.count();
  NorthStar.samples = backup; NorthStar.save();
  return n === CONFIG.northStarSamples || ('kept ' + n);
});

SelfTest.add('?대┛???덉쟾: ?대┛???곗꽑??理쒖냼 ?ш린瑜???텣??, () => {
  const adult = { minW: 5, minH: 7, minArea: 45, aspectMax: 2.6 };
  const child = childAwareShape(adult);
  return (child.minW < adult.minW && child.minH < adult.minH && child.minArea < adult.minArea)
    || ('not smaller: ' + JSON.stringify(child));
});

SelfTest.add('?대┛???덉쟾: ?대Ⅸ 湲곗??먯꽌 嫄몃윭吏???묒? ?щ엺???듦낵?쒕떎', () => {
  /* 硫由??덈뒗 ?꾩씠 ?뺣룄???ш린 */
  const small = box(100, 100, 4, 6);
  const adult = { minW: 5, minH: 7, minArea: 45, aspectMax: 2.6 };
  const rejectedByAdult = !isPlausiblePerson(small, adult);
  const acceptedByChild = isPlausiblePerson(small, childAwareShape(adult));
  return (rejectedByAdult && acceptedByChild)
    || ('adult rejects ' + rejectedByAdult + ', child accepts ' + acceptedByChild);
});

SelfTest.add('?대┛???덉쟾: ?ш린瑜???텣 留뚰겮 ?뺤씤 ?잛닔瑜???踰????붽뎄?쒕떎', () => {
  const box2 = $('#childMode');
  if (!box2) return true;
  const was = box2.checked;
  box2.checked = false;
  const off = activeThresholds(focusedCamera()).confirmFrames;
  box2.checked = true;
  const on = activeThresholds(focusedCamera()).confirmFrames;
  box2.checked = was;
  return (on === off + 1) || ('off ' + off + ', on ' + on);
});

SelfTest.add('媛쒖씤?뺣낫: ?뚮┝ 蹂몃Ц???ъ쭊쨌?곕씫泥섍? ?ㅼ뼱媛吏 ?딅뒗??, () => {
  const contact = { name: '?띻만??, role: '1援ъ뿭', phone: '01011112222', email: 'a@b.c' };
  const payload = buildAlertPayload({ name: '移대찓??1', zoneMode: 'line' }, 'alert', 1, 3, contact, false);
  const text = JSON.stringify(payload);
  const leaks = [];
  if (text.indexOf('data:image') >= 0) leaks.push('image');
  if (text.indexOf(contact.phone) >= 0) leaks.push('phone');
  if (text.indexOf(contact.email) >= 0) leaks.push('email');
  return leaks.length === 0 || 'payload leaks: ' + leaks.join(', ');
});

SelfTest.add('媛쒖씤?뺣낫: ???뺣낫 吏?곌린 湲곕뒫???덈떎', () =>
  (typeof wipeLocalData === 'function' && !!$('#wipeData')) || 'no way to erase local data');

'use strict';
/* ??v8: ?몄썝 ??쨌 360째 ?뚯쟾 쨌 ?덈궡臾??リ린 ??*/
SelfTest.add('?몄썝 ?? 援ъ뿭 ??諛뺤뒪 媛쒖닔媛 洹몃?濡??몄썝 ?섍? ?쒕떎', () => {
  const cam = focusedCamera();
  if (!cam.detections || !cam.canvas) return true;    /* 移대찓?쇨? ?놁쑝硫?嫄대꼫?대떎 */
  const backup = { pts: cam.points.slice(), mode: cam.zoneMode };
  cam.points = [{ x: 0, y: 0.6 }, { x: 1, y: 0.6 }]; cam.zoneMode = 'line';
  cam.riskSince.clear(); cam.riskSeen.clear();
  const src = { element: cam.canvas, width: 1000, height: 1000 };
  const p = (id, x) => ({ id, bbox: [x, 300, 30, 45], score: .8, hits: 5, averageScore: .8, sizeStable: true, missed: 0 });
  renderCamera(cam, [p(1, 100), p(2, 300), p(3, 500)], src);
  const three = cam.riskCount;
  const boxes = cam.detections.querySelectorAll('.detection-box').length;
  cam.points = backup.pts; cam.zoneMode = backup.mode;
  cam.riskSince.clear(); cam.riskSeen.clear();
  return (three === 3 && boxes === 3) || ('count ' + three + ', boxes ' + boxes);
});

SelfTest.add('?몄썝 ?? ?⑥뼱???덈뒗 ?щ윭 ?щ엺? ??紐낆쑝濡??⑹퀜吏吏 ?딅뒗??, () => {
  const mk = (x, y, src) => ({ bbox: [x, y, 18, 26], score: .7, class: 'person', source: src || 'full' });
  const apart = clusterObservations([mk(100, 100), mk(200, 100), mk(300, 100), mk(400, 100)]).length;
  const near = clusterObservations([mk(100, 100, 'tile-0-0'), mk(122, 100, 'tile-0-1')]).length;
  return (apart === 4 && near === 2) || ('apart ' + apart + ', near ' + near);
});

SelfTest.add('?몄썝 ?? ?щ엺???섎㈃ ?뚮┝???ㅼ떆 蹂대궦??, () => {
  const cam = focusedCamera();
  const before = cam.lastAlertCount || 0;
  cam.lastAlertCount = 1;
  const growsOnTwo = 2 > (cam.lastAlertCount || 0);
  const notOnOne = !(1 > (cam.lastAlertCount || 0));
  cam.lastAlertCount = before;
  return (growsOnTwo && notOnOne) || 'growth rule wrong';
});

SelfTest.add('?뚯쟾: 90?꾨? ?뚮━硫?媛濡쒖꽑???몃줈?좎씠 ?쒕떎', () => {
  const line = [{ x: 0.2, y: 0.5 }, { x: 0.8, y: 0.5 }];
  const turned = rotatePoints(line, 90, 1);            /* ?뺤궗媛??붾㈃ 湲곗? */
  const dx = Math.abs(turned[1].x - turned[0].x);
  const dy = Math.abs(turned[1].y - turned[0].y);
  return (dx < 1e-6 && Math.abs(dy - 0.6) < 1e-6) || ('dx ' + dx.toFixed(4) + ', dy ' + dy.toFixed(4));
});

SelfTest.add('?뚯쟾: 360?꾨? ?뚮━硫??먮옒 ?먮━濡??뚯븘?⑤떎', () => {
  const shape = [{ x: 0.2, y: 0.4 }, { x: 0.5, y: 0.7 }, { x: 0.8, y: 0.45 }];
  const back = rotatePoints(shape, 360, 16 / 9);
  const same = shape.every((p, i) => Math.abs(p.x - back[i].x) < 1e-9 && Math.abs(p.y - back[i].y) < 1e-9);
  return same || 'full turn did not return to origin';
});

SelfTest.add('?뚯쟾: ?대뼡 媛곷룄?먯꽌??湲몄씠(紐⑥뼇)媛 蹂댁〈?쒕떎', () => {
  const line = [{ x: 0.25, y: 0.5 }, { x: 0.75, y: 0.5 }];
  const aspect = 16 / 9;
  const lengthOf = pts => Math.hypot((pts[1].x - pts[0].x) * aspect, pts[1].y - pts[0].y);
  const base = lengthOf(line);
  for (let deg = 0; deg < 360; deg += 15) {
    if (Math.abs(lengthOf(rotatePoints(line, deg, aspect)) - base) > 1e-9) return 'length changed at ' + deg;
  }
  return true;
});

SelfTest.add('?뚯쟾: ?붾㈃??踰쀬뼱?섎㈃ 媛곷룄瑜??좎???梨??덉쑝濡??ｋ뒗??, () => {
  const line = [{ x: 0.02, y: 0.5 }, { x: 0.98, y: 0.5 }];
  const turned = fitPointsInView(rotatePoints(line, 90, 16 / 9));
  const inside = turned.every(p => p.x >= -1e-9 && p.x <= 1 + 1e-9 && p.y >= -1e-9 && p.y <= 1 + 1e-9);
  const stillVertical = Math.abs(turned[1].x - turned[0].x) < 1e-6;
  return (inside && stillVertical) || ('inside ' + inside + ', vertical ' + stillVertical);
});

SelfTest.add('?뚯쟾: 媛곷룄??0??59 濡??뺢퇋?붾맂??, () =>
  (normalizeAngle(370) === 10 && normalizeAngle(-90) === 270 &&
   normalizeAngle(0) === 0 && normalizeAngle('abc') === 0) || 'angle normalize wrong');

SelfTest.add('?믪씠: ?몃줈濡???꺼??紐⑥뼇??洹몃?濡??좎??쒕떎', () => {
  const shape = [{ x: 0.2, y: 0.4 }, { x: 0.5, y: 0.7 }, { x: 0.8, y: 0.45 }];
  const moved = translatePointsToHeight(shape, 0.3);
  const dy = moved[0].y - shape[0].y;
  const parallel = moved.every((p, i) => Math.abs((p.y - shape[i].y) - dy) < 1e-9 && p.x === shape[i].x);
  const inside = moved.every(p => p.y >= 0 && p.y <= 1);
  return (parallel && inside) || ('parallel ' + parallel + ', inside ' + inside);
});

SelfTest.add('以묒떖: ?щ윭 ?먯쓽 以묒떖???뺥솗??援ы븳??, () => {
  const c = centroidOf([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }]);
  return (Math.abs(c.x - 0.5) < 1e-9 && Math.abs(c.y - 0.5) < 1e-9) || 'centroid wrong';
});

SelfTest.add('?덈궡臾? ?レ쑝硫??붾㈃?먯꽌 ?щ씪吏怨??ㅻ챸? 移대뱶???⑤뒗??, () => {
  const cam = focusedCamera();
  if (!cam.hintEl) return true;                       /* ?⑤꼸???녿뒗 ?곹깭硫?嫄대꼫?대떎 */
  const wasEditing = state.editing, wasDismissed = state.hintDismissed;
  state.editing = true; state.hintDismissed = false;
  setPanelHint(cam);
  const shown = cam.hintEl.classList.contains('on');
  state.hintDismissed = true;
  setPanelHint(cam);
  const hidden = !cam.hintEl.classList.contains('on');
  const cardStillHasText = tr('zoneHintEdit').length > 0;
  state.editing = wasEditing; state.hintDismissed = wasDismissed;
  setPanelHint(cam); refreshZoneCard();
  return (shown && hidden && cardStillHasText) || ('shown ' + shown + ', hidden ' + hidden);
});

SelfTest.add('?덈궡臾? ?リ린 踰꾪듉???묎렐 媛?ν븳 ?대쫫???덈떎', () => {
  const cam = focusedCamera();
  if (!cam.panel) return true;
  const close = $('.hint-close', cam.panel);
  return (!close || (close.getAttribute('aria-label') || '').length > 0) || 'hint close has no label';
});


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   23. 遺???뚯뒪??   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function runStressTest(objectCount) {
  const count = objectCount || 200;
  Diagnostics.log(tr('stressRunning'), 'info');

  /* ?깆닔湲??쇱옟 ?곹솴???됰궡 ?몃떎: ?쒕줈 ?ㅻⅨ ?щ엺 ?щ읉 + ???щ엺??1??媛쒖쓽
     以묐났 愿痢??꾩껜 ?꾨젅??+ ???. 蹂묓빀???ㅼ젣濡??쇱뼱?섎뒗 ?낅젰?댁뼱??     泥섎━??痢≪젙???섎?媛 ?덈떎. */
  const synthetic = [];
  const people = Math.max(1, Math.ceil(count / 3));
  for (let i = 0; i < people; i++) {
    const x = (i * 137) % 1820, y = ((i * 89) % 940);
    const w = 18 + (i % 7), h = 40 + (i % 13);
    const copies = 1 + (i % 3);
    for (let k = 0; k < copies && synthetic.length < count; k++) {
      synthetic.push(box(x + k, y + k, w + k, h + k, {
        score: 0.40 + ((i + k) % 40) / 100,
        source: k === 0 ? 'full' : 'tile-' + (k % 2) + '-' + (i % 3),
        clipped: k > 1
      }));
    }
  }
  while (synthetic.length < count) {
    const i = synthetic.length;
    synthetic.push(box((i * 211) % 1800, (i * 67) % 900, 20, 44, { score: 0.5, source: 'full' }));
  }

  const t0 = nowMs();
  const merged = clusterObservations(synthetic);
  const t1 = nowMs();

  const ref = { value: 1 };
  let previous = [];
  for (let frame = 0; frame < 5; frame++) {
    previous = trackCandidates(merged.map(b => Object.assign({}, b, {
      bbox: [b.bbox[0] + frame, b.bbox[1] + frame, b.bbox[2], b.bbox[3]]
    })), previous, ref);
  }
  const t2 = nowMs();

  const camera = focusedCamera();
  const hasPanel = Boolean(camera.detections);
  if (hasPanel) renderCamera(camera, previous.slice(0, 60), { width: 1920, height: 1080 });
  const t3 = nowMs();

  /* 遺???뚯뒪?멸? ?ㅼ젣 寃쎈낫瑜??④린吏 ?딅룄濡??섎룎由곕떎 */
  if (hasPanel) {
    camera.detections.innerHTML = '';
    camera.riskSince.clear();
    camera.riskSeen.clear();
    camera.riskCount = 0;
    camera.alertLevel = 'none';
    camera.panel.classList.remove('critical');
    updatePanelLevel(camera);
  }
  state.alertLevel = 'none';
  $('#detectCount').textContent = '0';
  stateChip.className = 'state';
  stateChip.textContent = state.detecting ? 'LIVE' : tr('ready');
  refreshStatusPanel();

  Diagnostics.log(tr('stressDone', {
    objects: count, dedupe: (t1 - t0).toFixed(1), track: (t2 - t1).toFixed(1),
    render: (t3 - t2).toFixed(1), total: (t3 - t0).toFixed(1)
  }), 'ok');
  Diagnostics.log(tr('dedupeReport', { raw: count, merged: merged.length }), 'info');
  return { objects: count, dedupe: t1 - t0, track: t2 - t1, render: t3 - t2, total: t3 - t0, kept: merged.length };
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   24. 移대찓??異붽? ?ㅼ씠?쇰줈洹?   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
let sourceTab = 'device';

function setSourceTab(tab) {
  sourceTab = tab;
  [['device', '#tabDevice', '#paneDevice'], ['stream', '#tabStream', '#paneStream'],
   ['yt', '#tabYt', '#paneYt'], ['file', '#tabFile', '#paneFile'], ['sim', '#tabSim', '#paneSim']]
    .forEach(([key, tabSel, paneSel]) => {
      $(tabSel).setAttribute('aria-pressed', String(key === tab));
      $(paneSel).classList.toggle('on', key === tab);
    });
  $('#sourceError').classList.remove('on');
}

function openSourceDialog() {
  if (state.cameras.length >= CONFIG.maxCameras) {
    Diagnostics.log(tr('camLimitReached', { max: CONFIG.maxCameras }), 'warn');
    return;
  }
  $('#cameraLabel').value = '';
  $('#streamUrl').value = '';
  $('#ytUrl').value = '';
  $('#fileInput').value = '';
  $('#sourceError').classList.remove('on');
  setSourceTab('device');
  listCameras();
  if (sourceDialog.showModal) sourceDialog.showModal(); else sourceDialog.setAttribute('open', '');
}

function showSourceError(key) {
  const box = $('#sourceError');
  box.textContent = tr(key);
  box.classList.add('on');
}

async function confirmSourceDialog(event) {
  const name = $('#cameraLabel').value.trim();

  if (sourceTab === 'sim') {
    event.preventDefault();
    sourceDialog.close();
    const camera = addCamera({ kind: 'sim', name: name || tr('camDefaultName', { n: state.cameras.length + 1 }) });
    if (camera) startSimulation(camera);
    return;
  }

  /* ?좏뒠釉?쨌 ?붾㈃ 怨듭쑀 ???좏뒠釉??쎌?? 援먯감 異쒖쿂??吏곸젒 ?쎌쓣 ???놁쑝誘濡?     ?곸긽??????뿉???댁뼱 二쇨퀬, 洹???쓣 ?붾㈃ 怨듭쑀濡?諛쏆븘 遺꾩꽍?쒕떎. */
  if (sourceTab === 'yt') {
    const raw = $('#ytUrl').value.trim();
    let videoId = null;
    if (raw) {
      videoId = parseYouTubeId(raw);
      if (!videoId) { event.preventDefault(); showSourceError('errBadYouTube'); return; }
    }
    event.preventDefault();
    sourceDialog.close();
    if (videoId) {
      /* ?ъ슜???대┃?먯꽌 ?댁뼱吏??몄텧?대씪 ?앹뾽 李⑤떒??嫄몃━吏 ?딅뒗??*/
      window.open(youTubeWatchUrl(videoId), '_blank', 'noopener');
      Diagnostics.log(tr('ytOpened'), 'info');
    }
    const camera = addCamera({
      kind: 'screen',
      name: name || (videoId ? tr('camYouTubeName') : tr('camScreenName'))
    });
    if (camera) await connectCamera(camera, false);
    return;
  }

  if (sourceTab === 'file') {
    const input = $('#fileInput');
    const file = input.files && input.files[0];
    if (!file) { event.preventDefault(); showSourceError('errNeedFile'); return; }
    event.preventDefault();
    sourceDialog.close();
    const camera = addCamera({
      kind: 'file', fileUrl: URL.createObjectURL(file),
      name: name || tr('camFileName')
    });
    if (camera) await connectCamera(camera, false);
    return;
  }

  if (sourceTab === 'stream') {
    const url = $('#streamUrl').value.trim();
    if (!url) { event.preventDefault(); showSourceError('errNeedUrl'); return; }
    const problem = validateStreamUrl(url);
    if (problem) { event.preventDefault(); showSourceError(problem); return; }
    event.preventDefault();
    sourceDialog.close();
    const camera = addCamera({
      kind: 'stream', url, streamKind: $('#streamKind').value,
      name: name || tr('camDefaultName', { n: state.cameras.length + 1 })
    });
    if (camera) await connectCamera(camera, false);
    return;
  }

  /* 湲곌린 移대찓??*/
  event.preventDefault();
  sourceDialog.close();
  const camera = addCamera({
    kind: 'device', deviceId: cameraSelect.value,
    name: name || (cameraSelect.selectedOptions[0] && cameraSelect.selectedOptions[0].value
      ? cameraSelect.selectedOptions[0].textContent
      : tr('camDefaultName', { n: state.cameras.length + 1 }))
  });
  if (camera) await connectCamera(camera, false);
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   25. ?대깽??諛붿씤??   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function bindUi() {
  /* ?ㅼ젙 ?ㅼ씠?쇰줈洹?*/
  $('#settingsButton').addEventListener('click', () => {
    $('#languageSelect').value = state.language;
    if (settingsDialog.showModal) settingsDialog.showModal();
    else settingsDialog.setAttribute('open', '');
  });
  /* README 22?μ씠 "?ㅼ젙 ???몄뼱?먯꽌 利됱떆 諛붾뚮ŉ" ?쇨퀬 ?덈궡?섎?濡? ??μ쓣 ?꾨Ⅴ吏
     ?딆븘??怨좊Ⅴ??利됱떆 ?붾㈃ ?꾩껜媛 諛붾뚯뼱???쒕떎. ???踰꾪듉? 洹몃?濡??먯뼱
     ?대? ?듭닕?댁쭊 ?ъ슜?먯쓽 議곗옉??怨꾩냽 ?숈옉?섍쾶 ?쒕떎. */
  $('#languageSelect').addEventListener('change', () => applyLanguage($('#languageSelect').value));
  $('#saveSettings').addEventListener('click', () => applyLanguage($('#languageSelect').value));
  settingsDialog.addEventListener('click', e => { if (e.target === settingsDialog) settingsDialog.close(); });

  /* 移대찓??異붽? */
  $('#addCamera').addEventListener('click', openSourceDialog);
  $('#tabDevice').addEventListener('click', () => setSourceTab('device'));
  $('#tabStream').addEventListener('click', () => setSourceTab('stream'));
  $('#tabYt').addEventListener('click', () => setSourceTab('yt'));
  $('#tabFile').addEventListener('click', () => setSourceTab('file'));
  $('#tabSim').addEventListener('click', () => setSourceTab('sim'));
  $('#sourceConfirm').addEventListener('click', confirmSourceDialog);
  sourceDialog.addEventListener('click', e => { if (e.target === sourceDialog) sourceDialog.close(); });

  /* 寃쎄퀎 援ъ뿭 ?몄쭛 */
  $('#boundaryHeight').addEventListener('input', e => moveLineToHeight(Number(e.target.value)));
  $('#boundaryTilt').addEventListener('input', e => setZoneAngle(Number(e.target.value)));
  $('#zoneModeLine').addEventListener('click', () => setZoneMode('line'));
  $('#zoneModePolygon').addEventListener('click', () => setZoneMode('polygon'));
  $('#zoneUndo').addEventListener('click', undoZonePoint);
  $('#zoneSimplify').addEventListener('click', simplifyZone);
  $('#zoneApplyAll').addEventListener('click', applyZoneToAll);

  /* ?섏떊??*/
  $('#enableAlerts').addEventListener('click', enableBrowserAlerts);
  $('#addContact').addEventListener('click', () => openContactDialog(null));
  $('#contactSave').addEventListener('click', saveContact);
  $('#contactDialog').addEventListener('click', e => { if (e.target === $('#contactDialog')) $('#contactDialog').close(); });

  /* 而⑦듃濡?*/
  $('#connect').addEventListener('click', () => {
    if (state.cameras.length === 0) { openSourceDialog(); return; }
    state.cameras.forEach(c => { if (!c.online && !c.simulating) connectCamera(c, false); });
  });
  $('#disconnect').addEventListener('click', disconnectAll);
  $('#simulate').addEventListener('click', () => {
    const existing = state.cameras.find(c => c.simulating);
    if (existing) { teardownSource(existing); removeCamera(existing.id); return; }
    const camera = addCamera({ kind: 'sim' });
    if (camera) startSimulation(camera);
  });
  $('#editLine').addEventListener('click', () => {
    state.editing = !state.editing;
    refreshZoneCard();
    if (!state.editing) persistBoundaries();
  });
  $('#resetLine').addEventListener('click', resetZone);

  /* ?먮룞??쨌 吏꾨떒 */
  $('#adminNotification').addEventListener('change', requestNotificationPermission);
  $('#exportEvents').addEventListener('click', exportEvents);
  $('#runSelfTest').addEventListener('click', () => SelfTest.run());
  $('#runStress').addEventListener('click', () => runStressTest(200));

  /* ?? v7: 愿??紐⑤뱶 쨌 ?⑥텞??쨌 媛먯떆 ?쒓컙? 쨌 ?ㅽ봽?쇱씤 쨌 ?뚯꽦 ?? */
  $('#controlRoom').addEventListener('click', () => toggleControlRoom());
  $('#shortcutHelp').addEventListener('click', () => { try { $('#shortcutDialog').showModal(); } catch (e) {} });
  document.addEventListener('keydown', handleShortcut);
  /* 釉뚮씪?곗? ?꾩껜?붾㈃???ъ슜?먭? 吏곸젒 鍮좎졇?섏삩 寃쎌슦?먮룄 ?덉씠?꾩썐???섎룎由곕떎 */
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && document.body.classList.contains('control-room')) toggleControlRoom(false);
  });

  ['#hoursEnabled', '#hoursFrom', '#hoursTo'].forEach(sel =>
    $(sel).addEventListener('change', refreshWatchHours));
  $('#prepareOffline').addEventListener('click', prepareOffline);
  /* ?뺣? 紐⑤뱶 ????쇱쓣 4x3 ?쇰줈 ?섎━怨?醫뚯슦 諛섏쟾 ?ш??щ? ?뷀븳??
     ?먮┛ 湲곌린?먯꽌??吏?곗씠 而ㅼ?誘濡?adaptWorkload 媛 ?먮룞?쇰줈 ?섎룎由곕떎. */
  $('#precisionMode').addEventListener('change', () => {
    state.precision = $('#precisionMode').checked;
    store.set('beachWatchPrecision', state.precision ? '1' : '0');
    state.cameras.forEach(c => { c.activeTiles = maxTiles(); c.metrics.latencyAvg = 0; });
    Diagnostics.log(tr(state.precision ? 'precisionOn' : 'precisionOff'), 'info');
    refreshMetrics();
  });

  $('#childMode').addEventListener('change', () => {
    Diagnostics.log(tr($('#childMode').checked ? 'childModeOn' : 'childModeOff'), 'info');
    refreshTunerLabels();
  });
  $('#wipeData').addEventListener('click', wipeLocalData);

  /* 踰꾪듉留덈떎 '臾댁뾿???섎뒗 踰꾪듉?멸?'瑜???以꾨줈 ?뚮젮 以??
     ?대쫫留뚯쑝濡쒕뒗 ?????섎룎由ш린? ???ㅻ벉湲곗쓽 李⑥씠瑜??뚭린 ?대졄?? */
  [['#editLine', 'tipEdit'], ['#zoneUndo', 'tipUndo'], ['#zoneSimplify', 'tipSimplify'],
   ['#resetLine', 'tipReset'], ['#zoneApplyAll', 'tipApplyAll']].forEach(([sel, key]) => {
    const button = $(sel);
    if (!button) return;
    const show = () => { const tip = $('#zoneTip'); if (tip) tip.textContent = tr(key); };
    const clear = () => { const tip = $('#zoneTip'); if (tip) tip.textContent = tr('zoneTipDefault'); };
    button.addEventListener('mouseenter', show);
    button.addEventListener('focus', show);
    button.addEventListener('mouseleave', clear);
    button.addEventListener('blur', clear);
    button.title = tr(key);          /* ?곗튂 湲곌린쨌?ㅽ겕由곕━?붿슜 */
    button.dataset.tipKey = key;
  });
  $('#hintRestore').addEventListener('click', () => {
    state.hintDismissed = false;
    store.set('beachWatchHintDismissed', '0');
    refreshZoneCard();
  });

  /* ?뚯꽦???꾨㈃ ?쎄퀬 ?덈뜕 ?덈궡??利됱떆 硫덉텣??*/
  $('#voiceEnabled').addEventListener('change', e => { if (!e.target.checked) Speaker.stop(); });

  /* ?쒕꼫 */
  $('#envPreset').addEventListener('change', e => {
    state.presetMode = e.target.value;
    store.set('beachWatchPreset', state.presetMode);
    refreshBadges();
  });
  $('#tunerConfidence').addEventListener('input', e => {
    state.userThreshold = Number(e.target.value) / 100;
    refreshTunerLabels(); store.set('beachWatchThreshold', e.target.value);
  });
  $('#tunerFrames').addEventListener('input', e => {
    state.userFrames = Number(e.target.value);
    refreshTunerLabels(); store.set('beachWatchFrames', e.target.value);
  });
  $('#tunerEscalate').addEventListener('input', e => {
    state.escalateSeconds = Number(e.target.value);
    refreshTunerLabels(); store.set('beachWatchEscalate', e.target.value);
  });

  /* ?꾪뙥??怨꾩궛湲곕뒗 ?ъ씠?몄뿉???쒓굅?섏뼱 README/IMPACT.md濡???꺼議뚮떎.
     怨꾩궛???먯껜???먭? 吏꾨떒??怨꾩냽 寃利앺븯誘濡??⑥닔???④꺼 ?붾떎. */
  ['#calcBeaches', '#calcRecovery', '#calcCoverage'].forEach(selector => {
    const element = $(selector);
    if (element) element.addEventListener('input', refreshImpact);
  });

  /* ??씠 ?ㅼ떆 蹂댁씠硫?利됱떆 ???ъ씠???뚮젮 吏?곗쓣 ?뚮났?쒕떎 */
  document.addEventListener('visibilitychange', () => {
    /* ?대? 猷⑦봽媛 ?뚭퀬 ?덉쑝硫??덈줈 遺瑜댁? ?딅뒗?? 異붾줎??吏꾪뻾 以묒씪 ?뚮뒗
       痍⑥냼????대㉧媛 ?놁뼱?? 遺瑜??뚮쭏??猷⑦봽媛 ?섎굹???섏뼱?쒕떎. */
    if (!document.hidden && state.detecting && !loopRunning) { clearTimeout(loopTimer); detectLoop(); }
  });

  /* 李??ш린媛 諛붾뚮㈃ 諛뺤뒪 醫뚰몴怨꾧? ?닿툔?섎?濡?利됱떆 吏?대떎 */
  addEventListener('resize', () => {
    state.cameras.forEach(c => { if (c.detections) c.detections.innerHTML = ''; });
    drawAllBoundaries();
  });

  setInterval(() => { if (state.metrics.startedAt) refreshMetrics(); }, 1000);
}


'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   26. 珥덇린??   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
function restoreSettings() {
  const site = store.get('beachWatchSite', 'beach');
  state.siteType = SITE_PRESETS[site] ? site : 'beach';

  state.presetMode = store.get('beachWatchPreset', 'auto');
  state.userThreshold = Number(store.get('beachWatchThreshold', '40')) / 100;
  state.userFrames = Number(store.get('beachWatchFrames', '2'));
  state.escalateSeconds = Number(store.get('beachWatchEscalate', String(activeSite().escalate)));

  const validPreset = state.presetMode === 'auto' || Boolean(PRESETS[state.presetMode]);
  if (!validPreset) state.presetMode = 'auto';
  if (!isFinite(state.userThreshold) || state.userThreshold <= 0) state.userThreshold = 0.40;
  if (!isFinite(state.userFrames) || state.userFrames < 1) state.userFrames = 2;
  if (!isFinite(state.escalateSeconds) || state.escalateSeconds < 2) state.escalateSeconds = activeSite().escalate;

  $('#envPreset').value = state.presetMode;
  $('#tunerConfidence').value = Math.round(state.userThreshold * 100);
  $('#tunerFrames').value = state.userFrames;
  $('#tunerEscalate').value = state.escalateSeconds;
  state.detached.points = activeSite().line.map(p => ({ x: p.x, y: p.y }));
  restoreWatchHours();
  state.hintDismissed = store.get('beachWatchHintDismissed', '0') === '1';
  state.precision = store.get('beachWatchPrecision', '0') === '1';
  $('#precisionMode').checked = state.precision;
}

function startClock() {
  const tick = () => {
    $('#clock').textContent = new Intl.DateTimeFormat(
      activeLocale().locale,
      { dateStyle: 'short', timeStyle: 'medium', hour12: false }
    ).format(new Date());
  };
  tick(); setInterval(tick, 1000);
}

function init() {
  restoreSettings();
  restoreContacts();
  restoreBoundaryFor(state.detached);
  bindUi();
  applyLanguage(store.get('beachWatchLanguage', 'ko'), false);
  startClock();
  setHealth('healthIdle', '');
  refreshMetrics();
  updateGridCount();
  renderContacts();
  refreshAlertToggle();
  refreshZoneCard();
  refreshWatchHours();
  refreshOfflineBadge();
  NorthStar.restore();
  refreshNorthStar();
  listCameras();
  Diagnostics.log('Beach Watch v7 ready 쨌 ' + SelfTest.cases.length + ' self-test cases 쨌 up to ' +
    CONFIG.maxCameras + ' cameras 쨌 ' + state.contacts.length + ' recipients', 'ok');


  /* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   32. ?댄솕??移대찓???꾨몢?대끂) ?곕룞? js/82-mlx9064-thermal.js ?먯꽌 ?꾨떞?쒕떎.
   ???몄뒪?댁뒪 ?덉뿉 ?덈뜕 以묐났 援ы쁽(?대? ArduinoThermal)? ?쒓굅?덈떎.
   ?꾩뿭 ArduinoThermal.init() ? DOMContentLoaded ????踰덈쭔 ?ㅽ뻾?쒕떎.
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
}


'use strict';
/* 媛쒕컻???꾧뎄쨌?먮룞???뚯뒪?몄뿉???묎렐?????덈룄濡?理쒖냼?쒕쭔 ?몄텧?쒕떎. */
window.BeachWatch = {
  state, CONFIG, IMPACT, PRESETS, SITE_PRESETS,
  selfTest: () => SelfTest.run(),
  stressTest: count => runStressTest(count),
  carryTracks,
  computeImpact, crossesAboveLine, isInDangerZone, pointInPolygon, abovePolyline,
  polylineYAt, simplifyPoints, insertIndexFor, setZoneMode, applyZoneToAll, polygonToPolyline, smoothPath,
  normalizeContact, contactsForLevel, buildAlertPayload, shouldSendNow,
  clusterObservations, suppressDuplicates, shouldMergeObservations, trackCandidates,
  classifyScene: stats => SceneAnalyzer.classify(stats),
  addCamera, removeCamera, focusCamera, setSiteType,
  resolveStreamKind, validateStreamUrl,
  /* v7 */
  withinWatchHours, parseHhMm, watchHoursActive, buildVoiceMessage, typingInField,
  NorthStar, refreshNorthStar, acknowledgeAlert,
  setZoneAngle, rotatePoints, fitPointsInView, translatePointsToHeight, centroidOf, normalizeAngle,
  setPanelHint, resetZoneBase,
  toggleControlRoom, nudgeZonePoint, selectNextZonePoint,
  OfflineCache, prepareOffline, Speaker, captureSnapshot
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

'use strict';
/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧
   32. MLX9064X ?댄솕??移대찓???쇱꽌 ?곕룞 + ?쇰컲 移대찓???숈떆 援먯감 寃利?   쨌 ?댄솕?? ?щ엺(?앹껜 ?댁썝) vs ?щ엺???꾨땶 媛앹껜(鍮꾩깮泥? ?ㅼ떆媛?援щ텇
   쨌 ?쇰컲 移대찓?? ?ㅼ젙???꾪뿕 援ъ뿭 移⑤쾾 ?몄썝 媛먯? (湲곗〈 媛먯? ?뚯씠?꾨씪??
   쨌 ??梨꾨꼸???숈떆??留뚯”???뚮쭔 ?듭궗 ?꾪뿕援곗쑝濡??뺤젙 ???ъ씠??+ ?쒕툕 ?ъ텧
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
const ArduinoThermal = {
  port: null,
  reader: null,
  pipePromise: null,     // port.readable ??TextDecoderStream ?뚯씠??(?リ린 ?꾩뿉 ?앸궇 ?뚭퉴吏 湲곕떎由?
  keepReading: false,
  /* ?꾩넚瑜??먮룞 媛먯? ???ㅼ?移섎쭏??baud(9600/115200 ??媛 ?쒓컖媛곸씠誘濡?     ?곌껐 ???좏슚 ?곗씠?곌? ?섏떊?섎뒗 baud瑜??ㅼ뒪濡?李얜뒗??
     (UNO R4 WiFi ??USB CDC ??baud 媛 ?섎? ?놁쑝誘濡?9600 ??留??욎뿉 ?붾떎.) */
  baudCandidates: [9600, 115200, 19200, 38400, 57600, 4800, 921600],
  baudIndex: 0,
  /* 源⑥쭊(baud 遺덉씪移? ?ㅽ듃由쇱? 鍮좊Ⅴ寃??뚯쟾, ?뺤긽(?щ엺???쎌쓣 ???덈뒗) ?ㅽ듃由쇱?
     蹂대뱶 遺?끒룹옄泥댁젏寃??湲곕떎由щ룄濡?異⑸텇??湲멸쾶 ?〓뒗?? */
  baudProbeMs: 1600,     // ?ㅻⅨ(=源⑥쭊) baud 濡??먮떒?섎㈃ ???쒓컙 ???ㅼ쓬 ?꾨낫濡?  firstProbeMs: 8000,    // ?뺤긽 ?ㅽ듃由쇱씤???꾩쭅 ?⑤룄媛 ?놁쑝硫????쒓컙源뚯? ?湲?  baudBytes: 0,          // ?대쾲 baud ?먯꽌 諛쏆? 臾몄옄 ??  baudReplace: 0,        // ?대쾲 baud ?먯꽌 U+FFFD(源⑥쭊 臾몄옄) ??  lastGoodKey: 'beachWatchThermalBaud',
  baudTimer: null,
  baudFound: null,       // ?ㅼ젣 ?곗씠???섏떊???뺤씤??baud (??
  currentBaud: null,
  validReads: 0,
  selectedPort: null,
  loopGen: 0,
  flushTimer: null,
  lastRaw: [],
  bytesReceived: 0,      // 吏꾨떒???섏떊 諛붿씠????  candidatesTried: [],   // 吏꾨떒???쒕룄??baud 紐⑸줉
  /* ?앹껜 ?댁썝(?щ엺) ?먯젙???섑븳 ?꾧퀎媛? ?ъ슜?먭? ?щ씪?대뜑濡?議곗젅?쒕떎. */
  threshold: 34.0,
  /* 42째C 珥덇낵???щ엺???꾨땲???④굅??媛앹껜(?붿쭊쨌?쒖뼇???쒕㈃ ??濡?援щ텇?쒕떎.
     ?댄솕???⑤룄留뚯쑝濡쒕뒗 '?곕쑜????怨??щ엺???꾨???媛瑜????놁쑝誘濡?
     ???곹븳 ?꾨뒗 援먯감 寃利??듭궗 ?꾪뿕援??뺤젙) ??곸뿉???쒖쇅?쒕떎. */
  livingCeiling: 42.0,
  /* ?앹껜 ?댁썝 ?뺤씤????踰??덉쑝硫? ?쇱꽌媛 ?좉퉸 ?딄꺼?????쒓컙 ?숈븞 '?щ엺'?쇰줈
     ?좎????쇰컲 移대찓???꾪뿕 援ъ뿭 ?먯젙怨?寃利앹쓣 ?댁뼱媛꾨떎. */
  humanWindowMs: 6000,
  currentTemp: 0.0,
  history: [],           // { t, v } ?ㅼ떆媛??⑤룄 沅ㅼ쟻 (理쒖떊 historyCap媛?
  historyCap: 240,
  tempMin: null, tempMax: null, tempSum: 0, tempCount: 0,
  lastHumanAt: 0,
  lastGraphAt: 0,
  graphThrottleMs: 150,
  lastDeployTime: 0,     // ?쒕툕 ?ъ텧 以묐났 諛⑹? ??대㉧
  deployCooldown: 10000, // ?쒕툕 ?ъ텧 荑⑦???(10珥?
  lastSirenAt: 0,        // ?뺤씤 ?ъ씠??荑⑦???(?꾨같 諛⑹?)
  sirenCooldownMs: 2000,

  /* ?? MLX90640 ?댄솕???꾨젅??32횞24) + ?쒖빞 ?뺣젹 ?ㅻ쾭?덉씠 ?? */
  heatFrame: null,       // 理쒖떊 ?댄솕???꾨젅??(Array(768), 0.01째C ?뺤닔)
  heatAt: 0,             // 留덉?留??꾨젅???섏떊 ?쒓컖
  heatMin: 0, heatMax: 0,// ?꾨젅??理쒖?/理쒓퀬(?됱긽 踰붿쐞??
  align: null,           // { enabled, pan, tilt, fov }
  alignKey: 'beachWatchThermalAlign',
  overlayRaf: 0,
  _overlaySize: '',
  _heatOff: null,        // 32횞24 ?덊듃留??ㅽ봽?ㅽ겕由?罹붾쾭??  noDataWarned: false,

  init() {
    const btnConnect = document.getElementById('btnConnectArduino');
    const btnDisconnect = document.getElementById('btnDisconnectArduino');
    const tuner = document.getElementById('tunerThermalThreshold');
    const tunerOut = document.getElementById('outThermalThreshold');

    if (tuner && tunerOut) {
      tuner.value = this.threshold;
      tunerOut.textContent = this.threshold.toFixed(1) + '째C';
      tuner.addEventListener('input', (e) => {
        this.threshold = parseFloat(e.target.value);
        tunerOut.textContent = this.threshold.toFixed(1) + '째C';
        this.renderGraph();
      });
    }

    if (btnConnect) btnConnect.addEventListener('click', () => this.connect());
    if (btnDisconnect) btnDisconnect.addEventListener('click', () => this.disconnect());

    this.bindAlignControls();
    this.startOverlay();
  },

  /* ?? ?댄솕?????쇰컲 移대찓???쒖빞 ?뺣젹 ??
     ?댄솕??MLX90640 32횞24, FOV 55째횞35째) ?쇱꽌媛 ?쇰컲 移대찓?쇱? 媛숈? ?λ㈃??     蹂대룄濡? ?곸긽 ?꾩뿉 ?댄솕???쒖빞(retangle) + ?ъ옄瑜?洹몃젮 ?덉쑝濡?留욎텛寃??쒕떎. */
  bindAlignControls() {
    this.align = this.loadAlign();
    const btn = document.getElementById('btnThermalAlign');
    const pan = document.getElementById('tunerThermalPan');
    const tilt = document.getElementById('tunerThermalTilt');
    const fov = document.getElementById('tunerThermalFov');
    if (btn) btn.addEventListener('click', () => {
      this.align.enabled = !this.align.enabled;
      if (typeof Diagnostics !== 'undefined') Diagnostics.log('?댄솕???쒖빞 ?뺣젹 ?ㅻ쾭?덉씠 ' + (this.align.enabled ? '耳쒖쭚' : '爰쇱쭚'), 'info');
      this.syncAlignUI();
    });
    if (pan) pan.addEventListener('input', e => { this.align.pan = parseFloat(e.target.value); this.saveAlign(); this.syncAlignUI(); });
    if (tilt) tilt.addEventListener('input', e => { this.align.tilt = parseFloat(e.target.value); this.saveAlign(); this.syncAlignUI(); });
    if (fov) fov.addEventListener('input', e => { this.align.fov = parseFloat(e.target.value); this.saveAlign(); this.syncAlignUI(); });
    this.syncAlignUI();
  },

  loadAlign() {
    let a = { enabled: false, pan: 0, tilt: 0, fov: 100 };
    try {
      const raw = (typeof store !== 'undefined' && store.get ? store.get(this.alignKey) : null) || localStorage.getItem(this.alignKey);
      if (raw) Object.assign(a, JSON.parse(raw));
    } catch (e) {}
    a.enabled = !!a.enabled;
    if (typeof a.pan !== 'number' || Number.isNaN(a.pan)) a.pan = 0;
    if (typeof a.tilt !== 'number' || Number.isNaN(a.tilt)) a.tilt = 0;
    if (typeof a.fov !== 'number' || Number.isNaN(a.fov)) a.fov = 100;
    return a;
  },

  saveAlign() {
    try {
      if (typeof store !== 'undefined' && store.set) store.set(this.alignKey, JSON.stringify(this.align));
      else localStorage.setItem(this.alignKey, JSON.stringify(this.align));
    } catch (e) {}
  },

  syncAlignUI() {
    if (!this.align) return;
    const btn = document.getElementById('btnThermalAlign');
    const pan = document.getElementById('tunerThermalPan');
    const tilt = document.getElementById('tunerThermalTilt');
    const fov = document.getElementById('tunerThermalFov');
    const st = document.getElementById('thermalAlignState');
    const outPan = document.getElementById('outThermalPan');
    const outTilt = document.getElementById('outThermalTilt');
    const outFov = document.getElementById('outThermalFov');
    if (btn) {
      btn.textContent = this.align.enabled ? '?쒖빞 ?뺣젹 ?꾧린' : '?쒖빞 ?뺣젹 耳쒓린';
      btn.classList.toggle('primary', this.align.enabled);
      btn.classList.toggle('ghost', !this.align.enabled);
      btn.setAttribute('aria-pressed', String(this.align.enabled));
    }
    if (pan) pan.value = this.align.pan; if (outPan) outPan.textContent = this.align.pan + '%';
    if (tilt) tilt.value = this.align.tilt; if (outTilt) outTilt.textContent = this.align.tilt + '%';
    if (fov) fov.value = this.align.fov; if (outFov) outFov.textContent = this.align.fov + '%';
    if (st) {
      st.textContent = !this.align.enabled ? '?뺣젹 ?꾩슂'
        : (this.heatFrame ? '?뺣젹??쨌 ?댄솕???덊듃留??쒖떆 以? : '?뺣젹 ?湲?쨌 ?ъ옄瑜??쇱궗泥댁뿉 留욎텛?몄슂');
      st.className = 'align-state' + (this.heatFrame ? ' ok' : '');
    }
  },

  startOverlay() {
    if (typeof requestAnimationFrame === 'undefined') return;
    const tick = () => { this.drawOverlay(); this.overlayRaf = requestAnimationFrame(tick); };
    this.overlayRaf = requestAnimationFrame(tick);
  },

  /* ?댄솕???쒖빞 ?뚮뜑留? ?뺣젹 紐⑤뱶媛 耳쒖졇 ?덉쓣 ?뚮쭔 ?꾩옱 移대찓???곸긽 ?꾩뿉 洹몃┛?? */
  drawOverlay() {
    if (!this.align || !this.align.enabled) return;
    let camId = null;
    if (typeof state !== 'undefined' && state.focusedId) camId = state.focusedId;
    else if (typeof focusedCamera === 'function' && focusedCamera()) camId = focusedCamera().id;
    if (!camId) return;
    const cv = document.querySelector('[data-cam="' + camId + '"] .heat-canvas');
    if (!cv) return;
    const ctx = cv.getContext && cv.getContext('2d');
    if (!ctx) return;
    const key = cv.clientWidth + 'x' + cv.clientHeight;
    if (key !== this._overlaySize) { cv.width = cv.clientWidth; cv.height = cv.clientHeight; this._overlaySize = key; }
    const W = cv.width, H = cv.height;
    if (!W || !H) return;
    ctx.clearRect(0, 0, W, H);

    /* ?댄솕???쇱꽌 ?쒖빞(?곸긽 ?곷?): 湲곕낯 ?붾㈃ 以묒븰 64% 횞 48%(32:24 = 4:3) */
    let fw = W * 0.64 * (this.align.fov / 100);
    let fh = fw * 0.75;
    if (fh > H - 18) fh = H - 18;
    if (fw > W - 18) fw = W - 18;
    if (fh < 10) fh = 10;
    if (fw < 10) fw = 10;
    const cx = W / 2 + (this.align.pan / 100) * (W / 2 - fw / 2);
    const cy = H / 2 + (this.align.tilt / 100) * (H / 2 - fh / 2);
    const x0 = cx - fw / 2, y0 = cy - fh / 2;

    /* ?덊듃留? 20.0~42.0째C 怨좎젙 ???ㅼ????쇰?/二쇰? ?⑤룄 ??? */
    if (this.heatFrame && this.heatFrame.length === 768) {
      if (!this._heatOff) this._heatOff = document.createElement('canvas');
      if (this._heatOff.width !== 32) { this._heatOff.width = 32; this._heatOff.height = 24; }
      const hctx = this._heatOff.getContext && this._heatOff.getContext('2d');
      if (hctx) {
        const img = hctx.createImageData(32, 24);
        const TMIN = 20.0, TMAX = 42.0;
        for (let i = 0; i < 768; i++) {
          const t = Math.min(1, Math.max(0, (this.heatFrame[i] / 100 - TMIN) / (TMAX - TMIN)));
          const [r, g, b] = ArduinoThermalHeatColor(t);
          img.data[i * 4] = r; img.data[i * 4 + 1] = g; img.data[i * 4 + 2] = b; img.data[i * 4 + 3] = 205;
        }
        hctx.putImageData(img, 0, 0);
        ctx.globalAlpha = 0.62;
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(this._heatOff, x0, y0, fw, fh);
        ctx.globalAlpha = 1;
      }
    }

    /* ?쒖빞 ?뚮몢由?+ ?쇰꺼 */
    ctx.strokeStyle = 'rgba(255,212,90,0.95)';
    ctx.lineWidth = 2;
    ctx.strokeRect(x0, y0, fw, fh);
    ctx.fillStyle = 'rgba(255,212,90,0.95)';
    ctx.font = '11px ui-monospace, Menlo, monospace';
    ctx.fillText('THERMAL FOV 쨌 MLX90640', x0, y0 - 6);

    /* 以묒븰 ?ъ옄 ???쇰컲 移대찓?쇱? 媛숈? ?λ㈃??蹂닿퀬 ?덈뒗吏 留욎텛??湲곗???*/
    ctx.strokeStyle = 'rgba(255,120,66,0.95)';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(cx - 12, cy); ctx.lineTo(cx - 4, cy);
    ctx.moveTo(cx + 4, cy); ctx.lineTo(cx + 12, cy);
    ctx.moveTo(cx, cy - 12); ctx.lineTo(cx, cy - 4);
    ctx.moveTo(cx, cy + 4); ctx.lineTo(cx, cy + 12);
    ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, 2.2, 0, Math.PI * 2); ctx.stroke();

    if (this.currentTemp > 0) {
      ctx.fillStyle = '#ffd45a';
      ctx.font = '12px ui-monospace, Menlo, monospace';
      ctx.fillText('?됯퇏 ' + this.currentTemp.toFixed(1) + '째C', cx + 10, cy + 14);
    }
  },

  async connect() {
    if (!('serial' in navigator)) {
      alert('??釉뚮씪?곗???Web Serial API瑜?吏?먰븯吏 ?딆뒿?덈떎. Chrome ?먮뒗 Edge 釉뚮씪?곗?瑜??ъ슜??二쇱꽭??');
      if (typeof Diagnostics !== 'undefined') Diagnostics.countError('Web Serial API 誘몄???釉뚮씪?곗?');
      return;
    }

    try {
      this.selectedPort = await navigator.serial.requestPort();
      this.keepReading = true;
      this.baudIndex = 0;
      this.baudFound = null;
      this.currentBaud = null;
      this.validReads = 0;
      this.bytesReceived = 0;
      this.candidatesTried = [];
      this.resetStats();

      /* ?곹깭??attachPort()媛 port.open() ???깃났?덉쓣 ?뚮쭔 CONNECTED 濡?諛붽씔??
         誘몃━ 諛붽씀硫?open ?ㅽ뙣/?곗씠???놁쓬??'?곌껐???쇰줈 ?ㅼ씤?섍쾶 ?쒕떎. */
      const btnConnect = document.getElementById('btnConnectArduino');
      const btnDisconnect = document.getElementById('btnDisconnectArduino');
      if (btnConnect) btnConnect.disabled = true;
      if (btnDisconnect) btnDisconnect.disabled = false;

      if (typeof Diagnostics !== 'undefined') Diagnostics.log('?꾨몢?대끂 蹂대뱶 ?붿껌?????꾩넚瑜??먮룞 寃???쒖옉 (' + this.baudCandidates[0] + ' Baud)', 'ok');
      this.attachPort(this.baudCandidates[this.baudIndex]);
    } catch (err) {
      this.keepReading = false;
      this.onConnectFail('?꾨몢?대끂 ?곌껐 ?ㅽ뙣: ' + err.message);
    }
  },

  /* reader 痍⑥냼 ???뚯씠??醫낅즺 ?湲????ы듃 ?リ린 ?쒖꽌濡??뺣━?쒕떎.
     ?뚯씠?꾧? ?앸굹湲??꾩뿉 close() ?섎㈃ '?ㅽ듃由??좉?'?쇰줈 ?ㅽ뙣?섍퀬,
     ?ㅼ쓬 open() ?먯꽌 'The port is already open' ?ㅻ쪟媛 ?쒕떎. */
  async closePortSafely(reader, port, pipe) {
    if (reader) { try { await reader.cancel(); } catch (e) {} }
    if (pipe) { try { await pipe; } catch (e) {} }
    if (port) { try { await port.close(); } catch (e) {} }
  },

  /* open() ?대굹 ?곗씠???좊Т? 臾닿??섍쾶 ?ㅽ뙣濡??먯젙 ???곹깭瑜?嫄곗쭞?쇰줈 ?④린吏 ?딅뒗?? */
  onConnectFail(reason) {
    this.keepReading = false;
    this.clearBaudTimer();
    if (this.flushTimer) { clearInterval(this.flushTimer); this.flushTimer = null; }
    this.loopGen++;
    const oldReader = this.reader;
    const oldPort = this.port;
    const oldPipe = this.pipePromise;
    this.reader = null; this.port = null; this.pipePromise = null;
    this.closePortSafely(oldReader, oldPort, oldPipe);

    const btnConnect = document.getElementById('btnConnectArduino');
    const btnDisconnect = document.getElementById('btnDisconnectArduino');
    if (btnConnect) btnConnect.disabled = false;
    if (btnDisconnect) btnDisconnect.disabled = true;

    const thermalState = document.getElementById('thermalState');
    if (thermalState) {
      thermalState.textContent = '?곌껐 ?ㅽ뙣';
      thermalState.className = 'state watch';
    }
    if (typeof Diagnostics !== 'undefined') Diagnostics.countError(reason);

    /* ?먯씤 ?덈궡: 吏꾨떒 濡쒓렇濡??ㅼ젣 ?곹솴??援щ텇??蹂댁뿬以?? */
    const bytes = this.bytesReceived || 0;
    if (bytes > 100) {
      if (typeof Diagnostics !== 'undefined') Diagnostics.log('諛붿씠?몃뒗 ?섏떊?섏?留??レ옄/?⑤룄 ?뺤떇???꾨떃?덈떎 ??移대뱶 ?섎떒 ?뚯닔???먮Ц?띿쓣 ?뺤씤?섍퀬, ?ъ씠???명솚 痢≪젙 ?ㅼ?移?arduino/mlx90640_thermal_beachwatch.ino)瑜??낅줈?쒗븯?몄슂. (?뺤떇: {"temp":..,"max":..})', 'warn');
    } else if (bytes > 0) {
      if (typeof Diagnostics !== 'undefined') Diagnostics.log('?쇰? 諛붿씠?몃쭔 ?섏떊 ???ㅼ?移섏쓽 Serial.begin() 媛믪씠 ?먮룞 寃??紐⑸줉(' + this.candidatesTried.join('쨌') + ')???녿뒗 ?꾩넚瑜좎씪 ???덉뒿?덈떎. ?ㅼ?移섏쓽 baud 媛믪쓣 ?뚮젮二쇱떆硫??대떦 媛믪쓣 異붽??섍쿋?듬땲??', 'warn');
    } else {
      if (typeof Diagnostics !== 'undefined') Diagnostics.log('?섏떊 諛붿씠?멸? 0?낅땲?????꾨몢?대끂 ?꾩썝/USB ?곌껐, 洹몃━怨??ㅼ?移섍? Serial 異쒕젰???섎뒗吏 ?뺤씤?섏꽭?? (?곌껐 ?곹깭 ?쒖떆???ы듃媛 ?ㅼ젣濡??대┫ ?뚮쭔 ?똂ONNECTED?띻? ?⑸땲??)', 'warn');
    }
    if (this.noDataWarned) {
      if (typeof Diagnostics !== 'undefined') Diagnostics.log('痢≪젙???ㅼ?移섍? ?꾩슂?⑸땲????arduino ?대뜑??mlx90640_thermal_beachwatch.ino 瑜??낅줈?쒗븯硫??⑤룄媛 ?쒖떆?⑸땲??', 'warn');
    }
  },

  /* ?ы듃 ?닿린 ?깃났 ?쒖뿉留?CONNECTED ?곹깭瑜?嫄대떎. */
  markConnected() {
    const btnConnect = document.getElementById('btnConnectArduino');
    const btnDisconnect = document.getElementById('btnDisconnectArduino');
    if (btnConnect) btnConnect.disabled = true;
    if (btnDisconnect) btnDisconnect.disabled = false;
    const thermalState = document.getElementById('thermalState');
    if (thermalState) {
      thermalState.textContent = 'CONNECTED';
      thermalState.className = 'state';
    }
    /* ?곗씠?곌? 8珥??섍쾶 ?ㅼ? ?딆쑝硫?'?곌껐? ?먯?留?痢≪젙?????????ъ슜?먯뿉寃??덈궡.
       (?? ?뚯뒪???ㅼ?移섎쭔 源붾젮 ?덉뼱 ?⑤룄媛 ?섎굹?????ㅻ뒗 寃쎌슦) */
    this.armDataWatchdog();
    /* 蹂대뱶媛 戮묓엳硫??먮룞?쇰줈 ?곹깭 ?뺣━ */
    if (typeof navigator !== 'undefined' && navigator.serial && navigator.serial.addEventListener && !this._portDisconnectHandler) {
      this._portDisconnectHandler = (e) => {
        if (e.target && e.target === this.port && this.keepReading) {
          if (typeof Diagnostics !== 'undefined') Diagnostics.log('?꾨몢?대끂 USB ?ы듃 遺꾨━ 媛먯? ???곌껐 ?댁젣', 'info');
          this.disconnect();
        }
      };
      navigator.serial.addEventListener('disconnect', this._portDisconnectHandler);
    }
  },

  clearBaudTimer() {
    if (this.baudTimer) { clearInterval(this.baudTimer); this.baudTimer = null; }
  },

  /* ?⑤룄 ?섎굹?????ㅻ뒗 ?곹깭瑜?媛먯??섎뒗 ?뚯튂?? ?좏슚 ?꾨젅?꾩씠 ?ㅼ뼱???뚮쭏???ъ옣??*/
  armDataWatchdog() {
    if (this._wdTimer) { clearTimeout(this._wdTimer); this._wdTimer = null; }
    this.noDataWarned = false;
    this.clearWarn();
    this._wdTimer = setTimeout(() => {
      this._wdTimer = null;
      if (!this.keepReading || this.tempCount > 0) return;
      this.noDataWarned = true;
      this.showWarn('?꾨몢?대끂???곌껐?먯?留??⑤룄 媛믪씠 ?섏떊?섏? ?딆뒿?덈떎 ???꾩옱 蹂대뱶???ㅼ?移섎뒗 ?뚯뒪??異쒕젰?????덉뒿?덈떎. ?ъ씠???명솚 痢≪젙 ?ㅼ?移?arduino/mlx90640_thermal_beachwatch.ino)瑜??낅줈?쒗븯怨??댁젣 ???ㅼ떆 ?곌껐?섏꽭??');
      if (typeof Diagnostics !== 'undefined') Diagnostics.log('?쒕━???곗씠?곕뒗 ?섏떊?섎뒗???レ옄/?⑤룄 媛믪씠 ?놁뒿?덈떎 ??痢≪젙???ㅼ?移??낅줈???꾩슂', 'warn');
    }, 8000);
  },

  clearDataWatchdog() {
    if (this._wdTimer) { clearTimeout(this._wdTimer); this._wdTimer = null; }
  },

  /* ?곌껐?먯?留??⑤룄媛 ?ㅼ? ?딆쓣 ?뚯쓽 ?덈궡 臾멸뎄 ?쒖떆 */
  showWarn(text) {
    const el = document.getElementById('thermalWarn');
    if (el) { el.textContent = text; el.hidden = false; }
  },

  clearWarn() {
    const el = document.getElementById('thermalWarn');
    if (el && !el.hidden) el.hidden = true;
  },

  /* ?댁쟾 ?꾩넚瑜좊줈 ?곗씠?곌? ?ㅼ? ?딆쑝硫??ㅼ쓬 ?꾨낫濡?媛덉븘?쇱슫?? */
  async retryNextBaud() {
    this.clearBaudTimer();
    const next = this.baudIndex + 1;
    if (next >= this.baudCandidates.length) {
      /* 紐⑤뱺 ?꾩넚瑜??쒕룄 寃곌낵 ??         쨌 諛붿씠?멸? ?꾪? ?놁쑝硫?'?곌껐 ?ㅽ뙣' (蹂대뱶/?꾩썝/USB 臾몄젣)
         쨌 諛붿씠?몃뒗 ?ㅼ?留??⑤룄媛 ?섎굹???놁쑝硫??ы듃瑜??좎???梨?痢≪젙 ?ㅼ?移??덈궡
           (?뚯뒪???ㅼ?移섎쭔 源붾젮 ?덈뒗 寃쎌슦媛 ?꾪삎????'?곌껐 ?ㅽ뙣'?쇨퀬 ?ㅼ씤 諛⑹?) */
      if (this.bytesReceived > 0) {
        this.noDataWarned = true;
        this.showWarn('?꾨몢?대끂?먯꽌 ?띿뒪?몃뒗 ?섏떊?섏?留??⑤룄 媛믪씠 ?놁뒿?덈떎 ???꾩옱 ?ㅼ?移섎뒗 痢≪젙???꾨땲???뚯뒪??異쒕젰?낅땲?? ?ъ씠???명솚 痢≪젙 ?ㅼ?移?arduino/mlx90640_thermal_beachwatch.ino)瑜??낅줈?쒗븯?몄슂.');
        if (typeof Diagnostics !== 'undefined') Diagnostics.log('?꾩넚瑜?' + this.candidatesTried.join('쨌') + ' Baud 紐⑤몢 ?쒕룄 ??諛붿씠?몃뒗 ?섏떊?섏?留??⑤룄 ?レ옄媛 ?놁뼱 ?곌껐???좎??⑸땲?? 痢≪젙???ㅼ?移??낅줈???꾩슂.', 'warn');
        return;
      }
      /* 吏꾩쭨 ?곗씠???놁쓬 ???곹깭瑜?'?곌껐 ?ㅽ뙣'濡??뺤젙?섍퀬 ?먯씤???덈궡 */
      this.onConnectFail('?꾩넚瑜?' + this.candidatesTried.join('쨌') + ' Baud瑜?紐⑤몢 ?쒕룄?덉?留??좏슚???댄솕???곗씠?곌? ?놁뒿?덈떎.');
      return;
    }
    this.baudIndex = next;
    this.loopGen++;                     // 湲곗〈 ?쎄린 猷⑦봽瑜?臾댄슚??    const oldPort = this.port;
    const oldReader = this.reader;
    const oldPipe = this.pipePromise;
    this.port = null; this.reader = null; this.pipePromise = null;
    /* reader 痍⑥냼 ???뚯씠??醫낅즺 ?湲????ы듃 ?リ린 (already open ?ㅻ쪟 諛⑹?) */
    await this.closePortSafely(oldReader, oldPort, oldPipe);
    if (typeof Diagnostics !== 'undefined') Diagnostics.log('?꾩넚瑜?' + this.baudCandidates[next] + ' Baud濡??ъ떆??, 'info');
    await this.attachPort(this.baudCandidates[next]);
  },

  /* ?ы듃瑜?baud濡??닿퀬, 洹??꾩넚瑜좊줈 ?댄솕???ㅽ듃由쇱씠 ?ㅻ뒗吏 ?뺤씤?쒕떎. */
  async attachPort(baud) {
    const port = this.selectedPort;
    if (!port || !this.keepReading) return;
    this.loopGen++;
    const gen = this.loopGen;
    this.clearBaudTimer();

    try {
      await port.open({ baudRate: baud });
    } catch (err) {
      this.candidatesTried.push(baud);
      if (typeof Diagnostics !== 'undefined') Diagnostics.countError('?ы듃 ?닿린 ?ㅽ뙣 ' + baud + ' Baud: ' + err.message);
      this.retryNextBaud();
      return;
    }
    /* DTR/RTS 耳쒓린 ??UNO R4 WiFi ??DTR ??爰쇱졇 ?덉쑝硫??쒕━???곗씠?곕? ?대낫?댁? ?딅뒗?? */
    try { await port.setSignals({ dataTerminalReady: true, requestToSend: true }); } catch (e) {}
    this.port = port;
    this.currentBaud = baud;
    this.candidatesTried.push(baud);
    this.markConnected();   // ???쒖젏?먯빞 吏꾩쭨 ?곌껐 ?곹깭

    /* ?곗씠?곌? ???ㅻ뒗 ?꾩넚瑜좎? ?쇱젙 ?쒓컙 ???ㅼ쓬 ?꾨낫濡??섏뼱媛꾨떎.
       - 源⑥쭊(baud 遺덉씪移???U+FFFD ?ㅻ웾) ?ㅽ듃由? baudProbeMs ?덉뿉 ?뚯쟾
       - ?쎌쓣 ???덈뒗 ?ㅽ듃由쇱씤???꾩쭅 ?⑤룄媛 ?놁쓬: firstProbeMs 源뚯? ?湲?         (蹂대뱶???ы듃瑜?????由ъ뀑?섏뼱 遺???먯껜?먭?????珥덇? 嫄몃┛??
          ???숈븞 ?깃툒???뚯쟾?섎㈃ 蹂대뱶瑜?怨꾩냽 由ъ뀑?쒖폒 ?뺤긽 ?곗씠?곕? 紐?諛쏅뒗??) */
    this.baudBytes = 0;
    this.baudReplace = 0;
    if (this.baudFound === null && this.validReads < 3) {
      if (typeof Diagnostics !== 'undefined') Diagnostics.log('?ы듃 ?대┝(' + baud + ' Baud) ???댄솕???곗씠???湲?以?..', 'info');
      const startedAt = Date.now();
      this.baudTimer = setInterval(() => {
        if (!this.keepReading || gen !== this.loopGen) { this.clearBaudTimer(); return; }
        if (this.baudFound !== null || this.validReads >= 3) { this.clearBaudTimer(); return; }
        const elapsed = Date.now() - startedAt;
        const garbled = this.baudBytes > 80 && (this.baudReplace / this.baudBytes) > 0.15;
        const limit = garbled ? this.baudProbeMs : this.firstProbeMs;
        if (elapsed >= limit) this.retryNextBaud();
      }, 250);
    }

    const textDecoder = new TextDecoderStream();
    this.pipePromise = port.readable.pipeTo(textDecoder.writable).catch(() => {});
    const reader = textDecoder.readable.getReader();
    this.reader = reader;

    /* ?ㅼ?移섍? '\n'???꾨땲??'\r'留??곌굅??以꾨컮轅??놁씠 ?곗냽 異쒕젰?섎뒗 寃쎌슦???덈떎.
       쨌 '\r' '\n' ?대뒓 履쎌씠???꾩꽦??以꾨줈 ?섎씪 泥섎━?섍퀬,
       쨌 ?쇱젙 ?쒓컙 以꾨컮轅덉씠 ???섑??섎㈃ 踰꾪띁 ?꾩껜瑜?媛뺤젣濡??먮룆?쒕떎(flush).
       쨌 ?? '{' 濡??쒖옉?섎뒗 JSON 以?4KB ?덊듃留??꾨젅????? ?щ윭 議곌컖?쇰줈 ?섎돇??         ?ㅻ?濡?以꾨컮轅덉씠 ???뚭퉴吏 湲곕떎由곕떎 (以묎컙???섎씪 ?먮룆?섏? ?딆쓬). */
    const FLUSH_MS = 450;
    const pickSplit = buf => {
      const n = buf.indexOf('\n');
      const r = buf.indexOf('\r');
      if (n === -1) return r;
      if (r === -1) return n;
      return n < r ? n : r;
    };
    let buffer = '';
    let sinceEmit = Date.now();

    const flushTimer = setInterval(() => {
      if (!this.keepReading || gen !== this.loopGen) return;
      if (buffer && Date.now() - sinceEmit > FLUSH_MS) {
        /* 議곌컖??JSON ? 踰꾨━吏 ?딄퀬 怨꾩냽 紐⑥??? ?덈Т 而ㅼ?硫?32KB) 踰꾨┛?? */
        if (buffer.trimStart().startsWith('{') && buffer.length < 32768) return;
        this.processRaw(buffer);
        buffer = '';
        sinceEmit = Date.now();
      }
    }, 250);
    this.flushTimer = flushTimer;

    try {
      while (this.keepReading) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          buffer += value;
          this.bytesReceived += value.length;
          /* baud 遺덉씪移??먯젙????源⑥쭊 臾몄옄(U+FFFD) 鍮꾩쑉 吏묎퀎 */
          this.baudBytes += value.length;
          const bad = value.match(/\uFFFD/g);
          if (bad) this.baudReplace += bad.length;
          let cut;
          while ((cut = pickSplit(buffer)) !== -1) {
            const line = buffer.slice(0, cut);
            buffer = buffer.slice(cut + 1);
            this.noteRaw(line.trim());
            this.handleData(line.trim());
            sinceEmit = Date.now();
          }
        }
      }
    } catch (err) {
      if (gen !== this.loopGen) {
        /* ?댁쟾 ?꾩넚瑜좎쓽 ?쎄린 猷⑦봽媛 ?댁젣????臾댁떆 */
      } else if (this.keepReading && this.validReads < 3 && this.baudFound === null) {
        this.retryNextBaud();
      } else if (this.keepReading) {
        this.onConnectFail('?댄솕???곗씠???섏떊 以??ㅻ쪟: ' + err.message);
      }
    } finally {
      clearInterval(flushTimer);
      if (gen === this.loopGen) this.flushTimer = null;
      try { reader.releaseLock(); } catch (e) {}
    }
  },

  /* 以꾨컮轅??녿뒗 ?곗냽 異쒕젰 ?ㅽ듃由????レ옄 ?좏겙??紐⑤몢 戮묒븘 李⑤?濡??먯젙?쒕떎.
     ?? '?뚯닔???덈뒗 ?レ옄'留??좏슚 ?⑤룄濡??몄젙?쒕떎. ?ъ슜?먯쓽 ?뚯뒪???ㅼ?移?異쒕젰
     ([1/4] ?뚯뒪??以?.. ?? ? ?レ옄媛吏留??⑤룄媛 ?꾨땲誘濡?嫄몃윭?몃떎. */
  processRaw(text) {
    if (!text || !text.trim()) return false;
    this.noteRaw(text);
    const re = /[-+]?[0-9]*\.[0-9]+/g;
    let m, processed = false;
    while ((m = re.exec(text)) !== null) {
      const v = parseFloat(m[0]);
      if (Number.isNaN(v) || v < -40 || v > 400) continue;
      processed = true;
      this.onValidFrame(v, v);
    }
    return processed;
  },

  /* ?ㅼ젣 ?섏떊 ?먮Ц??理쒓렐 6以꾩쓣 移대뱶 ?섎떒???쒖떆(?먮룆 ?ㅽ뙣 ?붾쾭源낆슜) */
  noteRaw(text) {
    const t = (text || '').trim();
    if (!t) return;
    this.lastRaw.push(t.length > 120 ? t.slice(0, 120) + '?? : t);
    if (this.lastRaw.length > 6) this.lastRaw.splice(0, this.lastRaw.length - 6);
    const el = document.getElementById('thermalRaw');
    if (el) {
      if (el.hidden) el.hidden = false;
      el.textContent = this.lastRaw.join('\n');
    }
  },

  // ?꾨몢?대끂濡??쒕툕 ?ъ텧 ?쒖뼱 紐낅졊 ?꾩넚 ('T' 臾몄옄 ?≪떊)
  async sendCommand(cmd) {
    if (this.port && this.port.writable) {
      try {
        const encoder = new TextEncoder();
        const writer = this.port.writable.getWriter();
        await writer.write(encoder.encode(cmd));
        writer.releaseLock();
        if (typeof Diagnostics !== 'undefined') Diagnostics.log(`?꾨몢?대끂 紐낅졊 ?꾩넚 [${cmd}]: ?쒕툕 ?ъ텧 紐⑦꽣 ?묐룞`, 'ok');
      } catch (e) {
        if (typeof Diagnostics !== 'undefined') Diagnostics.countError('紐낅졊 ?꾩넚 ?ㅽ뙣: ' + e.message);
      }
    }
  },

  /* ?앹껜 ?댁썝 ?먯젙. 'person' | 'hotObject' | 'low' */
  classify(temp) {
    if (temp < this.threshold) return 'low';
    if (temp <= this.livingCeiling) return 'person';
    return 'hotObject';
  },

  /* ?ㅼ떆媛??ㅽ듃由쇱쓽 ??以? JSON({"temp"/"max", ??) ?먮뒗 '36.80' 媛숈? ?レ옄 ?띿뒪??
     'temp:36.8' 泥섎읆 ?レ옄媛 ?욎씤 ?띿뒪?멸퉴吏 愿??섍쾶 ?댁꽍?쒕떎.
     쨌 {"f":[...768...]} = MLX90640 ?댄솕???꾨젅?????덊듃留?????⑤룄 ?먯젙?먮뒗 ?ъ슜 ????
     쨌 ?뚯닔?먯씠 ?녿뒗 ?レ옄([1/4] ???뚯뒪??異쒕젰)???⑤룄濡??몄젙?섏? ?딅뒗??媛鍮꾩? 諛⑹?). */
  handleData(rawLine) {
    if (!rawLine || rawLine.startsWith('ERR:')) return;
    let current = null, peak = null;

    if (rawLine.startsWith('{')) {
      try {
        const data = JSON.parse(rawLine.replace(/,?\s*}.*$/s, '}'));
        const F = data.f;
        if (Array.isArray(F)) {
          const ok = F.length === 768 && F.every(v => Number.isFinite(parseFloat(v)));
          if (?ㅼ??? this.setHeatFrame(F.map(Number));
          /* ?꾨젅??以꾩? ?⑤룄 ?먯젙???곗? ?딅뒗??(temp/max 媛 ?④퍡 ?덉쓣 ?뚮쭔 泥섎━) */
          if (data.temp === undefined && data.max === undefined) return;
        }
        const num = v => (v === undefined || v === null || v === '') ? null : parseFloat(v);
        current = num(data.temp);
        if (current === null || Number.isNaN(current)) current = num(data.temperature);
        if (current === null || Number.isNaN(current)) current = num(data.current);
        peak = num(data.max);
        if (current !== null && Number.isNaN(current) || current !== null && !(current >= -40 && current <= 400)) current = null;
        if (peak !== null && Number.isNaN(peak) || peak !== null && !(peak >= -40 && peak <= 400)) peak = null;
      } catch (e) {
        /* 源⑥쭊/?섎┛ ?덊듃留??꾨젅??{"f":[ ...)? ?섎갚 媛쒖쓽 ?レ옄瑜??닿퀬 ?덉뼱
           ?꾨옒 ?レ옄 異붿텧濡??섍린硫??됰슧??媛믪쓣 ?⑤룄濡??ㅼ씤?쒕떎 ??洹몃깷 踰꾨┛?? */
        if (/^\{\s*"f"/.test(rawLine)) return;
        /* 洹?諛뽰쓽 ?섎┛ JSON? ?꾨옒 ?レ옄 異붿텧濡?泥섎━ */
      }
    }
    if (current === null || Number.isNaN(current)) {
      /* 愿????レ옄 異붿텧 ???? ?뚯닔???덈뒗 ?レ옄留??⑤룄濡??몄젙(?뚯뒪??異쒕젰 媛鍮꾩? ?쒓굅) */
      const m = rawLine.match(/[-+]?[0-9]*\.[0-9]+/);
      if (m) {
        const v = parseFloat(m[0]);
        if (!Number.isNaN(v) && v >= -40 && v <= 400) { current = v; peak = v; }
      }
    }
    if (current === null || Number.isNaN(current)) return;
    if (peak === null || Number.isNaN(peak)) peak = current;
    this.onValidFrame(peak, current);
  },

  /* 32횞24 ?댄솕???꾨젅?????(?ъ씠??'?쒖빞 ?뺣젹' ?덊듃留??ㅻ쾭?덉씠?? */
  setHeatFrame(data) {
    const n = data.length;
    let lo = data[0], hi = data[0];
    for (let i = 1; i < n; i++) { if (data[i] < lo) lo = data[i]; if (data[i] > hi) hi = data[i]; }
    this.heatFrame = data;
    this.heatAt = Date.now();
    this.heatMin = lo; this.heatMax = hi;
    this.syncAlignUI();
  },

  onValidFrame(peak, current) {
    if (this.tempCount === 0) this.clearWarn();
    this.armDataWatchdog();        // ?ㅼ륫???ㅼ뼱?ㅻ㈃ ?뚯튂???ъ옣??(?곌껐 ?좎? ?쒖떆??
    if (this.validReads < 3) this.validReads++;
    if (this.validReads >= 3 && this.baudFound === null) {
      this.baudFound = this.currentBaud;
      this.clearBaudTimer();
      if (typeof Diagnostics !== 'undefined') Diagnostics.log('?댄솕???곗씠???섏떊 ?뺤씤 ??' + this.currentBaud + ' Baud (?꾩넚瑜??먮룞 媛먯? ?꾨즺)', 'ok');
    }
    this.currentTemp = current;
    this.pushHistory(peak || current);
    this.refreshLiveStats();
    this.evaluateCondition(current);
  },

  resetStats() {
    this.clearDataWatchdog();
    this.clearWarn();
    this.noDataWarned = false;
    this.history = [];
    this.tempMin = this.tempMax = null;
    this.tempSum = 0; this.tempCount = 0;
    this.lastHumanAt = 0;
    this.lastRaw = [];
    this.heatFrame = null; this.heatAt = 0;
    const tempEl = document.getElementById('thermalCurrentTemp');
    const maxEl = document.getElementById('thermalPeakTemp');
    const avgEl = document.getElementById('thermalAvgTemp');
    if (tempEl) tempEl.textContent = '--.-째C';
    if (maxEl) maxEl.textContent = '--.-째C';
    if (avgEl) avgEl.textContent = '--.-째C';
    const rawEl = document.getElementById('thermalRaw');
    if (rawEl) { if (!rawEl.hidden) rawEl.hidden = true; rawEl.textContent = '?섏떊 ?먮Ц ?湲?..'; }
    this.renderGraph();
  },

  pushHistory(v) {
    const h = this.history;
    h.push({ t: Date.now(), v });
    if (h.length > this.historyCap) h.splice(0, h.length - this.historyCap);
    this.tempMin = this.tempMin === null ? v : Math.min(this.tempMin, v);
    this.tempMax = this.tempMax === null ? v : Math.max(this.tempMax, v);
    this.tempSum += v; this.tempCount += 1;
  },

  /* ?ㅼ떆媛??レ옄(?꾩옱/理쒓퀬/?됯퇏) 媛깆떊. 洹몃옒?꾨뒗 ?ㅻ줈??댁꽌 洹몃┛?? */
  refreshLiveStats() {
    const tempEl = document.getElementById('thermalCurrentTemp');
    const maxEl = document.getElementById('thermalPeakTemp');
    const avgEl = document.getElementById('thermalAvgTemp');
    if (tempEl) tempEl.textContent = this.currentTemp.toFixed(1) + '째C';
    if (maxEl) maxEl.textContent = (this.tempMax === null ? '--.-' : this.tempMax.toFixed(1)) + '째C';
    if (avgEl) avgEl.textContent = (this.tempCount ? (this.tempSum / this.tempCount).toFixed(1) : '--.-') + '째C';
    const graph = document.getElementById('thermalGraph');
    if (graph) {
      if (graph.hidden) graph.hidden = false;
      const now = Date.now();
      if (now - this.lastGraphAt >= this.graphThrottleMs) {
        this.lastGraphAt = now;
        this.renderGraph();
      }
    }
  },

  /* 理쒓렐 ?⑤룄 沅ㅼ쟻 ?ㅽ뙆?щ씪?? ?꾧퀎媛??앹껜 ?섑븳)怨??곹븳(鍮꾩깮泥??쒖옉)???④퍡 洹몃┛?? */
  renderGraph() {
    const canvas = document.getElementById('thermalGraph');
    if (!canvas) return;
    const ctx = canvas.getContext && canvas.getContext('2d');
    if (!ctx) return;
    const W = canvas.width, H = canvas.height;
    const h = this.history;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0b2a38';
    ctx.fillRect(0, 0, W, H);
    if (h.length < 2) {
      ctx.fillStyle = '#5d8796';
      ctx.font = '12px ui-monospace, Menlo, monospace';
      ctx.fillText('-- waiting for serial data --', 12, H / 2 + 4);
      return;
    }

    let lo = Math.min.apply(null, h.map(p => p.v));
    let hi = Math.max.apply(null, h.map(p => p.v));
    if (this.tempMin !== null) lo = Math.min(lo, this.tempMin);
    if (this.tempMax !== null) hi = Math.max(hi, this.tempMax);
    lo = Math.floor(lo - 1); hi = Math.ceil(hi + 1);
    if (hi - lo < 4) hi = lo + 4;

    const px = i => Math.round((i / (h.length - 1)) * W);
    const py = v => Math.round(H - 3 - ((v - lo) / (hi - lo)) * (H - 6));

    const drawGuide = (v, color, dash) => {
      if (v < lo || v > hi) return;
      const yy = py(v);
      ctx.strokeStyle = color;
      ctx.setLineDash(dash);
      ctx.beginPath();
      ctx.moveTo(0, yy); ctx.lineTo(W, yy);
      ctx.stroke();
      ctx.setLineDash([]);
    };
    drawGuide(this.threshold, '#ffd45a99', [5, 4]);
    drawGuide(this.livingCeiling, '#e0514299', [2, 4]);

    /* 援ш컙?? ?앹껜 ????꾧퀎~?곹븳)? 二쇳솴, 洹?諛뽰? 泥?줉 */
    const colorOf = v => (v >= this.threshold && v <= this.livingCeiling) ? '#ff8a5c' : '#58e2d2';
    ctx.lineWidth = 1.6;
    for (let i = 0; i < h.length - 1; i++) {
      ctx.strokeStyle = colorOf(h[i + 1].v);
      ctx.beginPath();
      ctx.moveTo(px(i), py(h[i].v));
      ctx.lineTo(px(i + 1), py(h[i + 1].v));
      ctx.stroke();
    }
    /* 理쒖떊 媛???+ ?쇰꺼 */
    const last = h[h.length - 1].v;
    ctx.fillStyle = colorOf(last);
    ctx.beginPath();
    ctx.arc(px(h.length - 1), py(last), 3.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#c8e8ee';
    ctx.font = '11px ui-monospace, Menlo, monospace';
    ctx.fillText(last.toFixed(1) + '째C', 8, 14);
    ctx.fillText('min ' + lo + '째C', 8, H - 4);
  },

  /* ?쇰컲(媛?쒓킅) 移대찓?쇱? ?댄솕?곸쓽 ?숈떆 援먯감 寃利?
     ?댄솕?곸? ?щ엺/媛앹껜瑜? ?쇰컲 移대찓?쇰뒗 ?꾪뿕 援ъ뿭 移⑤쾾???대떦?쒕떎. */
  evaluateCondition(value) {
    const kind = this.classify(value);
    const now = Date.now();
    if (kind === 'person') {
      this.lastHumanAt = now;
    } else if (kind === 'hotObject') {
      /* ?④굅??媛앹껜(鍮꾩깮泥????щ엺怨??곸땐?섎뒗 ?먮룆 ???앹껜 異붿젙??利됱떆 珥덇린?뷀빐
         援먯감 寃利앹뿉???쒖쇅?섎룄濡??쒕떎. */
      this.lastHumanAt = 0;
    }
    const isHuman = kind === 'person' || (kind === 'low' && now - this.lastHumanAt <= this.humanWindowMs);

    let risky = (typeof activeCameras === 'function' ? activeCameras() : [])
      .reduce((acc, c) => (c.riskCount || 0) > (acc.riskCount || 0) ? c : acc, { riskCount: 0, name: '' });
    if (typeof focusedCamera === 'function') {
      const f = focusedCamera();
      if (f && (f.riskCount || 0) > (risky.riskCount || 0)) risky = f;
    }
    const isInsideDangerZone = (risky.riskCount || 0) > 0;

    const statusEl = document.getElementById('thermalStatusTag');
    const stateEl = document.getElementById('thermalState');
    const noteEl = document.getElementById('thermalDualNote');

    /* ?? ?댄솕???⑤룆 ?먯젙: ?щ엺 / 怨좎삩 媛앹껜 / ???媛앹껜 ?? */
    let label, color, chip, chipClass;
    if (kind === 'person') {
      label = '?щ엺(?앹껜 ?댁썝) ?뺤씤'; color = '#e05142';
      chip = isInsideDangerZone ? 'HUMAN_IN_ZONE' : 'HUMAN_DETECTED';
      chipClass = 'state alert';
    } else if (kind === 'hotObject') {
      label = '怨좎삩 媛앹껜(鍮꾩깮泥?'; color = '#8a5a17';
      chip = 'HOT_OBJECT'; chipClass = 'state watch';
    } else {
      label = '媛앹껜/二쇰?(???'; color = '#07374a';
      chip = 'NORMAL'; chipClass = 'state';
    }
    if (statusEl) { statusEl.textContent = label; statusEl.style.color = color; }
    if (stateEl) { stateEl.textContent = chip; stateEl.className = chipClass; }

    /* ?? 援먯감 寃利??덈궡 臾멸뎄 ?? */
    const camerasOn = (typeof activeCameras === 'function' ? activeCameras() : []).length;
    let note, noteClass;
    if (isInsideDangerZone && isHuman) {
      note = `援먯감 寃利? ?쇰컲 移대찓???꾪뿕 援ъ뿭 ${risky.riskCount}紐?+ ?댄솕???앹껜 ?댁썝(${value.toFixed(1)}째C) ???듭궗 ?꾪뿕援??뺤젙 쨌 ?ъ씠??+ ?쒕툕 ?ъ텧`;
      noteClass = 'alert';
    } else if (isInsideDangerZone && !isHuman) {
      note = `?쇰컲 移대찓?? ?꾪뿕 援ъ뿭 ${risky.riskCount}紐?쨌 ?댄솕???щ엺 誘명솗??${value.toFixed(1)}째C)`
        + (kind === 'hotObject' ? ' ??42째C 珥덇낵 怨좎삩 媛앹껜濡??먯젙?섏뼱 寃利??쒖쇅' : '');
      noteClass = 'warn';
    } else if (!isInsideDangerZone && isHuman) {
      note = `?앹껜 ?댁썝(${value.toFixed(1)}째C) 媛먯? 쨌 ?꾪뿕 援ъ뿭? 鍮꾩뼱 ?덉쓬 ??吏??二쇱떆`;
      noteClass = 'warn';
    } else {
      note = camerasOn === 0
        ? '?쇰컲 移대찓???곌껐 ?????꾪뿕 援ъ뿭 ?먯젙 ?湲? ?댄솕???ㅼ떆媛??⑤룄 ?쒖떆??怨꾩냽 媛깆떊?⑸땲??'
        : `?쇰컲 移대찓??${camerasOn}? + ?댄솕???숈떆 媛먯떆 쨌 ?꾪뿕 援ъ뿭 鍮꾩뼱 ?덉쓬`;
      noteClass = 'ok';
    }
    if (noteEl) { noteEl.textContent = note; noteEl.className = 'thermal-note ' + noteClass; }

    /* ?? ??蹂듯빀 議곌굔: ?꾪뿕 援ъ뿭 移⑤쾾(?쇰컲 移대찓?? + ?앹껜 ?댁썝(?댄솕?? ?숈떆 異⑹” ?? */
    if (isInsideDangerZone && isHuman) {
      if (typeof playSiren === 'function' && now - this.lastSirenAt > this.sirenCooldownMs) {
        this.lastSirenAt = now;
        playSiren('critical');
      }

      if (now - this.lastDeployTime > this.deployCooldown) {
        this.lastDeployTime = now;
        this.sendCommand('T'); // ?꾨몢?대끂濡?'T' ?좏샇 ?꾩넚

        if (typeof pushEvent === 'function') {
          pushEvent(`[?듭궗 ?꾪뿕援??뺤젙] ?꾪뿕 援ъ뿭 ???몄썝(${risky.riskCount}紐? + ?댄솕???앹껜 ?댁썝(${value.toFixed(1)}째C) ???쒕툕 ?ъ텧 ?묐룞!`, 'error', {
            camera: risky.name || '?댄솕???쇰컲 ?숈떆'
          });
        }

        if (typeof Speaker !== 'undefined' && Speaker.speak) {
          Speaker.speak('?듭궗 ?꾪뿕援??뺤씤. 援щ챸 ?쒕툕瑜??ъ쿃?⑸땲??');
        }
      }
    }
    /* ?댁썝留?媛먯??섍퀬 ?꾪뿕 援ъ뿭?먮뒗 ?ㅼ뼱?ㅼ? ?딆? 寃쎌슦 */
    else if (!isInsideDangerZone && kind === 'person') {
      if (typeof pushEvent === 'function' && Math.random() < 0.05) {
        pushEvent(`[?댄솕??媛먯?] ?앹껜 ?댁썝(${value.toFixed(1)}째C) 媛먯? (?꾪뿕 援ъ뿭 ?멸낸)`, 'info');
      }
    }
  },

  async disconnect() {
    this.keepReading = false;
    this.clearBaudTimer();
    this.clearDataWatchdog();
    this.clearWarn();
    if (this.flushTimer) { clearInterval(this.flushTimer); this.flushTimer = null; }
    this.loopGen++;
    if (this._portDisconnectHandler && navigator.serial && navigator.serial.removeEventListener) {
      try { navigator.serial.removeEventListener('disconnect', this._portDisconnectHandler); } catch (e) {}
      this._portDisconnectHandler = null;
    }
    /* reader 痍⑥냼 ???뚯씠??醫낅즺 ?湲????ы듃 ?リ린 (?ъ뿰寃???already open 諛⑹?) */
    const oldReader = this.reader;
    const oldPort = this.port;
    const oldPipe = this.pipePromise;
    this.reader = null; this.port = null; this.pipePromise = null;
    await this.closePortSafely(oldReader, oldPort, oldPipe);

    this.baudFound = null;
    this.currentBaud = null;
    this.validReads = 0;
    this.bytesReceived = 0;
    this.candidatesTried = [];

    const btnConnect = document.getElementById('btnConnectArduino');
    const btnDisconnect = document.getElementById('btnDisconnectArduino');
    if (btnConnect) btnConnect.disabled = false;
    if (btnDisconnect) btnDisconnect.disabled = true;

    const thermalState = document.getElementById('thermalState');
    if (thermalState) {
      thermalState.textContent = 'DISCONNECTED';
      thermalState.className = 'state';
    }

    if (typeof Diagnostics !== 'undefined') Diagnostics.log('?꾨몢?대끂 ?곌껐 ?댁젣 ?꾨즺', 'info');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  ArduinoThermal.init();
});

/* ?댄솕?????ㅼ???(dark blue ??blue ??cyan ??yellow ??orange/red)
   t: 0..1 ?몄텧?먮뒗 ?대옩?꾨? 蹂댁옣?쒕떎 */
function ArduinoThermalHeatColor(t) {
  const stops = [
    [9, 34, 51], [10, 74, 146], [23, 183, 192],
    [255, 212, 90], [255, 120, 66], [229, 38, 19]
  ];
  const n = stops.length - 1;
  const x = Math.min(1, Math.max(0, t)) * n;
  const i = Math.min(n - 1, Math.floor(x));
  const f = x - i;
  return [
    Math.round(stops[i][0] + (stops[i + 1][0] - stops[i][0]) * f),
    Math.round(stops[i][1] + (stops[i + 1][1] - stops[i][1]) * f),
    Math.round(stops[i][2] + (stops[i + 1][2] - stops[i][2]) * f)
  ];
}

/* 媛쒕컻???꾧뎄쨌?먮룞???뚯뒪?몄뿉???묎렐?????덈룄濡??몄텧?쒕떎.
   window.BeachWatch ??js/81(?욎そ ?ㅽ겕由쏀듃)?먯꽌 留뚮뱾誘濡? ???뚯씪(82踰? ?ㅼそ)?먯꽌
   ?좎뼵??ArduinoThermal ??吏곸젒 ?ｌ쓣 ?섎뒗 ?녿떎. ?ш린???ㅼ뿉 遺숈씤?? */
if (window.BeachWatch) window.BeachWatch.ArduinoThermal = ArduinoThermal;
