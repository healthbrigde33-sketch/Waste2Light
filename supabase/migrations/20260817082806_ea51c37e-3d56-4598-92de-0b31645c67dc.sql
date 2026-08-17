CREATE TABLE public.contact_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organisation TEXT,
  enquiry_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_enquiries TO anon;
GRANT INSERT ON public.contact_enquiries TO authenticated;
GRANT ALL ON public.contact_enquiries TO service_role;

ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact enquiry"
  ON public.contact_enquiries FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE TABLE public.school_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  school_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT NOT NULL,
  student_count TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.school_applications TO anon;
GRANT INSERT ON public.school_applications TO authenticated;
GRANT ALL ON public.school_applications TO service_role;

ALTER TABLE public.school_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a school application"
  ON public.school_applications FOR INSERT TO anon, authenticated
  WITH CHECK (true);