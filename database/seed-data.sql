-- ADIF Portal - Sample Data
-- Language: English & Arabic

-- English Publications
INSERT INTO `Publication` (`id`, `title`, `type`, `date`, `topic`, `excerpt`, `language`, `createdAt`, `updatedAt`) VALUES
('pub-001', 'From Response to Transformation: Regional Practice Notes', 'Policy Brief', '2026', 'Systems change', 'A concise framework for aligning emergency action, recovery, research, and institutional development.', 'en', NOW(), NOW()),
('pub-002', 'Operational Access and Community Protection in Fragile Settings', 'Research Paper', '2026', 'Protection', 'Evidence-informed guidance for field teams working across humanitarian and development mandates.', 'en', NOW(), NOW()),
('pub-003', 'Training Local Institutions for Durable Recovery', 'Report', '2025', 'Capacity building', 'Lessons for strengthening public, civil society, and community systems after acute crisis.', 'en', NOW(), NOW());

-- Arabic Publications
INSERT INTO `Publication` (`id`, `title`, `type`, `date`, `topic`, `excerpt`, `language`, `createdAt`, `updatedAt`) VALUES
('pub-004', 'من الاستجابة إلى التحول: ملاحظات ممارسة إقليمية', 'Policy Brief', '2026', 'تغيير الأنظمة', 'إطار موجز لمواءمة العمل الطارئ والتعافي والبحث والتنمية المؤسسية.', 'ar', NOW(), NOW()),
('pub-005', 'الوصول التشغيلي وحماية المجتمع في البيئات الهشة', 'Research Paper', '2026', 'الحماية', 'إرشادات قائمة على الأدلة للفرق الميدانية العاملة عبر التفويضات الإنسانية والتنموية.', 'ar', NOW(), NOW()),
('pub-006', 'تدريب المؤسسات المحلية من أجل تعاف مستدام', 'Report', '2025', 'بناء القدرات', 'دروس لتعزيز أنظمة القطاع العام والمجتمع المدني والمجتمعات بعد الأزمات الحادة.', 'ar', NOW(), NOW());

-- English Media Items
INSERT INTO `MediaItem` (`id`, `title`, `slug`, `type`, `excerpt`, `publishedAt`, `image`, `language`, `createdAt`, `updatedAt`) VALUES
('media-001', 'ADIF expands regional training hub', 'regional-training-hub', 'story', 'A new training hub supports local institutions and accelerates recovery pathways.', '2026-04-04', NULL, 'en', NOW(), NOW()),
('media-002', 'DOORS research series launches', 'doors-research-series', 'story', 'A field-focused research series documents systems change across the region.', '2026-03-11', NULL, 'en', NOW(), NOW()),
('media-003', 'ADIF field update video: readiness in practice', 'field-update-readiness', 'video', 'A short video on emergency readiness and community protection operations.', '2026-02-27', NULL, 'en', NOW(), NOW());

-- Arabic Media Items
INSERT INTO `MediaItem` (`id`, `title`, `slug`, `type`, `excerpt`, `publishedAt`, `image`, `language`, `createdAt`, `updatedAt`) VALUES
('media-004', 'أديف يعزز مركز التدريب الإقليمي', 'regional-training-hub-ar', 'story', 'يدعم مركز التدريب المحلي المؤسسات ويعزز مسارات التعافي.', '2026-04-04', NULL, 'ar', NOW(), NOW()),
('media-005', 'سلسلة أبحاث DOORS تنطلق', 'doors-research-series-ar', 'story', 'سلسلة بحث ميداني تستعرض تغيير الأنظمة في الإقليم.', '2026-03-11', NULL, 'ar', NOW(), NOW());
