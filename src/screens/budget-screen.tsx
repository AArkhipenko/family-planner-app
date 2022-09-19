import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenProps } from './types';

const BudgetScreen: React.FC<ScreenProps> = (_props) => {
    const [counter, setCounter] = useState<number>(0);
    return (
        <SafeAreaView>
            <Text>Press count: {counter}</Text>
            <Button title="Press me!" onPress={() => setCounter(counter + 1)} />
        </SafeAreaView>
    );
};

export default BudgetScreen;
