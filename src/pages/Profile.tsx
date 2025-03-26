
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { User, Settings, MapPin, Calendar, Star, LogOut, Bell, CreditCard, Lock, File, HelpCircle, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Profile = () => {
  // Smooth scrolling for page transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-28 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="sticky top-28">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 mb-4 flex items-center justify-center">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">Alex Johnson</h2>
                  <p className="text-sm text-muted-foreground">Premium Member</p>
                </div>
                
                <nav className="space-y-1">
                  {[
                    { icon: <User className="h-5 w-5" />, label: "Account", active: true },
                    { icon: <Map className="h-5 w-5" />, label: "My Trips" },
                    { icon: <Star className="h-5 w-5" />, label: "Saved" },
                    { icon: <Bell className="h-5 w-5" />, label: "Notifications" },
                    { icon: <CreditCard className="h-5 w-5" />, label: "Payment Methods" },
                    { icon: <Lock className="h-5 w-5" />, label: "Privacy" },
                    { icon: <Settings className="h-5 w-5" />, label: "Settings" },
                    { icon: <HelpCircle className="h-5 w-5" />, label: "Help & Support" }
                  ].map((item) => (
                    <button 
                      key={item.label} 
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        item.active 
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
                
                <div className="mt-8">
                  <Button variant="outline" className="w-full justify-start text-muted-foreground">
                    <LogOut className="h-5 w-5 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1">
              <div className="bg-white border border-border rounded-xl shadow-sm p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Profile Information</h3>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">Full Name</label>
                      <div className="text-foreground font-medium">Alex Johnson</div>
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">Email</label>
                      <div className="text-foreground font-medium">alex.johnson@example.com</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">Phone</label>
                      <div className="text-foreground font-medium">+1 (555) 123-4567</div>
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">Location</label>
                      <div className="text-foreground font-medium flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        San Francisco, CA
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1">About</label>
                    <div className="text-foreground">
                      Passionate traveler seeking new experiences and cultures. Love food, photography, and hiking.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-border rounded-xl shadow-sm p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Travel Preferences</h3>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">Preferred Travel Style</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-secondary text-xs rounded-full px-2 py-1">Adventure</span>
                      <span className="bg-secondary text-xs rounded-full px-2 py-1">Culture</span>
                      <span className="bg-secondary text-xs rounded-full px-2 py-1">Food</span>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">Accommodation</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-secondary text-xs rounded-full px-2 py-1">Boutique Hotels</span>
                      <span className="bg-secondary text-xs rounded-full px-2 py-1">Luxury</span>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">Budget Range</div>
                    <div className="font-medium">$150 - $300 per night</div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">Transportation</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-secondary text-xs rounded-full px-2 py-1">Public Transit</span>
                      <span className="bg-secondary text-xs rounded-full px-2 py-1">Walking</span>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">Dietary Preferences</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-secondary text-xs rounded-full px-2 py-1">Vegetarian Options</span>
                      <span className="bg-secondary text-xs rounded-full px-2 py-1">Local Cuisine</span>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">Accessibility Needs</div>
                    <div className="font-medium">None specified</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-border rounded-xl shadow-sm p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Recent Activity</h3>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View All
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      action: "Updated trip itinerary",
                      trip: "Paris Getaway",
                      date: "2 days ago",
                      icon: <Calendar className="h-4 w-4" />
                    },
                    {
                      action: "Saved new destination",
                      trip: "Kyoto, Japan",
                      date: "4 days ago",
                      icon: <Star className="h-4 w-4" />
                    },
                    {
                      action: "Completed trip",
                      trip: "Tokyo Adventure",
                      date: "3 weeks ago",
                      icon: <File className="h-4 w-4" />
                    }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {activity.icon}
                      </div>
                      <div>
                        <div className="font-medium">{activity.action}</div>
                        <div className="text-sm text-muted-foreground">
                          {activity.trip} • {activity.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-primary/20 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Premium Membership</h3>
                    <p className="text-muted-foreground mb-4 md:mb-0">
                      Your subscription renews on October 15, 2023
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline">
                      Manage Plan
                    </Button>
                    <Button>
                      View Benefits
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
