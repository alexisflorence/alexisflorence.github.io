<script lang="ts">
  import heartImg from "$lib/assets/RestingHeartRate.png";

  type Finding = {
    dataPoint: string;
    firstDateValue: string;
    secondDateValue: string;
    change: string;
    explanation: string;
  };

  const findings: Finding[] = [
    {
      dataPoint: "Anterior Mediastinal Mass Size",
      firstDateValue: "13.5 x 9.1cm",
      secondDateValue: "7.6 x 6.0cm",
      change: "Decreased",
      explanation:
        "Size of the tumor in the chest, smaller size indicates positive response to treatment.",
    },
    {
      dataPoint: "Anterior Mediastinal Mass SUV",
      firstDateValue: "Max SUV 23.8",
      secondDateValue: "Max SUV 13.3",
      change: "Decreased",
      explanation:
        "SUV stands for Standard Uptake Value, a measure of how much glucose the tissue is using; higher values can indicate more active or aggressive disease. A lower SUV means the mass is less active, which is good.",
    },
    {
      dataPoint: "Right Hilum SUV",
      firstDateValue: "Max SUV 11.1",
      secondDateValue: "Max SUV 10.4",
      change: "Slightly Decreased",
      explanation:
        "The hilum is an area of the lung where blood vessels and airways enter and exit. Indicator of metabolic activity here.",
    },
    {
      dataPoint: "Right Pericardial Lymph Node Size",
      firstDateValue: "2.1 x 1.5cm",
      secondDateValue: "1.6 x 0.8cm",
      change: "Decreased",
      explanation:
        "Size of lymph node near the heart, with a decrease often indicating treatment effectiveness.",
    },
    {
      dataPoint: "Right Pericardial Node SUV",
      firstDateValue: "Max SUV 13.1",
      secondDateValue: "Max SUV 8.3",
      change: "Decreased",
      explanation: "A lower SUV in these nodes means they are less active.",
    },
    {
      dataPoint: "Right Pleural Effusion",
      firstDateValue: "Small with SUV 2.0",
      secondDateValue: "Resolved",
      change: "Improved",
      explanation:
        "Fluid accumulation in chest cavity associated with disease, its resolution is a positive sign.",
    },
    {
      dataPoint: "Trace Left Pleural Effusion",
      firstDateValue: "Present",
      secondDateValue: "Resolved",
      change: "Improved",
      explanation:
        "Not mentioned in the later scan, it's gone or too minor to note.",
    },
    {
      dataPoint: "Tracer Activity in Rib",
      firstDateValue: "Not Mentioned",
      secondDateValue: "Trace accumulation, SUV 2.3",
      change: "Improved",
      explanation:
        "Tracer accumulation in the rib might suggest the presence of cancer cells, an infection, or other bone conditions, but is indeterminate without a clear lesion on CT. Attention is needed in follow-up exams.",
    },
    {
      dataPoint: "Spleen Size and Activity",
      firstDateValue: "Normal",
      secondDateValue: "Normal",
      change: "Stable",
      explanation:
        "The spleen's size and activity being normal means it's functioning as it should without evidence of disease affecting it.",
    },
    {
      dataPoint: "Liver Lesion",
      firstDateValue: "Tiny cyst",
      secondDateValue: "Tiny cyst",
      change: "Stable",
      explanation:
        "A cyst in the liver is a small, fluid-filled sac that hasn't changed over time, indicating it's likely not cancerous and is stable, which is usually not a concern.",
    },
    {
      dataPoint: "Pelvic Lymphnodes",
      firstDateValue: "None",
      secondDateValue: "None",
      change: "Stable",
      explanation:
        "No lymphadenopathy, meaning no abnormal lymph nodes were found in the pelvis area.",
    },
    {
      dataPoint: "Deauville Score",
      firstDateValue: "None",
      secondDateValue: "5",
      change: "Assessed",
      explanation:
        "Score used to measure treatment response in lymphoma, with 5 suggesting active disease.",
    },
  ];
</script>

<svelte:head>
  <title>wesflorence :: cancer db</title>
</svelte:head>
<h1 class="text-4xl font-bold">Cancer</h1>
<p class="mb-5 font-mono">A dasboard for tracking health.</p>

<p class="mb-2">
  In July, I sought medical attention from my primary care physician due to a
  persistent, dry cough that seemed reflexive in nature. Over time, additional
  symptoms emerged, including fatigue, vomiting, and severe facial swelling.
  These were later understood to be related to a large chest tumor, which was
  diagnosed as Hodgkin Lymphoma. The tumor was pressing against a <a
    href="https://en.wikipedia.org/wiki/Phrenic_nerve"
    class="text-rose-700">nerve</a
  > in my chest, causing the cough and vomiting, and was also compressing my Superior
  Vena Cava, complicating blood flow back to my heart. This compression made anesthesia
  for a biopsy riskier than usual.
</p>
<p class="mb-2">
  Treatment began with ABVD chemotherapy administered through IV, instead of the
  standard port, due to the risks posed by my heart condition. So far,
  chemotherapy side effects have been manageable, with fatigue and numbness in
  my fingers being the most significant. My treatment has shifted from ABVD to Pembro-GVD chemotherapy, prompted by the high
  metabolic activity in my chest. However, there are encouraging indications
  that the tumor size is reducing, showing positive signs of progress.
</p>

<p class="mb-8">
  I've created this dashboard to mindfully keep track of my timeline. It is also
  useful to share with friends in family who might be curious about that status
  of my treatement. I will continue to update it when I have the energy and
  will.
</p>

<div class="bg-zinc-900 shadow overflow-hidden rounded-lg mb-10">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium">Summary</h3>
    <p class="mt-1 max-w-2xl text-sm text-zinc-400">
      Progression and treatment Hodgkin Lymphoma.
    </p>
  </div>
  <div>
    <dl>
      <!-- Diagnosis-->
      <div
        class="bg-zinc-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
      >
        <dt class="text-lg font-medium">Diagnosis</dt>
        <dd class="mt-1 text-sm text-zinc-300 sm:col-span-2 sm:mt-0">
          Stage 2B Classic <a
            href="https://en.wikipedia.org/wiki/Hodgkin_lymphoma"
            class="text-rose-700">Hodgkin's Disease</a
          >, Nodular Sclerosing type with
          <a
            href="https://en.wikipedia.org/wiki/Superior_vena_cava"
            class="text-rose-700">Superior Vena Cava</a
          > compression.
        </dd>
      </div>
      <!-- Time Ordered Events & Findings -->
      <div
        class="bg-zinc-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
      >
        <dt class="text-lg font-medium">Timeline of Events</dt>
        <dd class="mt-1 text-sm text-zinc-300 sm:col-span-2 sm:mt-0">
          <ul class="list-none space-y-1">
            <li>
              <strong class="text-zinc-500">07.24</strong> Discovery of 15.7cm mediastinal
              mass via Chest X-Ray.
            </li>
            <li>
              <strong class="text-zinc-500">07.25</strong> CT scan confirms tumor
              extending into right chest, encasing SVC.
            </li>
            <li>
              <strong class="text-zinc-500">08.02</strong> CT-guided biopsy revealing
              atypical lymphohistiocytic infiltrate.
            </li>
            <li>
              <strong class="text-zinc-500">08.10</strong> Initial PET scan reveals
              extensive disease with high metabolic activity.
            </li>
            <li>
              <strong class="text-zinc-500">08.14</strong> Echocardiogram showing
              LVEF 65-70% with SVC collapse.
            </li>
            <li>
              <strong class="text-zinc-500">08.17</strong> Chest Biopsy to confirms
              Nodular Sclerosing Hodgkin Lymphoma.
            </li>
            <li>
              <strong class="text-zinc-500">08.21</strong> Initiation of ABVD chemotherapy.
            </li>
            <li>
              <strong class="text-zinc-500">09.11</strong> Port placement for chemotherapy
              administration.
            </li>
            <li>
              <strong class="text-zinc-500">10.23</strong> Restaging PET scan post
              2 cycles of ABVD shows response with decreased mass size and metabolic
              activity but remains Deauville score 5 prompting reassessment of treatment.
            </li>
            <li>
              <strong class="text-zinc-500">11.13</strong> CT-guided biopsy confirms
              persistent presence of Hodgkin cells.
            </li>
            <li>
              <strong class="text-zinc-500">11.15</strong> Initiation of Pembro-GVD
              chemotherapy.
            </li>
          </ul>
        </dd>
      </div>
      <div
        class="bg-zinc-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
      >
        <dt class="text-lg font-medium">Next Steps</dt>
        <dd class="mt-1 text-sm text-zinc-300 sm:col-span-2 sm:mt-0">
          Continue Pembro-GVD therapy, likely followed by
          <a
            href="https://en.wikipedia.org/wiki/Hematopoietic_stem_cell_transplantation"
            class="text-rose-700">stem cell transplant</a
          >.
        </dd>
      </div>
    </dl>
  </div>
</div>

<h2 class="text-xl font-bold mb-2">Treatment</h2>
<h3 class="text-md font-bold hover:text-rose-700">
  <a href="https://en.wikipedia.org/wiki/ABVD">ABVD</a>
</h3>
<h4 class="text-xs font-mono">
  <a
    href="https://en.wikipedia.org/wiki/Doxorubicin"
    class="hover:text-rose-700">Adriamycin</a
  >
  |
  <a href="https://en.wikipedia.org/wiki/Bleomycin" class="hover:text-rose-700"
    >Bleomycin</a
  >
  |
  <a
    href="https://en.wikipedia.org/wiki/Vincristine"
    class="hover:text-rose-700">Vincristine</a
  >
  |
  <a
    href="https://en.wikipedia.org/wiki/Dacarbazine"
    class="hover:text-rose-700">Dacarbazine</a
  >
</h4>
<aside class="italic text-sm text-zinc-300 mb-2">
  <p>
    Chemotherapy regimen used in the first-line treatment of Hodgkin lymphoma.
  </p>
  <a
    href="https://www.google.com/search?q=vinblastine+shortage"
    class="text-rose-700">There is an ongoing shortage of Vinblastine</a
  > so my treatment has used Vinchristine as a substitue.
</aside>

<ul class="ml-4 mb-4">
  <li>
    <strong class="text-zinc-500">08.21 </strong>First chemotherapy infusion,
    done via intravenous injection.
  </li>
  <li>
    <strong class="text-zinc-500">09.05 </strong>Second IV infusion but I had
    significant pain in my arm due to Dacarbazine.
  </li>
  <li>
    <strong class="text-zinc-500">09.18 </strong>First infusion with the
    <a href="https://en.wikipedia.org/wiki/Port_(medical)" class="text-rose-700"
      >Port</a
    >, much easier.
  </li>
  <li><strong class="text-zinc-500">10.02 </strong>Routine infusion.</li>
  <li>
    <strong class="text-zinc-500">10.24 </strong>Infusion was delayed due to PET
    scan scheduling.
  </li>
</ul>
<h3 class="text-md font-bold hover:text-rose-700">
  <a
    href="https://lymphomahub.com/medical-information/efficacy-and-safety-of-pembro-gvd-as-second-line-therapy-for-patients-with-rr-chl"
    >Pembro-GVD</a
  >
</h3>
<h4 class="text-xs font-mono">
  <a
    href="https://en.wikipedia.org/wiki/Pembrolizumab"
    class="hover:text-rose-700">Pembrolizumab</a
  >
  |
  <a
    href="https://en.wikipedia.org/wiki/Gemcitabine"
    class="hover:text-rose-700">Gemcitabine</a
  >
  |
  <a
    href="https://en.wikipedia.org/wiki/Vinorelbine"
    class="hover:text-rose-700">Vinorelbine</a
  >
  |
  <a
    href="https://en.wikipedia.org/?title=Liposomal_doxorubicin"
    class="hover:text-rose-700">Liposomal Doxorubicin</a
  >
</h4>
<aside class="italic text-sm text-zinc-300 mb-2">
  <p>Combined immunotherapy and chemotherapy.</p>
  <p>
    It works by boosting the immune system’s anti-cancer response by blocking
    “off signals” on your <a
      href="https://en.wikipedia.org/wiki/T_cell"
      class="text-rose-700">T-cells</a
    >
  </p>
  <p>
    Treatment is 4 cycles. A cycle consists of 1 dose of Pembro-GVD, a dose of
    GVD, a week off.
  </p>
</aside>
<ul class="ml-4 mb-10">
  <li>
    <strong class="text-zinc-500">11.15 </strong>First Pembro-GVD Infusion. Bit
    of pain of Doxorubicin at the start.
  </li>
  <li>
    <strong class="text-zinc-500">11.20 </strong>GVD infusion. Really tough, and low blood count and high liver enzyme readings delayed my next chemo by a week.
  </li>
  <li>
    <strong class="text-zinc-500">12.11 </strong>Pembro-GVD infusion. ~10% lower dose to adjust for last time.
  </li>
  <li>
    <strong class="text-zinc-500">12.18 </strong>GVD infusion.
  </li>
  <li>
    <strong class="text-zinc-500">01.02 </strong>Pembro-GVD infusion.
  </li>
  <li>
    <strong class="text-zinc-500">01.08 </strong>GVD infusion.
  </li>
  <li>
    <strong class="text-zinc-500">01.22 </strong>Pembro-GVD infusion.
  </li>
  <li>
    <strong class="text-zinc-500">01.29 </strong>GVD infusion.
  </li>
</ul>

<h2 class="text-xl font-bold mb-4">Resting Heart Rate</h2>
<a href={heartImg}>
  <img
    src={heartImg}
    class="rounded-lg"
    alt="Chart showing changes in my resting heart rate as a result of DVC compression and subsequent chemo"
  />
</a>
<p class="mb-10 text-xs text-zinc-300">
  A side effect of my Superior Vena Cava compression was the elevation of my
  resting heart rate (occasionally hitting 130bpm.) You can see the immediate
  impact of chemo therapy here.
</p>

<h2 class="text-xl font-bold mb-4">PET-CT Findings</h2>
<div class="overflow-x-auto rounded-lg overflow-hidden">
  <table class="min-w-full text-xs font-mono">
    <thead>
      <tr>
        <th class="bg-zinc-900 p-2">Data Point</th>
        <th class="bg-zinc-900 p-2">2023.08.10</th>
        <th class="bg-zinc-900 p-2">2023.10.23</th>
        <th class="bg-zinc-900 p-2 hidden md:table-cell">Change</th>
        <th class="bg-zinc-900 p-2 hidden md:table-cell">Explanation</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-zinc-900">
      {#each findings as finding}
        <tr>
          <td class="p-2">{finding.dataPoint}</td>
          <td class="p-2">{finding.firstDateValue}</td>
          <td class="p-2">{finding.secondDateValue}</td>
          <td class="p-2 hidden md:table-cell">{finding.change}</td>
          <td class="p-2 hidden md:table-cell">{finding.explanation}</td>
        </tr>
        <tr class="md:hidden">
          <td colspan="4" class="p-2 text-zinc-500"
            >{finding.change} :: {finding.explanation}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>
