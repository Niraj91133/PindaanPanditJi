"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Users,
  Calendar,
  Phone,
  MessageCircle,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Plus,
  Trash2,
  Lock,
  LogOut,
  ExternalLink,
  ChevronRight,
  Sparkles,
  MapPin,
  RefreshCw,
  Home
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface BookingRecord {
  id: string;
  name: string;
  phone: string;
  city: string;
  date: string;
  service: string;
  members: string;
  gotra: string;
  notes: string;
  status: "New" | "Contacted" | "Confirmed" | "Completed";
  createdAt: string;
}

const SEED_BOOKINGS: BookingRecord[] = [
  {
    id: "BK-17902401",
    name: "राजेश कुमार शर्मा",
    phone: "9811223344",
    city: "नई दिल्ली (New Delhi)",
    date: "2026-10-12",
    service: "पिंडदान (Gaya Ji Pind Daan)",
    members: "3-4",
    gotra: "भारद्वाज",
    notes: "माता-पिता एवं पूर्वजों का संपूर्ण त्रिवेदी पिंडदान। प्रातःकालीन समय चाहिए।",
    status: "New",
    createdAt: "2026-09-24T10:30:00.000Z",
  },
  {
    id: "BK-17902402",
    name: "অনিরুদ্ধ ব্যানার্জী (Aniruddh Banerjee)",
    phone: "9830112233",
    city: "কলকাতা (Kolkata)",
    date: "2026-10-18",
    service: "त्रिपिंडी श्राद्ध (Tripindi Shraddha)",
    members: "2-3",
    gotra: "শাণ্ডিল্য (Shandilya)",
    notes: "পিতৃ দোষ শান্তির জন্য বিশেষ বৈদিক পূজা এবং ফল্গু নদীতে তর্পণ।",
    status: "Contacted",
    createdAt: "2026-09-23T14:20:00.000Z",
  },
  {
    id: "BK-17902403",
    name: "सुरेश नारायण जोशी",
    phone: "9820556677",
    city: "मुंबई (Mumbai)",
    date: "2026-10-25",
    service: "नारायण बलि (Narayan Bali)",
    members: "2",
    gotra: "कश्यप",
    notes: "विशेष नारायण बलि विधान हेतु आवश्यक सामग्री एवं व्यवस्था की जानकारी।",
    status: "Confirmed",
    createdAt: "2026-09-22T11:15:00.000Z",
  },
  {
    id: "BK-17902404",
    name: "विजय प्रकाश वर्मा",
    phone: "9431889900",
    city: "पटना (Patna)",
    date: "2026-09-20",
    service: "वार्षिक श्राद्ध (Annual Shraddha)",
    members: "1",
    gotra: "वत्स",
    notes: "पिताजी की पुण्यतिथि पर विष्णुपद मंदिर में श्राद्ध एवं ब्राह्मण भोजन।",
    status: "Completed",
    createdAt: "2026-09-18T09:00:00.000Z",
  },
];

export default function AdminPortalPage() {
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");

  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  // New Booking Form state in admin
  const [newBooking, setNewBooking] = useState({
    name: "",
    phone: "",
    city: "",
    date: "",
    service: "पिंडदान (Gaya Ji Pind Daan)",
    members: "2-3",
    gotra: "",
    notes: "",
  });

  // Check auth session
  useEffect(() => {
    setMounted(true);
    const auth = sessionStorage.getItem("pindaan_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Load bookings
  const loadBookings = () => {
    try {
      const stored = localStorage.getItem("pindaan_bookings");
      if (stored) {
        setBookings(JSON.parse(stored));
      } else {
        localStorage.setItem("pindaan_bookings", JSON.stringify(SEED_BOOKINGS));
        setBookings(SEED_BOOKINGS);
      }
    } catch (e) {
      setBookings(SEED_BOOKINGS);
    }
  };

  useEffect(() => {
    loadBookings();
    const handleUpdate = () => loadBookings();
    window.addEventListener("pindaan_bookings_updated", handleUpdate);
    return () => window.removeEventListener("pindaan_bookings_updated", handleUpdate);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === "1234" || pinInput.toLowerCase() === "panditji" || pinInput === "pindaan2026") {
      setIsAuthenticated(true);
      sessionStorage.setItem("pindaan_admin_auth", "true");
      setPinError("");
    } else {
      setPinError("गलत पिन/पासवर्ड। कृपया सही पिन (1234) दर्ज करें।");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("pindaan_admin_auth");
  };

  const updateStatus = (id: string, newStatus: BookingRecord["status"]) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status: newStatus } : b));
    setBookings(updated);
    localStorage.setItem("pindaan_bookings", JSON.stringify(updated));
  };

  const deleteBooking = (id: string) => {
    if (confirm("क्या आप वाकई इस यजमान रिकॉर्ड को हटाना चाहते हैं?")) {
      const updated = bookings.filter((b) => b.id !== id);
      setBookings(updated);
      localStorage.setItem("pindaan_bookings", JSON.stringify(updated));
    }
  };

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBooking.name || !newBooking.phone) {
      alert("नाम और फोन नंबर अनिवार्य हैं।");
      return;
    }
    const item: BookingRecord = {
      id: `BK-${Date.now()}`,
      ...newBooking,
      status: "New",
      createdAt: new Date().toISOString(),
    };
    const updated = [item, ...bookings];
    setBookings(updated);
    localStorage.setItem("pindaan_bookings", JSON.stringify(updated));
    setShowAddModal(false);
    setNewBooking({
      name: "",
      phone: "",
      city: "",
      date: "",
      service: "पिंडदान (Gaya Ji Pind Daan)",
      members: "2-3",
      gotra: "",
      notes: "",
    });
  };

  const openDevoteeWhatsApp = (b: BookingRecord) => {
    const cleanPhone = b.phone.replace(/[^0-9]/g, "");
    const fullPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
    const replyText = `🙏 जय श्री हरि / सादर प्रणाम ${b.name} जी।
गया जी में ${b.service} के संबंध में आपका परामर्श अनुरोध प्राप्त हुआ।
मैं पं. आनंद कुमार गुपुत (गया जी तीर्थ पुरोहित) आपकी सेवा एवं मार्गदर्शन हेतु उपलब्ध हूँ।
आपकी वांछित तिथि: ${b.date || "शीघ्र"}
कृपया बताएं कि क्या हम इस पर विस्तार से चर्चा कर सकते हैं?`;
    window.open(`https://wa.me/${fullPhone}?text=${encodeURIComponent(replyText)}`, "_blank");
  };

  // Filtered list
  const filtered = bookings.filter((b) => {
    const matchesStatus = filterStatus === "All" || b.status === filterStatus;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      b.name.toLowerCase().includes(query) ||
      b.phone.includes(query) ||
      b.city.toLowerCase().includes(query) ||
      b.gotra.toLowerCase().includes(query) ||
      b.service.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  });

  // Metrics
  const totalCount = bookings.length;
  const newCount = bookings.filter((b) => b.status === "New").length;
  const confirmedCount = bookings.filter((b) => b.status === "Confirmed").length;
  const completedCount = bookings.filter((b) => b.status === "Completed").length;

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-secondary-text text-sm font-serif">डैशबोर्ड लोड हो रहा है...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-surface-light rounded-2xl border border-border-subtle p-8 shadow-card">
          <div className="text-center mb-8">
            <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-accent-gold shadow-md mb-3">
              <Image
                src="/images/pandit-ji.jpg"
                alt="Pt. Anand Kumar Guput"
                fill
                className="object-cover object-top"
              />
            </div>
            <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase block">
              PindaanPanditJi Admin
            </span>
            <h1 className="text-2xl font-bold font-serif text-primary-text mt-1">
              तीर्थ पुरोहित एडमिन पोर्टल
            </h1>
            <p className="text-xs text-secondary-text mt-1">
              पं. आनंद कुमार गुपुत जी का यजमान प्रबंधन डैशबोर्ड
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-primary-text uppercase tracking-wider mb-1.5">
                सुरक्षा पिन / पासवर्ड दर्ज करें
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-secondary-text absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="पिन दर्ज करें (उदा. 1234)"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-background border border-border-subtle rounded-btn text-sm focus:outline-none focus:border-accent-gold"
                />
              </div>
              {pinError && <p className="text-xs text-rose-600 mt-1.5">{pinError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-accent-gold hover:bg-accent-goldDark text-white font-semibold text-sm rounded-btn transition-colors shadow-sm"
            >
              डैशबोर्ड में प्रवेश करें (Log In)
            </button>

            <button
              type="button"
              onClick={() => {
                setIsAuthenticated(true);
                sessionStorage.setItem("pindaan_admin_auth", "true");
              }}
              className="w-full py-2 text-xs text-secondary-text hover:text-primary-text underline text-center block"
            >
              Demo Access (Click to view dashboard directly)
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-border-subtle text-center">
            <Link href="/" className="text-xs text-accent-gold hover:underline inline-flex items-center space-x-1">
              <Home className="w-3.5 h-3.5" />
              <span>मुख्य वेबसाइट पर वापस जाएं</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Admin Top Navigation */}
      <div className="bg-surface-light border-b border-border-subtle sticky top-0 z-30">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-accent-gold shadow-sm flex-shrink-0">
                <Image
                  src="/images/pandit-ji.jpg"
                  alt="Pt. Anand Kumar Guput"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-sm text-primary-text flex items-center space-x-1.5">
                  <span>पं. आनंद कुमार गुपुत</span>
                  <span className="text-[10px] bg-accent-goldSoft text-accent-gold font-sans font-semibold px-2 py-0.5 rounded">
                    Admin
                  </span>
                </div>
                <div className="text-[11px] text-secondary-text">
                  गया जी तीर्थ पुरोहित प्रबंधन पोर्टल
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Link
                href="/"
                target="_blank"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-btn bg-[#F4EFE6] text-primary-text hover:bg-accent-goldSoft border border-border-subtle transition-colors"
              >
                <span>लाइव वेबसाइट देखें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center space-x-1.5 text-xs text-secondary-text hover:text-rose-700 p-2"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">लॉग आउट</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom pt-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-surface-light rounded-xl p-5 border border-border-subtle shadow-subtle">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary-text">कुल यजमान अनुरोध</span>
              <Users className="w-4 h-4 text-accent-gold" />
            </div>
            <div className="text-2xl font-bold font-serif text-primary-text mt-2">{totalCount}</div>
            <div className="text-[11px] text-secondary-text mt-0.5">समस्त पंजीकृत इंक्वायरी</div>
          </div>

          <div className="bg-surface-light rounded-xl p-5 border border-border-subtle shadow-subtle">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">नए अनुरोध (New)</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl font-bold font-serif text-amber-900 mt-2">{newCount}</div>
            <div className="text-[11px] text-secondary-text mt-0.5">संवाद हेतु प्रतीक्षारत</div>
          </div>

          <div className="bg-surface-light rounded-xl p-5 border border-border-subtle shadow-subtle">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">स्वीकृत (Confirmed)</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold font-serif text-emerald-900 mt-2">{confirmedCount}</div>
            <div className="text-[11px] text-secondary-text mt-0.5">आगामी तिथियां निर्धारित</div>
          </div>

          <div className="bg-surface-light rounded-xl p-5 border border-border-subtle shadow-subtle">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-800">संपन्न (Completed)</span>
              <Sparkles className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl font-bold font-serif text-blue-900 mt-2">{completedCount}</div>
            <div className="text-[11px] text-secondary-text mt-0.5">सफल त्रिवेदी अनुष्ठान</div>
          </div>
        </div>

        {/* Action & Filter Bar */}
        <div className="bg-surface-light rounded-2xl border border-border-subtle p-5 shadow-subtle mb-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-secondary-text absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="यजमान का नाम, फोन, शहर, या गोत्र खोजें..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-background border border-border-subtle rounded-btn text-xs text-primary-text focus:outline-none focus:border-accent-gold"
              />
            </div>

            {/* Filter Tabs & Add Button */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-lg border border-border-subtle bg-background p-1 text-xs">
                {["All", "New", "Contacted", "Confirmed", "Completed"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setFilterStatus(st)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      filterStatus === st
                        ? "bg-accent-gold text-white font-semibold"
                        : "text-secondary-text hover:text-primary-text"
                    }`}
                  >
                    {st === "All" ? "सभी" : st}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-accent-gold hover:bg-accent-goldDark text-white text-xs font-semibold rounded-btn transition-colors shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>नया यजमान जोड़ें</span>
              </button>
            </div>

          </div>
        </div>

        {/* Bookings Table / Cards */}
        <div className="bg-surface-light rounded-2xl border border-border-subtle shadow-card overflow-hidden">
          <div className="px-6 py-4 border-b border-border-subtle flex items-center justify-between">
            <h2 className="font-serif font-bold text-lg text-primary-text">
              यजमान सूची ({filtered.length})
            </h2>
            <button
              onClick={loadBookings}
              className="text-xs text-secondary-text hover:text-accent-gold flex items-center space-x-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>रिफ्रेश</span>
            </button>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-12 px-4 text-secondary-text text-sm">
              कोई यजमान रिकॉर्ड नहीं मिला।
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-background/80 text-secondary-text uppercase tracking-wider text-[10px] border-b border-border-subtle">
                  <tr>
                    <th className="py-3 px-4">यजमान / विवरण</th>
                    <th className="py-3 px-4">स्थान / शहर</th>
                    <th className="py-3 px-4">वांछित तिथि / पूजा</th>
                    <th className="py-3 px-4">गोत्र / सदस्य</th>
                    <th className="py-3 px-4">स्थिति (Status)</th>
                    <th className="py-3 px-4 text-right">त्वरित कार्य (Actions)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  {filtered.map((b) => (
                    <tr key={b.id} className="hover:bg-background/50 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-serif font-bold text-sm text-primary-text">{b.name}</div>
                        <a href={`tel:${b.phone}`} className="text-xs text-accent-gold hover:underline flex items-center space-x-1 mt-0.5">
                          <Phone className="w-3 h-3" />
                          <span>{b.phone}</span>
                        </a>
                        {b.notes && <div className="text-[11px] text-secondary-text mt-1 max-w-xs italic line-clamp-1">{b.notes}</div>}
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="text-primary-text font-medium flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-secondary-text" />
                          <span>{b.city || "—"}</span>
                        </div>
                        <div className="text-[10px] text-secondary-text mt-0.5">
                          दर्ज: {new Date(b.createdAt).toLocaleDateString("hi-IN")}
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-primary-text flex items-center space-x-1">
                          <Calendar className="w-3 h-3 text-accent-gold" />
                          <span>{b.date || "शीघ्र परामर्श"}</span>
                        </div>
                        <div className="text-[11px] text-secondary-text mt-0.5">{b.service}</div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="text-primary-text"><strong>गोत्र:</strong> {b.gotra || "कश्यप / सामान्य"}</div>
                        <div className="text-[11px] text-secondary-text mt-0.5"><strong>परिजनों की संख्या:</strong> {b.members}</div>
                      </td>

                      <td className="py-3.5 px-4">
                        <select
                          value={b.status}
                          onChange={(e) => updateStatus(b.id, e.target.value as any)}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border focus:outline-none ${
                            b.status === "New"
                              ? "bg-amber-100 text-amber-900 border-amber-300"
                              : b.status === "Contacted"
                              ? "bg-blue-100 text-blue-900 border-blue-300"
                              : b.status === "Confirmed"
                              ? "bg-emerald-100 text-emerald-900 border-emerald-300"
                              : "bg-purple-100 text-purple-900 border-purple-300"
                          }`}
                        >
                          <option value="New">नया (New)</option>
                          <option value="Contacted">संपर्क किया (Contacted)</option>
                          <option value="Confirmed">पुष्टि (Confirmed)</option>
                          <option value="Completed">संपन्न (Completed)</option>
                        </select>
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => openDevoteeWhatsApp(b)}
                            className="inline-flex items-center space-x-1 px-2.5 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-btn text-xs font-medium transition-colors shadow-xs"
                            title="Send WhatsApp Message as Pt. Anand Kumar Guput"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">WhatsApp</span>
                          </button>
                          <button
                            onClick={() => deleteBooking(b.id)}
                            className="p-1.5 text-secondary-text hover:text-rose-600 rounded-btn hover:bg-rose-50 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Manual Add Devotee Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-surface-light rounded-2xl border border-border-subtle p-6 sm:p-8 max-w-lg w-full shadow-2xl">
            <h3 className="text-xl font-bold font-serif text-primary-text mb-4">
              नया यजमान विवरण दर्ज करें
            </h3>
            <form onSubmit={handleCreateBooking} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-secondary-text mb-1">नाम *</label>
                  <input
                    type="text"
                    required
                    placeholder="यजमान का नाम"
                    value={newBooking.name}
                    onChange={(e) => setNewBooking({ ...newBooking, name: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border-subtle rounded-btn text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-secondary-text mb-1">फोन नंबर *</label>
                  <input
                    type="tel"
                    required
                    placeholder="उदा. 9876543210"
                    value={newBooking.phone}
                    onChange={(e) => setNewBooking({ ...newBooking, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border-subtle rounded-btn text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-secondary-text mb-1">शहर</label>
                  <input
                    type="text"
                    placeholder="शहर / राज्य"
                    value={newBooking.city}
                    onChange={(e) => setNewBooking({ ...newBooking, city: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border-subtle rounded-btn text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-secondary-text mb-1">तिथि</label>
                  <input
                    type="date"
                    value={newBooking.date}
                    onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border-subtle rounded-btn text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-secondary-text mb-1">पूजा / विधि</label>
                  <select
                    value={newBooking.service}
                    onChange={(e) => setNewBooking({ ...newBooking, service: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border-subtle rounded-btn text-xs"
                  >
                    <option value="पिंडदान (Gaya Ji Pind Daan)">पिंडदान</option>
                    <option value="त्रिपिंडी श्राद्ध (Tripindi Shraddha)">त्रिपिंडी श्राद्ध</option>
                    <option value="नारायण बलि (Narayan Bali)">नारायण बलि</option>
                    <option value="वार्षिक श्राद्ध (Annual Shraddha)">वार्षिक श्राद्ध</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-secondary-text mb-1">गोत्र</label>
                  <input
                    type="text"
                    placeholder="गोत्र"
                    value={newBooking.gotra}
                    onChange={(e) => setNewBooking({ ...newBooking, gotra: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border-subtle rounded-btn text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-secondary-text mb-1">टिप्पणी / विशेष नोट</label>
                <textarea
                  rows={2}
                  placeholder="आवास, मुहूर्त या विशेष व्यवस्था..."
                  value={newBooking.notes}
                  onChange={(e) => setNewBooking({ ...newBooking, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-border-subtle rounded-btn text-xs"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-border-subtle rounded-btn text-xs text-secondary-text hover:bg-background"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent-gold hover:bg-accent-goldDark text-white text-xs font-semibold rounded-btn"
                >
                  सुरक्षित करें (Save)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
