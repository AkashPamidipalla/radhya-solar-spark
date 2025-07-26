import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Zap, TrendingUp, Sun } from "lucide-react";

const SavingsCalculator = () => {
  const [location, setLocation] = useState("");
  const [monthlyConsumption, setMonthlyConsumption] = useState("");
  const [results, setResults] = useState<any>(null);

  // State-specific rates
  const stateRates = {
    "andhra-pradesh": { 
      electricityCost: 7.65, 
      exportRate: 3.00, 
      name: "Andhra Pradesh",
      sunlightHours: 5.5 
    },
    "telangana": { 
      electricityCost: 8.20, 
      exportRate: 3.50, 
      name: "Telangana",
      sunlightHours: 5.8 
    },
    "karnataka": { 
      electricityCost: 7.90, 
      exportRate: 3.20, 
      name: "Karnataka",
      sunlightHours: 5.6 
    },
    "tamil-nadu": { 
      electricityCost: 6.50, 
      exportRate: 2.75, 
      name: "Tamil Nadu",
      sunlightHours: 5.4 
    }
  };

  const calculateSavings = () => {
    if (!location || !monthlyConsumption) return;

    const consumption = parseFloat(monthlyConsumption);
    const stateData = stateRates[location as keyof typeof stateRates];
    
    // Current monthly bill
    const currentBill = consumption * stateData.electricityCost;
    
    // Solar system size needed (assuming 4.5 units per kW per day)
    const dailyConsumption = consumption / 30;
    const systemSizeKW = dailyConsumption / (stateData.sunlightHours * 0.8); // 80% efficiency
    
    // Solar generation per month
    const monthlyGeneration = systemSizeKW * stateData.sunlightHours * 30 * 0.8;
    
    // Savings calculation
    const gridOffset = Math.min(consumption, monthlyGeneration);
    const excessGeneration = Math.max(0, monthlyGeneration - consumption);
    const exportEarnings = excessGeneration * stateData.exportRate;
    const gridSavings = gridOffset * stateData.electricityCost;
    const totalMonthlySavings = gridSavings + exportEarnings;
    const newBill = Math.max(0, (consumption - gridOffset) * stateData.electricityCost - exportEarnings);
    
    // Annual calculations
    const annualSavings = totalMonthlySavings * 12;
    const systemCost = systemSizeKW * 60000; // ₹60,000 per kW
    const paybackPeriod = systemCost / annualSavings;
    const twentyFiveYearSavings = annualSavings * 25 - systemCost;

    setResults({
      currentBill,
      newBill,
      monthlySavings: totalMonthlySavings,
      annualSavings,
      systemSize: systemSizeKW,
      systemCost,
      paybackPeriod,
      twentyFiveYearSavings,
      monthlyGeneration,
      stateName: stateData.name
    });
  };

  useEffect(() => {
    if (location && monthlyConsumption) {
      calculateSavings();
    }
  }, [location, monthlyConsumption]);

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Calculate Your Solar Savings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how much you can save with solar energy. Get instant estimates 
            for your location and consumption.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="calculator-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Solar Calculator
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="location" className="text-base font-medium">
                      Select Your Location
                    </Label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="Choose your state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                        <SelectItem value="telangana">Telangana</SelectItem>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                        <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="consumption" className="text-base font-medium">
                      Monthly Electricity Consumption (Units)
                    </Label>
                    <Input
                      id="consumption"
                      type="number"
                      placeholder="e.g., 300"
                      value={monthlyConsumption}
                      onChange={(e) => setMonthlyConsumption(e.target.value)}
                      className="mt-2"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Check your electricity bill for monthly units consumed
                    </p>
                  </div>

                  <Button 
                    onClick={calculateSavings}
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-3"
                    disabled={!location || !monthlyConsumption}
                  >
                    Calculate My Savings
                  </Button>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                {results ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Your Solar Savings Report
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                        <div className="text-sm text-red-600 font-medium">Current Bill</div>
                        <div className="text-2xl font-bold text-red-700">
                          ₹{results.currentBill.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-500">per month</div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                        <div className="text-sm text-green-600 font-medium">New Bill</div>
                        <div className="text-2xl font-bold text-green-700">
                          ₹{results.newBill.toLocaleString()}
                        </div>
                        <div className="text-xs text-green-500">per month</div>
                      </div>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                      <div className="flex items-center space-x-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span className="font-medium text-primary">Monthly Savings</span>
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        ₹{results.monthlySavings.toLocaleString()}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">System Size Needed:</span>
                        <span className="font-semibold">{results.systemSize.toFixed(1)} kW</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">System Cost:</span>
                        <span className="font-semibold">₹{results.systemCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Payback Period:</span>
                        <span className="font-semibold">{results.paybackPeriod.toFixed(1)} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">25-Year Savings:</span>
                        <span className="font-semibold text-primary">₹{results.twentyFiveYearSavings.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="bg-accent/20 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sun className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Assumptions</span>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Location: {results.stateName}</li>
                        <li>• System efficiency: 80%</li>
                        <li>• Annual degradation: 0.5%</li>
                        <li>• Monthly generation: {results.monthlyGeneration.toFixed(0)} units</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <Zap className="w-16 h-16 text-muted-foreground/30 mb-4" />
                    <p className="text-muted-foreground">
                      Enter your location and monthly consumption to see your solar savings potential.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;