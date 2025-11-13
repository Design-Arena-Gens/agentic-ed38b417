"use client";

import { useMemo, useState } from "react";
import {
  Banner,
  Badge,
  BottomNav,
  BottomSheet,
  Button,
  CartItemCard,
  ChefCard,
  CuisineMatrix,
  EmptyState,
  Hero,
  HighlightsGrid,
  MealCard,
  Modal,
  OrderTimeline,
  OtpInput,
  ReviewCard,
  PhoneNumberInput,
  QuantityStepper,
  RatingStars,
  SearchBar,
  SectionHeader,
  Switch,
  TagButton,
  TextField,
  Toast,
  TopNav
} from "@/components";

const mealImages = [
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80"
];

const chefImages = [
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80"
];

export default function Page() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("1234");
  const [toastOpen, setToastOpen] = useState(false);
  const [bottomNav, setBottomNav] = useState("home");
  const [quantity, setQuantity] = useState(2);

  const cuisines = useMemo(
    () => ["North Indian", "South Indian", "Bengali", "Healthy", "Vegan", "Snacks", "Desserts"],
    []
  );

  return (
    <main className="container-max space-y-16 py-10">
      <TopNav location="Bengaluru • 560001" />

      <Hero
        headline="Comforting meals from local chefs"
        subheadline="Order homely, nutritious dishes curated by passionate home chefs. Ready in under 30 minutes."
        ctaLabel="Explore meals"
        backgroundImage="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1400&q=80"
      />

      <SectionHeader
        eyebrow="Design Tokens"
        title="Foundations"
        description="Consistent colors, typography, and spacing for the Home Bite experience."
      />

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-card">
          <h3 className="text-lg font-semibold text-neutral-dark">Color Palette</h3>
          <ul className="mt-4 grid gap-3">
            {[
              { label: "Primary Orange", value: "#FF8A00" },
              { label: "Primary Green", value: "#3FAF3D" },
              { label: "Warm White", value: "#FFF9F3" },
              { label: "Light Grey", value: "#F2F2F2" },
              { label: "Text Dark", value: "#333333" },
              { label: "Error Red", value: "#FF3B30" }
            ].map((color) => (
              <li key={color.label} className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-2xl" style={{ backgroundColor: color.value }} />
                <div>
                  <p className="text-sm font-semibold text-neutral-dark">{color.label}</p>
                  <p className="text-xs text-neutral-dark/60">{color.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-card">
          <h3 className="text-lg font-semibold text-neutral-dark">Typography</h3>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm font-semibold text-primary-orange">H1 24px Semi-Bold</p>
              <p className="text-h1 mt-1">Home Bite</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-orange">H2 20px Medium</p>
              <p className="text-h2 mt-1">Community Favorites</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-orange">Body 16px Regular</p>
              <p className="text-body mt-1">Authentic dishes prepared fresh in small batches.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-orange">Small 13px Regular</p>
              <p className="text-small mt-1">Next delivery slot closes in 12 minutes.</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-card">
          <h3 className="text-lg font-semibold text-neutral-dark">Spacing Scale</h3>
          <ul className="mt-4 space-y-4">
            {[{ label: "Base", value: 8 }, { label: "Section", value: 16 }, { label: "Major", value: 24 }, { label: "Header", value: 32 }].map((space) => (
              <li key={space.label} className="flex items-center gap-4">
                <span className="h-2 rounded-full bg-primary-orange" style={{ width: `${space.value}px` }} />
                <div>
                  <p className="text-sm font-semibold text-neutral-dark">{space.label}</p>
                  <p className="text-xs text-neutral-dark/60">{space.value}px</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionHeader
        eyebrow="Authentication"
        title="Entry Flows"
        description="Phone number and OTP inputs tuned for Indian audiences."
        action={<Button onClick={() => setToastOpen(true)}>Trigger Toast</Button>}
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-card">
          <PhoneNumberInput value={phone} onChange={setPhone} />
          <div className="mt-6 space-y-4">
            <p className="text-sm font-semibold text-neutral-dark">OTP Input</p>
            <OtpInput length={4} value={otp} onChange={setOtp} />
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-card">
          <SearchBar />
          <div className="mt-6 space-y-4">
            <p className="text-sm font-semibold text-neutral-dark">Cuisine Tags</p>
            <CuisineMatrix tags={cuisines} />
          </div>
        </div>
      </section>

      <SectionHeader
        eyebrow="Controls"
        title="Buttons & Toggles"
        description="Primary actions, icon buttons, toggles, and quantity steppers."
      />

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-card space-y-4">
          <Button intent="primary">Primary Action</Button>
          <Button intent="secondary">Secondary Action</Button>
          <Button intent="ghost">Ghost Action</Button>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-card space-y-4">
          <div className="flex gap-3">
            <TagButton>Breakfast</TagButton>
            <TagButton selected>Lunch</TagButton>
            <TagButton>Dinner</TagButton>
          </div>
          <QuantityStepper value={quantity} onChange={setQuantity} />
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-card space-y-4">
          <Switch label="Remember this device" description="Skip OTP for future orders" />
          <TextField label="Delivery instructions" placeholder="Ring the doorbell twice" />
        </div>
      </section>

      <SectionHeader
        eyebrow="Discovery"
        title="Meal Browsing"
        description="Cards and badges highlight the best dishes and chefs."
      />

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Paneer Butter Masala",
            chef: "Chef Ananya",
            price: 289,
            rating: 4.8,
            imageUrl: mealImages[0]
          },
          {
            title: "Chettinad Chicken",
            chef: "Chef Ravi",
            price: 329,
            rating: 4.7,
            imageUrl: mealImages[1],
            featured: true
          },
          {
            title: "Millet Buddha Bowl",
            chef: "Chef Priya",
            price: 249,
            rating: 4.6,
            imageUrl: mealImages[2],
            tags: ["Low Carb", "High Protein"]
          }
        ].map((meal) => (
          <MealCard key={meal.title} {...meal} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <ChefCard
          name="Chef Meera"
          speciality="Homestyle Karnataka meals"
          rating={4.9}
          deliveryTime="20-25 min"
          avatarUrl={chefImages[0]}
        />
        <CartItemCard
          name="Veg Thali"
          chef="Chef Arjun"
          price={199}
          quantity={quantity}
          imageUrl={mealImages[0]}
          onQuantityChange={setQuantity}
        />
      </section>

      <SectionHeader
        eyebrow="Checkout"
        title="Order Experience"
        description="Timeline, reviews, banners, and empty states for customer journeys."
      />

      <section className="grid gap-6 lg:grid-cols-3">
        <OrderTimeline currentStatus="preparing" etaMinutes={18} />
        <ReviewCard
          reviewer="Rohit Sharma"
          date="12 Apr, 2024"
          comment="Incredible taste and packaging. The portions were generous and still warm on arrival!"
          rating={4.9}
        />
        <EmptyState
          title="No saved addresses yet"
          description="Add a delivery location to speed up your next order."
          ctaLabel="Add address"
        />
      </section>

      <SectionHeader
        eyebrow="Surfaces"
        title="Banners, Modals & Sheets"
        description="Reassure customers and highlight critical moments."
      />

      <section className="grid gap-6 lg:grid-cols-3">
        <Banner tone="prominent" action={<Button size="sm">Track now</Button>}>
          Delivery partner is 5 minutes away
        </Banner>
        <Modal title="Apply coupon" description="Save more on your next order!">
          <TextField label="Coupon code" placeholder="EATLOCAL" />
        </Modal>
        <BottomSheet title="Order summary" description="Review before checkout">
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-dark/70">Subtotal</span>
            <span className="text-sm font-semibold text-neutral-dark">₹648</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-dark/70">Delivery</span>
            <span className="text-sm font-semibold text-neutral-dark">₹30</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-dark/70">Savings</span>
            <span className="text-sm font-semibold text-primary-green">− ₹80</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-neutral-dark">Total</span>
            <span className="text-base font-semibold text-primary-orange">₹598</span>
          </div>
        </BottomSheet>
      </section>

      <SectionHeader
        eyebrow="Brand"
        title="Why customers love Home Bite"
        description="Highlights reinforce the brand promise across touchpoints."
      />

      <HighlightsGrid
        highlights={[
          {
            title: "Chef-crafted menus",
            description: "Every meal is curated by a verified home chef using locally sourced ingredients.",
            icon: "👩‍🍳"
          },
          {
            title: "Everyday nutrition",
            description: "Balanced meals with mindful portions and transparent nutritional info.",
            icon: "🥗"
          },
          {
            title: "Community favourite",
            description: "Rated 4.8★ by thousands of happy customers across Bengaluru.",
            icon: "🌟"
          }
        ]}
      />

      <SectionHeader eyebrow="Utilities" title="Form Field Variations" />

      <section className="grid gap-6 lg:grid-cols-2">
        <TextField label="Landmark" placeholder="Near Central Mall" helperText="This helps our partner deliver faster" />
        <TextField label="Contact person" placeholder="Sanjana" error="Required for gated communities" />
      </section>

      <section className="rounded-3xl bg-neutral-light/60 p-6">
        <h3 className="text-lg font-semibold text-neutral-dark">Reusable Badges & Ratings</h3>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Badge tone="default">New</Badge>
          <Badge tone="positive">Pure Veg</Badge>
          <Badge tone="warning">Spicy</Badge>
          <RatingStars rating={4.7} />
        </div>
      </section>

      <Banner tone="info">Download the Home Bite app for a richer experience</Banner>

      <BottomNav activeId={bottomNav} onChange={setBottomNav} />
      <Toast
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        tone="success"
        title="Added to cart"
        description="Paneer Butter Masala will be ready in 18 minutes"
      />
    </main>
  );
}
