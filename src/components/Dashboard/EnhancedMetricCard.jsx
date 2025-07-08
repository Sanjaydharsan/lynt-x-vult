"use client";

import { useState } from 'react';
import { ArrowDown, ArrowUp, TrendingUp, TrendingDown, Info, MoreHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function EnhancedMetricCard({
  title,
  value,
  previousValue,
  change,
  changeType = "increase",
  trend = [],
  unit = "",
  prefix = "",
  icon: Icon,
  color = "blue",
  isLoading = false,
  isRealtime = false,
  onClick,
  actions = []
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getColorClasses = () => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        icon: "text-blue-500"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200", 
        text: "text-green-600",
        icon: "text-green-500"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        icon: "text-purple-500"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-600",
        icon: "text-orange-500"
      }
    };
    return colors[color] || colors.blue;
  };

  const getChangeColor = () => {
    if (change === 0) return "text-gray-500 bg-gray-100";
    if (changeType === "increase") {
      return change > 0 ? "text-green-600 bg-green-100" : "text-red-500 bg-red-100";
    } else {
      return change > 0 ? "text-red-500 bg-red-100" : "text-green-600 bg-green-100";
    }
  };

  const colorClasses = getColorClasses();
  const changeColorClasses = getChangeColor();

  const formatValue = (val) => {
    if (typeof val !== 'number') return val;
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
    return val.toLocaleString();
  };

  const formatChange = (change) => {
    const sign = change > 0 ? '+' : '';
    return `${sign}${change}%`;
  };

  const renderMiniChart = () => {
    if (trend.length === 0) return null;
    
    const max = Math.max(...trend);
    const min = Math.min(...trend);
    const range = max - min;
    
    return (
      <div className="flex items-end gap-0.5 h-6 w-16">
        {trend.map((value, index) => {
          const height = range === 0 ? 4 : ((value - min) / range) * 20 + 4;
          return (
            <div
              key={index}
              className={`w-1 rounded-sm ${colorClasses.text} bg-current opacity-70`}
              style={{ height: `${height}px` }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <Card 
      className={`${colorClasses.bg} ${colorClasses.border} border transition-all duration-300 hover:shadow-lg cursor-pointer group relative overflow-hidden`}
      onClick={onClick}
    >
      {/* Real-time indicator */}
      {isRealtime && (
        <div className="absolute top-2 right-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </div>
      )}

      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className={`p-2 rounded-lg ${colorClasses.bg} ${colorClasses.border} border`}>
                <Icon className={`w-5 h-5 ${colorClasses.icon}`} />
              </div>
            )}
            <div>
              <h3 className="text-sm font-medium text-gray-700">{title}</h3>
              {isRealtime && (
                <Badge variant="outline" className="text-xs mt-1">
                  Live
                </Badge>
              )}
            </div>
          </div>
          
          {actions.length > 0 && (
            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Main Value */}
        <div className="flex items-end justify-between mb-3">
          <div className="flex items-baseline gap-1">
            {prefix && <span className="text-lg text-gray-500">{prefix}</span>}
            <span className="text-3xl font-bold text-gray-900">
              {formatValue(value)}
            </span>
            {unit && <span className="text-sm text-gray-500 ml-1">{unit}</span>}
          </div>
          
          {renderMiniChart()}
        </div>

        {/* Change Indicator */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {typeof change === 'number' && (
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${changeColorClasses}`}>
                {changeType === "increase" ? (
                  change > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />
                ) : (
                  change > 0 ? <ArrowDown className="w-3 h-3" /> : <ArrowUp className="w-3 h-3" />
                )}
                <span>{formatChange(Math.abs(change))}</span>
              </div>
            )}
            
            {previousValue && (
              <span className="text-xs text-gray-500">
                vs {formatValue(previousValue)}
              </span>
            )}
          </div>

          {trend.length > 0 && (
            <div className="flex items-center gap-1 text-xs text-gray-500">
              {changeType === "increase" && change > 0 ? (
                <TrendingUp className="w-3 h-3 text-green-500" />
              ) : (
                <TrendingDown className="w-3 h-3 text-red-500" />
              )}
              <span>7d trend</span>
            </div>
          )}
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Today</span>
              <span className="font-medium">{formatValue(value)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Yesterday</span>
              <span className="font-medium">{formatValue(previousValue || 0)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Change</span>
              <span className={`font-medium ${change > 0 ? 'text-green-600' : 'text-red-500'}`}>
                {formatChange(change)}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 