import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface MissionCardProps {
    Icon: LucideIcon;
    text: string;
    className?: string;
}

const MissionCard: React.FC<MissionCardProps> = ({ Icon, text, className }) => {
    return (
        <Card className={`bg-card border-none w-full max-w-sm ${className}`}>
            <CardContent className='flex flex-col items-center p-6'>
                <Icon className='w-12 h-12 text-accent mb-4' />
                <p className='text-card-foreground text-center text-sm'>
                    {text}
                </p>
            </CardContent>
        </Card>
    );
};

export default MissionCard;
