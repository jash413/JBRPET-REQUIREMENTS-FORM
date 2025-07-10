import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight, Users, Key } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              JB rPET INDUSTRIES PVT LTD
            </h1>
          </div>

          <h2 className="text-xl sm:text-3xl font-semibold text-slate-700 mb-4 sm:mb-6">
            Submit Your Project Requirements
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Welcome to our comprehensive requirements gathering platform. Choose
            the appropriate form to help us design the perfect solution tailored
            to your specific needs.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-4 pb-4 px-4 sm:pt-6 sm:pb-6 sm:px-6 text-center">
                <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">
                  For
                </h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  Hardik Agrawal
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-4 pb-4 px-4 sm:pt-6 sm:pb-6 sm:px-6 text-center">
                <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-green-600 font-bold text-base sm:text-lg">
                    ⏱
                  </span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">
                  Duration
                </h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  10-15 minutes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-4 pb-4 px-4 sm:pt-6 sm:pb-6 sm:px-6 text-center">
                <div className="bg-purple-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Key className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">
                  Purpose
                </h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  Custom Dashboard Design
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                  Select Your Requirements Form
                </h3>
                <p className="text-slate-600 text-lg">
                  Choose the form that best matches your project needs
                </p>
              </div>
              <div className="grid gap-6">
                <Link to="/general" className="block">
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
                            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="text-left">
                            <h4 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                              General Requirements Form For Both Dashboards
                            </h4>
                            <p className="text-slate-600 text-sm sm:text-base">
                              Use this form to submit general requirements for
                              both the Thermopack and Steam-boiler monitoring
                              dashboards
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>{" "}
              <br />
              <div className="grid gap-6">
                <Link to="/thermopack" className="block">
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
                            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="text-left">
                            <h4 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                              Thermopack Monitoring Dashboard
                            </h4>
                            <p className="text-slate-600 text-sm sm:text-base">
                              Industrial monitoring system for thermopack units
                              with real-time data tracking and analytics
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>{" "}
              <br />
              <div className="grid gap-6">
                <Link to="/steam-boiler" className="block">
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
                            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="text-left">
                            <h4 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                              Steam-boiler Monitoring Dashboard
                            </h4>
                            <p className="text-slate-600 text-sm sm:text-base">
                              Industrial monitoring system for the steam-boiler
                              units with real-time data tracking and analytics
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-blue-600 flex-shrink-0" />
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
