import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Building2, ArrowRight, Users, Key } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center shadow-md">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              JB rPET INDUSTRIES PVT LTD
            </h1>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 mb-3 sm:mb-4 lg:mb-6">
            Submit Your Project Requirements
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 px-2 sm:px-4">
            Welcome to our comprehensive requirements gathering platform. Choose
            the appropriate form to help us design the perfect solution tailored
            to your specific needs.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto mb-4 sm:mb-6 lg:mb-8">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-5 lg:p-6 text-center">
                <div className="bg-blue-100 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                  For
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm lg:text-base">
                  Hardik Agrawal
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-5 lg:p-6 text-center">
                <div className="bg-green-100 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                  <span className="text-green-600 font-bold text-sm sm:text-base lg:text-lg">
                    ⏱
                  </span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                  Duration
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm lg:text-base">
                  10-15 minutes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-5 lg:p-6 text-center">
                <div className="bg-purple-100 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                  <Key className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                  Purpose
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm lg:text-base">
                  Custom Dashboard Design
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">
                  Select Your Requirements Form
                </h3>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                  Choose the form that best matches your project needs
                </p>
              </div>
              <div className="grid gap-3 sm:gap-4 lg:gap-6">
                <Link to="/general" className="block">
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-md touch-manipulation">
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                          </div>
                          <div className="text-left">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1 sm:mb-2">
                              General Requirements Form
                            </h4>
                            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                              For both Thermopack and Steam-boiler dashboards
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 self-end sm:self-center" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/thermopack" className="block">
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-md touch-manipulation">
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                          </div>
                          <div className="text-left">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1 sm:mb-2">
                              Thermopack Dashboard
                            </h4>
                            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                              Real-time monitoring for thermopack units
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 self-end sm:self-center" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/steam-boiler" className="block">
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-md touch-manipulation">
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                          </div>
                          <div className="text-left">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1 sm:mb-2">
                              Steam-boiler Dashboard
                            </h4>
                            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                              Real-time monitoring for steam-boiler units
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 self-end sm:self-center" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;