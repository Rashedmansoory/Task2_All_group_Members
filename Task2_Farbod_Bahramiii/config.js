const SUPABASE_URL = "https://geeezsdmhfvtodgsgwll.supabase.co";

// کلید کامل Publishable را بین کوتیشن‌ها قرار بده
const SUPABASE_KEY = "کلید کامل sb_publishable خودت";

const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
