import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const chanceAreas = [
  ["العمليات الإنسانية", "تنفيذ ميداني منسق للمجتمعات المتأثرة بالكوارث والنزاعات والنزوح والهشاشة وتعطل الخدمات."],
  ["السلام والعدالة الانتقالية", "دعم بناء السلام والحكم الرشيد والمصالحة والمجتمعات الآمنة والتعافي القائم على الحقوق بعد النزاعات."],
  ["قيادة النساء والشباب", "برامج توسع الوصول إلى التعليم والقيادة وأسواق العمل وصنع القرار وبناء السلام."],
  ["التعافي وإعادة الإعمار", "مشاريع ذات أثر سريع ومتوسط في المأوى والمياه والحماية وإعادة الإدماج واستقرار المجتمع."],
  ["سبل العيش والأمن الغذائي", "تدخلات اقتصادية مجتمعية في الزراعة والأمن الغذائي والمهارات وتعافي الأسواق المحلية."],
  ["المناخ والحوكمة البيئية", "التكيف المجتمعي وحماية الموارد الطبيعية والحفاظ البيئي والممارسة المحلية المستجيبة للمناخ."],
  ["التكنولوجيا والابتكار", "حلول رقمية ومبتكرة لتحسين الوصول إلى التعليم والرعاية الصحية والمعلومات وفعالية البرامج."],
  ["الحماية والتعليم وحقوق الإنسان", "أنظمة حماية للأطفال والنساء والشباب والنازحين والمجتمعات المتأثرة بالعنف."]
];

const chanceGroups = [
  "النساء والفتيات",
  "الشباب",
  "الأطفال في الطوارئ والنزوح",
  "الأشخاص ذوو الإعاقة",
  "كبار السن",
  "المجتمعات الريفية والمهمشة",
  "اللاجئون والنازحون والعائدون",
  "ضحايا النزاع والعنف القائم على النوع الاجتماعي"
];

const chanceOffices = [
  "مكتب الحماية والتعليم وحقوق الإنسان",
  "مكتب الصحة والتغذية",
  "مكتب الأمن الغذائي",
  "مكتب الطوارئ والاستجابة الإنسانية",
  "مكتب التعافي وإعادة الإعمار",
  "مكتب التنمية والتنمية المستدامة"
];

const doorsStructure = [
  ["البوصلة", "مكتب التخطيط الاستراتيجي المسؤول عن الاتجاه والأطر السياساتية والتنسيق والمواءمة الاستراتيجية."],
  ["مركز المعرفة", "مكتب الدراسات والبحث الذي ينتج دراسات سياقية قائمة على الأدلة وتحليلات وتوصيات وموارد فكرية."],
  ["الذراع التنفيذي", "مكتب بناء القدرات الذي يصمم وينفذ التدريب والمناهج والأدلة والورش والبرامج العملية."],
  ["وحدة الجودة والأثر", "مكتب المتابعة والتقييم الذي يضمن جودة البرامج والمساءلة والمؤشرات والتعلم والتحسين المستمر."]
];

const doorsPrograms = [
  "برنامج تطوير القادة الشباب",
  "تدريب المدربين",
  "المعرفة الرقمية لرواد الأعمال",
  "برنامج قيادة النساء",
  "برنامج إدارة المشاريع المجتمعية",
  "منصة التفاوض والحوار المجتمعي",
  "مبادرة السلام من الداخل",
  "منصة منح DOORS",
  "برامج الثقافة والفنون والتراث وإبداع الأطفال"
];

export default function ArabicChanceDoorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="CHANCE و DOORS"
        title="التنفيذ والمعرفة كنظام أثر واحد."
        description="تنفذ CHANCE برامج العمل الإنساني والسلام والتعافي والتنمية. وتنتج DOORS المعرفة وتبني القدرات وتدعم المؤسسات وتقيس الأثر."
      />

      <section id="chance" className="scroll-mt-24 py-24">
        <div className="container">
          <SectionHeading
            eyebrow="CHANCE"
            title="مجتمع للأمل والتقدم والمشاركة المدنية الجديدة."
            text="CHANCE هو ذراع أديف التنفيذي للسلام والعدالة والاستجابة الإنسانية والتعافي وإعادة الإعمار والتنمية المستدامة، مع اعتبار السودان أولوية استراتيجية."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {chanceAreas.map(([title, text]) => (
              <Card key={title}>
                <h2 className="text-2xl font-black text-navy">{title}</h2>
                <p className="mt-4 leading-7 text-slateText">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="تركيز CHANCE الاستراتيجي"
            title="تركيز على السودان واتصال إقليمي."
            text="رغم أن CHANCE تعمل إقليميا، يبقى السودان أولوية استراتيجية بسبب النزاع وتحديات الانتقال والنزوح وانعدام الأمن الغذائي والهشاشة متعددة الأبعاد."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["الرؤية", "مجتمعات آمنة وعادلة وقادرة على الصمود وبناء مستقبل مستدام للجميع."],
              ["الرسالة", "تعزيز الكرامة والعدالة الاجتماعية عبر السلام وحقوق الإنسان والتنمية وبناء القدرات والدعم المجتمعي والمساعدة الإنسانية."],
              ["الطموح", "أن تصبح قوة إقليمية للتغيير من خلال حلول مبتكرة وشراكات فعالة وبرامج تحدث فرقا حقيقيا."],
              ["النهج", "جسر بين الفاعلين المحليين والإقليميين والدوليين عبر برامج قائمة على الأدلة وشراكات قوية وتقييم راسخ."]
            ].map(([title, text]) => (
              <Card key={title}>
                <h2 className="text-2xl font-black text-navy">{title}</h2>
                <p className="mt-4 leading-7 text-slateText">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="فئات CHANCE المستهدفة"
              title="المجتمعات والمستفيدون ذوو الأولوية."
              text="تركز CHANCE على الفئات الأكثر تأثرا بالأزمات والإقصاء والنزوح وضعف الأنظمة المحلية."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {chanceGroups.map((group) => (
                <div key={group} className="rounded-md border border-navy/10 bg-white px-4 py-3 text-sm font-bold text-navy">
                  {group}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="مكاتب CHANCE"
              title="مكاتب قطاعية للتنفيذ المتكامل."
              text="تنظم CHANCE التنفيذ الفني عبر مكاتب تربط الحماية والصحة والأمن الغذائي والطوارئ والتعافي والتنمية المستدامة."
            />
            <div className="mt-8 grid gap-3">
              {chanceOffices.map((office) => (
                <Card key={office} className="p-5">
                  <h3 className="text-lg font-black text-navy">{office}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="doors" className="scroll-mt-24 bg-navy py-24 text-white">
        <div className="container">
          <SectionHeading
            eyebrow="DOORS"
            title="مركز للمعرفة والقيادة والتحول المؤسسي."
            text="تعمل DOORS عند تقاطع التدريب وبناء القدرات والبحث والدراسات والاستشارات والدفاع عن حقوق الإنسان والتعليم والثقافة وبناء السلام."
            tone="dark"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {doorsStructure.map(([title, text]) => (
              <Card key={title}>
                <h2 className="text-2xl font-black text-navy">{title}</h2>
                <p className="mt-4 leading-7 text-slateText">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="أهداف DOORS الاستراتيجية"
            title="معرفة مرتبطة بالواقع العملي."
            text="تطور DOORS القيادة المسؤولة، وتنتج بحوثا حول قضايا مجتمعية حرجة، وتقدم دعما استشاريا، وتنفذ تدريبا عالي الجودة، وتعزز الحقوق والسلام، وتولد حلولا عملية."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "تطوير قيادة فعالة ومسؤولة",
              "إنتاج بحوث ودراسات حول قضايا مجتمعية حرجة",
              "تقديم خدمات استشارية لصنع قرار مستنير",
              "تنفيذ برامج تدريب وتوعية عالية الجودة",
              "تعزيز حقوق الإنسان والمواطنة والسلام",
              "بناء وعي جمعي شامل ومستدام"
            ].map((objective) => (
              <div key={objective} className="rounded-md border border-navy/10 bg-white px-4 py-4 text-sm font-bold leading-6 text-navy">
                {objective}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <SectionHeading
            eyebrow="برامج وأنشطة DOORS"
            title="التدريب والبحث والاستشارات والحقوق وبناء السلام والتعليم والثقافة."
            text="تعمل DOORS من خلال مسارات عملية تجمع تطوير القيادة، والمعرفة التطبيقية، والدعم المؤسسي، والوعي العام، والصمود النفسي الاجتماعي، والمنح، والعمل الثقافي."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {doorsPrograms.map((program) => (
              <Card key={program} className="p-5">
                <h3 className="text-lg font-black leading-snug text-navy">{program}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
