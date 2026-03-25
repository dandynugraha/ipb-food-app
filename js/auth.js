async function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email, password
  });

  if(error) return alert(error.message);

  const user = data.user;

  const { data: profile } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  if(profile.role === "mahasiswa") window.location = "mahasiswa.html";
  if(profile.role === "umkm") window.location = "umkm.html";
  if(profile.role === "umum") window.location = "umum.html";
}
