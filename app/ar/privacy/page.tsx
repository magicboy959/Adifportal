import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "سياسة الخصوصية",
  "سياسة الخصوصية لمنظمة أديف وكيفية حماية معلوماتك الشخصية.",
  "/ar/privacy"
);

export default function PrivacyPageAr() {
  return (
    <>
      <PageHeader
        eyebrow="سياسة الخصوصية"
        title="خصوصيتك مهمة لنا."
        description="تعرف على كيفية قيام منظمة أديف بجمع واستخدام وحماية معلوماتك الشخصية."
      />
      
      <section dir="rtl" className="py-24">
        <div className="container max-w-3xl space-y-12">
          <div className="prose prose-navy max-w-none">
            <h2 className="text-2xl font-black text-navy">1. المقدمة</h2>
            <p className="mt-4 leading-7 text-slateText">
              منظمة أديف (&quot;نحن&quot; أو &quot;المنظمة&quot;) ملتزمة بحماية خصوصيتك. تشرح هذه السياسة كيفية قيامنا بجمع واستخدام والكشف عن معلوماتك الشخصية والتعامل معها بخلاف ذلك.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">2. المعلومات التي نجمعها</h2>
            <p className="mt-4 leading-7 text-slateText">
              قد نجمع معلومات شخصية منك بالطرق التالية:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li><strong>نماذج الاتصال:</strong> عند تقديم استفسارات من خلال نموذج الاتصال الخاص بنا، نجمع اسمك والبريد الإلكتروني والجهة والرسالة.</li>
              <li><strong>التبرعات:</strong> إذا قدمت تبرعاً، نجمع معلومات الدفع والاتصال اللازمة لمعالجة مساهمتك.</li>
              <li><strong>الاشتراكات:</strong> عند الاشتراك في رسائلنا الإخبارية أو التحديثات، نجمع عنوان بريدك الإلكتروني وتفضيلاتك.</li>
              <li><strong>استخدام الموقع:</strong> نجمع تلقائياً معلومات عن جهازك ونوع المتصفح وعنوان IP والصفحات التي تمت زيارتها باستخدام ملفات تعريف الارتباط والتقنيات المشابهة.</li>
              <li><strong>استفسارات الشراكة:</strong> المعلومات التي تقدمها عند إبداء اهتمامك بالشراكة معنا.</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">3. كيفية استخدام معلوماتك</h2>
            <p className="mt-4 leading-7 text-slateText">
              نستخدم المعلومات التي نجمعها للأغراض التالية:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li>للرد على استفسارات واتصالاتك وتقديم دعم العملاء</li>
              <li>لمعالجة التبرعات وإرسال الإيصالات</li>
              <li>لإرسال رسائل إخبارية وتحديثات ومواد ترويجية (بموافقتك)</li>
              <li>لتحسين موقعنا وخدماتنا</li>
              <li>لتحليل أنماط واتجاهات الاستخدام</li>
              <li>للامتثال للمتطلبات القانونية والتنظيمية</li>
              <li>لمنع الاحتيال وتعزيز الأمان</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">4. الأساس القانوني للمعالجة</h2>
            <p className="mt-4 leading-7 text-slateText">
              نعالج معلوماتك الشخصية على أساس الأسباب القانونية التالية:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li>موافقتك الصريحة</li>
              <li>تنفيذ الالتزامات التعاقدية</li>
              <li>الامتثال للالتزامات القانونية</li>
              <li>حماية المصالح الحيوية</li>
              <li>المصالح المشروعة التي نسعى إليها أو أطراف ثالثة</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">5. مشاركة المعلومات</h2>
            <p className="mt-4 leading-7 text-slateText">
              لا نبيع أو نتاجر بمعلوماتك الشخصية أو ننقلها إلى أطراف ثالثة إلا في الحالات التالية:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li>لمزودي الخدمات الذين يساعدون في عملياتنا (بموجب اتفاقيات السرية)</li>
              <li>عند الضرورة بموجب القانون أو العملية القانونية</li>
              <li>لحماية حقوقنا أو خصوصيتنا أو سلامتنا أو ممتلكاتنا</li>
              <li>بموافقتك الصريحة</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">6. أمان البيانات</h2>
            <p className="mt-4 leading-7 text-slateText">
              نطبق تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو الحذف. ومع ذلك، فإن أي طريقة نقل عبر الإنترنت ليست آمنة بنسبة 100 في المائة.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">7. حقوقك</h2>
            <p className="mt-4 leading-7 text-slateText">
              اعتماداً على موقعك الجغرافي، قد تكون لديك الحقوق التالية:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li>الحق في الوصول إلى معلوماتك الشخصية</li>
              <li>الحق في تصحيح البيانات غير الدقيقة</li>
              <li>الحق في طلب حذف بيانات</li>
              <li>الحق في تقييد المعالجة</li>
              <li>الحق في نقل البيانات</li>
              <li>الحق في سحب الموافقة</li>
              <li>الحق في تقديم شكوى إلى سلطة إشرافية</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">8. ملفات تعريف الارتباط والتتبع</h2>
            <p className="mt-4 leading-7 text-slateText">
              يستخدم موقعنا ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتحسين تجربتك. يمكنك التحكم في تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">9. خصوصية الأطفال</h2>
            <p className="mt-4 leading-7 text-slateText">
              خدماتنا ليست موجهة للأفراد الذين تقل أعمارهم عن 13 سنة. نحن لا نجمع عن علم معلومات شخصية من الأطفال. إذا اكتشفنا أننا جمعنا معلومات شخصية من طفل بدون موافقة الوالدين، سنتخذ خطوات لحذف هذه المعلومات.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">10. الاحتفاظ بالبيانات</h2>
            <p className="mt-4 leading-7 text-slateText">
              نحتفظ بمعلوماتك الشخصية طالما لزم الأمر لتحقيق الأغراض المذكورة في هذه السياسة، أو كما يتطلبه القانون. عندما لا تكون المعلومات مطلوبة، نقوم بحذفها أو إلغاء تحديد هويتها بشكل آمن.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">11. نقل البيانات الدولي</h2>
            <p className="mt-4 leading-7 text-slateText">
              إذا كنت موجوداً خارج اختصاصنا القضائي وقدمت معلومات لنا، يرجى ملاحظة أن معلوماتك قد تنقل وتعالج في دول قد لا تتمتع بنفس قوانين حماية البيانات في بلدك الأصلي. بتقديمك للمعلومات، فإنك توافق على هذه النقل.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">12. روابط الجهات الخارجية</h2>
            <p className="mt-4 leading-7 text-slateText">
              قد يحتوي موقعنا على روابط لمواقع ويب تابعة لجهات خارجية. نحن غير مسؤولين عن ممارسات الخصوصية لهذه المواقع الخارجية. ننصحك بمراجعة سياسات الخصوصية الخاصة بهم قبل تقديم أي معلومات شخصية.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">13. تغييرات السياسة</h2>
            <p className="mt-4 leading-7 text-slateText">
              قد نحدث هذه السياسة من وقت لآخر. سنخطرك بأي تغييرات مهمة بنشر السياسة الجديدة على موقعنا وتحديث تاريخ السريان أدناه.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">14. اتصل بنا</h2>
            <p className="mt-4 leading-7 text-slateText">
              إذا كان لديك أي أسئلة أو استفسارات حول هذه السياسة أو ممارسات الخصوصية الخاصة بنا، يرجى الاتصال بنا على:
            </p>
            <div className="mt-6 space-y-2 text-slateText">
              <p><strong>منظمة أديف</strong></p>
              <p>البريد الإلكتروني: info@adiforganization.org</p>
              <p>العنوان: أوغندا - كمبالا - أروى بارك بلازا - C3-490</p>
              <p>الهاتف: +256794844444 / +256761610000</p>
            </div>

            <p className="mt-12 text-sm text-slateText">
              <strong>تاريخ السريان:</strong> 1 يناير 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
