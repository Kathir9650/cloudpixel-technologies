import { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Phone } from 'lucide-react';
// Replace these placeholders with your real business contact details.
const EMAIL = 'hello@cloudpixel.example';
const WHATSAPP = '919650515004'; // Country code + number, digits only. Example: 919876543210
const EMAIL    = 'hello@cloudpixel.example';
const WHATSAPP = '919650515004';
export default function Contact(){
 const [form,setForm]=useState({name:'',email:'',service:'Website Development',message:''});
 const [status,setStatus]=useState('');
 const update=e=>setForm({...form,[e.target.name]:e.target.value});
 const whatsappMessage = () => `Hi CloudPixel Technologies! I would like to enquire about your services.\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nProject details: ${form.message}`;
 const sendWhatsApp = () => {
   if(!form.name.trim() || !form.email.trim() || !form.message.trim()) {
     setStatus('Please complete your name, email and project details first.');
     return;
   }
   window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(whatsappMessage())}`,'_blank','noopener,noreferrer');
 };
 const submit=async e=>{e.preventDefault();setStatus('sending');try{
   const base=import.meta.env.VITE_API_URL || '';
   const res=await fetch(`${base}/api/contact`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
   if(!res.ok) throw new Error('API unavailable');
   setStatus('success');setForm({name:'',email:'',service:'Website Development',message:''});
  }catch{
   const subject=encodeURIComponent(`Project enquiry: ${form.service}`);
   const body=encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`);
   window.location.href=`mailto:${EMAIL}?subject=${subject}&body=${body}`;
   setStatus('The enquiry could not reach the server. Your email app should open instead.');
  }};
 const waText=encodeURIComponent('Hi CloudPixel Technologies, I would like to discuss a project.');
 return <section id="contact" className="section-pad contact-section"><div className="container contact-wrap"><div className="contact-copy"><span className="eyebrow">LET'S BUILD TOGETHER</span><h2>Your next big idea starts with a <span className="gradient-text">hello.</span></h2><p>Tell us what you are planning. We'll get back to you to understand the project and suggest a practical next step.</p><div className="contact-method"><span><Mail/></span><div><small>EMAIL</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></div><div className="contact-method"><span><MessageCircle/></span><div><small>WHATSAPP</small><a href={`https://wa.me/${WHATSAPP}?text=${waText}`} target="_blank" rel="noreferrer">Chat with us on WhatsApp ↗</a></div></div><div className="contact-method"><span><MapPin/></span><div><small>WORKING WITH</small><b>Businesses in India & worldwide</b></div></div></div>
 <form className="contact-form" onSubmit={submit}><div className="form-heading"><h3>Tell us about your project</h3><p>Fill in the details, then choose how you want to send your enquiry.</p></div><label>Your name *<input required name="name" value={form.name} onChange={update} placeholder="Your name"/></label><label>Email address *<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com"/></label><label>What do you need?<select name="service" value={form.service} onChange={update}><option>Website Development</option><option>Cloud / AWS Solutions</option><option>DevOps & Automation</option><option>Maintenance & Support</option><option>Other</option></select></label><label>Project details *<textarea required rows="4" name="message" value={form.message} onChange={update} placeholder="A little about your goals, timeline and requirements..."/></label><button className="btn btn-primary form-submit" type="submit" disabled={status==='sending'}>{status==='sending'?'Sending...':<>Submit enquiry <Send size={16}/></>}</button><button className="btn whatsapp-submit" type="button" onClick={sendWhatsApp}><MessageCircle size={17}/> Send enquiry via WhatsApp</button>{status==='success'&&<p className="form-status"><CheckCircle2 size={16}/> Thanks! Your enquiry has been received.</p>}{status && status!=='sending' && status!=='success'&&<p className="form-status">{status}</p>}</form></div></section>
const methods = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: EMAIL,
    link: `mailto:${EMAIL}`,
  },
  {
    icon: MessageCircle,
    label: 'WHATSAPP',
    value: 'Chat with us on WhatsApp ↗',
    link: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi CloudPixel Technologies, I would like to discuss a project.')}`,
    external: true,
