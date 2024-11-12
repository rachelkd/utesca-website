import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface PortfolioProps {
    readonly name: string;
    readonly role: string;
    readonly program: string;
    readonly imageUrl: string;
}

export function Portfolio({ name, role, program, imageUrl }: PortfolioProps) {
    return (
        <Card className='bg-transparent border-none shadow-none w-32'>
            <CardContent className='p-0 flex flex-col items-start'>
                <Avatar className='w-32 h-32 mb-1 rounded-lg'>
                    <AvatarImage
                        src={imageUrl}
                        alt={name}
                        width={500}
                        height={500}
                        className='object-cover'
                    />
                    <AvatarFallback className='rounded-lg'>
                        {name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                    </AvatarFallback>
                </Avatar>
                <div className='text-left w-full'>
                    <p className='font-semibold text-subtle text-sm'>{name}</p>
                    <p className='text-sm text-subtle'>{role}</p>
                    <p className='text-sm text-subtle'>{program}</p>
                </div>
            </CardContent>
        </Card>
    );
}
