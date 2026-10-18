# 제3자 오픈소스 라이선스 고지 (TensorFlow.js · COCO-SSD)

이 문서는 Beach Watch 프로젝트가 AI 사람 탐지에 사용하는 외부 오픈소스 구성 요소의
라이선스 정보를 모아 둔 것입니다. 프로젝트 자체의 라이선스는 별도 `LICENSE` 파일로
명시되지 않았으므로, 배포·재배포 전에 프로젝트 권리자와 라이선스를 먼저 확인하세요.

작성 기준일: 2026-10-18

## 1. AI 감지에 사용하는 구성 요소

| 구성 요소 | 버전 | 사용 방식 | 라이선스 | 저작권 |
|---|---|---|---|---|
| `@tensorflow/tfjs` | 4.22.0 | 브라우저에서 CDN 스크립트로 로드 (`index.html`) | Apache License 2.0 | The TensorFlow Authors / Google LLC |
| `@tensorflow-models/coco-ssd` | 2.2.3 | 브라우저에서 CDN 스크립트로 로드 (`index.html`) | Apache License 2.0 | The TensorFlow Authors / Google LLC |
| COCO-SSD 사전 학습 가중치 (`mobilenet_v2` base) | coco-ssd 2.2.3이 런타임에 내려받음 | 모델 로드 시 자동 다운로드 | Apache License 2.0 | The TensorFlow Authors / Google LLC |

- 기본 CDN: `https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js`,
  `https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.2.3/dist/coco-ssd.min.js`
- 대체 CDN(미러): `https://unpkg.com/@tensorflow/tfjs@4.22.0/dist/tf.min.js`
- 두 패키지와 모델 가중치는 이 저장소에 소스로 포함되어 있지 않습니다. 실행 시점에
  CDN에서 받아 브라우저 메모리에서만 실행되며, 서버(Node.js) 측에서는 사용하지 않습니다.
- 정확한 저작권 연도와 고지 문구는 각 패키지가 배포하는 `LICENSE` 파일
  (`node_modules/@tensorflow/tfjs/LICENSE`, `node_modules/@tensorflow-models/coco-ssd/LICENSE`)을
  따릅니다.

## 2. 학습 데이터

- COCO-SSD 모델은 COCO(Microsoft Common Objects in Context) 데이터셋으로 학습되었습니다.
- COCO 데이터셋 이미지·주석은 COCO 자체 라이선스(CC BY 4.0)를 따르며, 원본 데이터셋은
  이 저장소에 포함되어 있지 않습니다. 데이터셋 사용 조건은
  <https://cocodataset.org/#termsofuse> 에서 확인하세요.
- 이 프로젝트는 모델을 재학습하거나 자체 학습 데이터셋을 포함하지 않습니다.

## 3. Apache License 2.0을 따르는 구성 요소에 요구되는 사항

Apache License 2.0을 따르는 배포물(위 구성 요소를 재배포하는 경우)에는 다음이 필요합니다.

1. **라이선스 사본 제공** — 본 문서 4장의 Apache License 2.0 전문을 함께 제공하거나,
   명시적으로 접근 가능한 위치에 링크해야 합니다.
2. **저작권·라이선스 고지 유지** — 소스 형태를 재배포할 때 원본 저작권, 특허, 상표,
   출처 표시를 유지해야 합니다.
3. **변경 사항 표시** — 수정한 파일에는 변경했다는 명시적인 표시를 남겨야 합니다.
4. **NOTICE 파일 처리** — 원본에 `NOTICE` 파일이 있다면, 해당 고지를 재배포물에도
   읽을 수 있는 형태로 포함해야 합니다.

이 프로젝트는 위 구성 요소를 소스에 포함·수정하지 않고 CDN으로만 불러오므로,
현재 저장소 배포에는 라이선스 사본 제공과 출처 표시(본 문서)로 충분합니다.
다만 패키지 소스를 직접 번들링하거나 수정해 배포하는 경우에는 위 1~4항을 그대로 따라야 합니다.

## 4. Apache License 2.0 전문

```text
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

전문 원문: <https://www.apache.org/licenses/LICENSE-2.0.txt>

## 5. 그 밖의 주요 의존성

서버와 개발 도구가 쓰는 패키지도 각자의 라이선스를 따릅니다. 전체 목록은
`package-lock.json`을 확인하세요.

| 구성 요소 | 용도 | 라이선스 |
|---|---|---|
| Express 4 | 웹 서버 · 인증 API | MIT |
| `playwright-core` | 자동화 점검 스크립트 (`tests/`) | Apache License 2.0 |
| `node:sqlite` (Node.js 내장) | 계정 · 이벤트 저장 | Node.js 라이선스 |

음성 안내(Web Speech API), 경보음(Web Audio API), 열화상 시리얼 연결(Web Serial API),
전체화면 관제 모드(Fullscreen API)처럼 브라우저 플랫폼 기능을 쓰는 부분은
해당 브라우저의 정책과 조건을 따릅니다.
이메일 자동 발송은 외부 서비스 FormSubmit(<https://formsubmit.co>)을 사용하므로
그 서비스 이용약관도 함께 확인하세요.
